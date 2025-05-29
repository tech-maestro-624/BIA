<?php
/**
 * Email Queue Processor
 * Run this script via cron job every 5 minutes:
 * */5 * * * * /usr/bin/php /path/to/your/scripts/process-email-queue.php >> /var/log/bia-email-queue.log 2>&1
 */

// Prevent running multiple instances
$lockFile = '/tmp/bia-email-queue.lock';
if (file_exists($lockFile)) {
    $pid = trim(file_get_contents($lockFile));
    if (posix_kill($pid, 0)) {
        echo date('Y-m-d H:i:s') . " - Email queue processor is already running (PID: $pid)\n";
        exit;
    } else {
        unlink($lockFile);
    }
}
file_put_contents($lockFile, getmypid());

// Clean up lock file on exit
register_shutdown_function(function() use ($lockFile) {
    if (file_exists($lockFile)) {
        unlink($lockFile);
    }
});

// Database configuration
$db_config = [
    'host' => 'localhost',
    'dbname' => 'bia_website',
    'username' => 'your_db_username', // Update with your DB username
    'password' => 'your_db_password', // Update with your DB password
];

// SMTP configuration
$smtp_config = [
    'host' => 'smtp.gmail.com', // Update with your SMTP host
    'port' => 587,
    'username' => 'your-email@gmail.com', // Update with your email
    'password' => 'your-app-password', // Update with your app password
    'from_email' => 'noreply@bostoninstituteofanalytics.org',
    'from_name' => 'Boston Institute of Analytics',
];

try {
    // Connect to database
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset=utf8mb4";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    
    echo date('Y-m-d H:i:s') . " - Starting email queue processing...\n";
    
    // Get pending emails, ordered by priority and scheduled time
    $query = "
        SELECT eq.*, fs.name, fs.email as user_email, fs.phone, fs.city, fs.country, fs.source, fs.created_at as submission_time
        FROM email_queue eq
        LEFT JOIN form_submissions fs ON eq.submission_id = fs.id
        WHERE eq.status = 'pending' 
        AND eq.scheduled_at <= NOW()
        AND eq.attempts < eq.max_attempts
        ORDER BY eq.priority ASC, eq.scheduled_at ASC
        LIMIT 50
    ";
    
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $emails = $stmt->fetchAll();
    
    if (empty($emails)) {
        echo date('Y-m-d H:i:s') . " - No pending emails to process\n";
        exit;
    }
    
    echo date('Y-m-d H:i:s') . " - Found " . count($emails) . " emails to process\n";
    
    foreach ($emails as $email) {
        try {
            // Update attempts count
            $update_attempts = "UPDATE email_queue SET attempts = attempts + 1 WHERE id = ?";
            $pdo->prepare($update_attempts)->execute([$email['id']]);
            
            // Get email template
            $template_query = "SELECT * FROM email_templates WHERE template_type = ? AND is_active = 1";
            $template_stmt = $pdo->prepare($template_query);
            $template_stmt->execute([$email['email_type']]);
            $template = $template_stmt->fetch();
            
            if (!$template) {
                throw new Exception("No active template found for type: " . $email['email_type']);
            }
            
            // Prepare email content
            $subject = $template['subject'];
            $body_html = $template['body_html'];
            $body_text = $template['body_text'];
            
            // Replace placeholders
            $placeholders = [
                '{{NAME}}' => $email['name'] ?? 'Valued Customer',
                '{{EMAIL}}' => $email['user_email'] ?? '',
                '{{PHONE}}' => $email['phone'] ?? '',
                '{{CITY}}' => $email['city'] ?? '',
                '{{COUNTRY}}' => $email['country'] ?? '',
                '{{SOURCE}}' => ucfirst($email['source'] ?? 'unknown'),
                '{{TIMESTAMP}}' => date('M d, Y \a\t g:i A', strtotime($email['submission_time'])),
            ];
            
            foreach ($placeholders as $placeholder => $value) {
                $subject = str_replace($placeholder, $value, $subject);
                $body_html = str_replace($placeholder, $value, $body_html);
                $body_text = str_replace($placeholder, $value, $body_text);
            }
            
            // Send email
            $success = sendEmail(
                $email['recipient_email'],
                $subject,
                $body_html,
                $body_text,
                $smtp_config
            );
            
            if ($success) {
                // Mark as sent
                $update_sent = "UPDATE email_queue SET status = 'sent', sent_at = NOW(), error_message = NULL WHERE id = ?";
                $pdo->prepare($update_sent)->execute([$email['id']]);
                
                echo date('Y-m-d H:i:s') . " - Email sent successfully to {$email['recipient_email']} (Type: {$email['email_type']})\n";
            } else {
                throw new Exception("Failed to send email");
            }
            
        } catch (Exception $e) {
            $error_message = $e->getMessage();
            echo date('Y-m-d H:i:s') . " - Error sending email {$email['id']}: $error_message\n";
            
            // Check if max attempts reached
            if ($email['attempts'] + 1 >= $email['max_attempts']) {
                $update_failed = "UPDATE email_queue SET status = 'failed', error_message = ? WHERE id = ?";
                $pdo->prepare($update_failed)->execute([$error_message, $email['id']]);
            } else {
                // Schedule retry (exponential backoff)
                $retry_delay = pow(2, $email['attempts']) * 5; // 5, 10, 20 minutes
                $update_retry = "UPDATE email_queue SET scheduled_at = DATE_ADD(NOW(), INTERVAL ? MINUTE), error_message = ? WHERE id = ?";
                $pdo->prepare($update_retry)->execute([$retry_delay, $error_message, $email['id']]);
            }
        }
        
        // Small delay to avoid overwhelming the SMTP server
        usleep(500000); // 0.5 seconds
    }
    
    echo date('Y-m-d H:i:s') . " - Email queue processing completed\n";
    
} catch (Exception $e) {
    echo date('Y-m-d H:i:s') . " - Fatal error: " . $e->getMessage() . "\n";
}

/**
 * Send email using SMTP
 */
function sendEmail($to, $subject, $body_html, $body_text, $smtp_config) {
    // You can use PHPMailer, SwiftMailer, or native PHP mail()
    // Here's a simple implementation using mail() function
    // For production, consider using PHPMailer for better SMTP support
    
    $headers = [
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="boundary-' . uniqid() . '"',
        'From: ' . $smtp_config['from_name'] . ' <' . $smtp_config['from_email'] . '>',
        'Reply-To: ' . $smtp_config['from_email'],
        'X-Mailer: BIA Website',
    ];
    
    $boundary = 'boundary-' . uniqid();
    
    $message = "--$boundary\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= $body_text . "\r\n\r\n";
    
    $message .= "--$boundary\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $message .= $body_html . "\r\n\r\n";
    
    $message .= "--$boundary--";
    
    $headers[] = "Content-Type: multipart/alternative; boundary=\"$boundary\"";
    
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

/**
 * For production use, consider PHPMailer:
 * 
 * function sendEmailWithPHPMailer($to, $subject, $body_html, $body_text, $smtp_config) {
 *     require_once 'vendor/autoload.php';
 *     
 *     $mail = new PHPMailer\PHPMailer\PHPMailer(true);
 *     
 *     try {
 *         $mail->isSMTP();
 *         $mail->Host = $smtp_config['host'];
 *         $mail->SMTPAuth = true;
 *         $mail->Username = $smtp_config['username'];
 *         $mail->Password = $smtp_config['password'];
 *         $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
 *         $mail->Port = $smtp_config['port'];
 *         
 *         $mail->setFrom($smtp_config['from_email'], $smtp_config['from_name']);
 *         $mail->addAddress($to);
 *         
 *         $mail->isHTML(true);
 *         $mail->Subject = $subject;
 *         $mail->Body = $body_html;
 *         $mail->AltBody = $body_text;
 *         
 *         $mail->send();
 *         return true;
 *     } catch (Exception $e) {
 *         error_log("PHPMailer Error: {$mail->ErrorInfo}");
 *         return false;
 *     }
 * }
 */
?> 