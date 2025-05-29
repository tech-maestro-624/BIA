<?php
// Simple Admin Dashboard for BIA Website
// Password protect this in production!

session_start();

// Simple authentication (replace with proper auth system)
$admin_password = 'bia_admin_2024'; // Change this password!

if (isset($_POST['password'])) {
    if ($_POST['password'] === $admin_password) {
        $_SESSION['admin_logged_in'] = true;
    } else {
        $error = 'Invalid password';
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: dashboard.php');
    exit;
}

if (!isset($_SESSION['admin_logged_in'])) {
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <title>BIA Admin Dashboard</title>
        <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; padding: 50px; }
            .login-form { max-width: 400px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
            input[type="password"] { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 5px; }
            input[type="submit"] { background: #000069; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; }
            .error { color: red; margin: 10px 0; }
        </style>
    </head>
    <body>
        <div class="login-form">
            <h2>BIA Admin Dashboard</h2>
            <form method="post">
                <input type="password" name="password" placeholder="Enter admin password" required>
                <input type="submit" value="Login">
            </form>
            <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
        </div>
    </body>
    </html>
    <?php
    exit;
}

// Database configuration
$db_config = [
    'host' => 'localhost',
    'dbname' => 'bia_website',
    'username' => 'your_db_username', // Update with your DB username
    'password' => 'your_db_password', // Update with your DB password
];

try {
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset=utf8mb4";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // Get statistics
    $stats = [
        'total_submissions' => $pdo->query("SELECT COUNT(*) FROM form_submissions")->fetchColumn(),
        'today_submissions' => $pdo->query("SELECT COUNT(*) FROM form_submissions WHERE DATE(created_at) = CURDATE()")->fetchColumn(),
        'pending_emails' => $pdo->query("SELECT COUNT(*) FROM email_queue WHERE status = 'pending'")->fetchColumn(),
        'failed_emails' => $pdo->query("SELECT COUNT(*) FROM email_queue WHERE status = 'failed'")->fetchColumn(),
    ];

    // Get recent submissions
    $recent_submissions = $pdo->query("
        SELECT fs.*, 
               (SELECT COUNT(*) FROM email_queue WHERE submission_id = fs.id AND status = 'sent') as emails_sent
        FROM form_submissions fs 
        ORDER BY fs.created_at DESC 
        LIMIT 20
    ")->fetchAll();

    // Get email queue status
    $email_queue = $pdo->query("
        SELECT eq.*, fs.name, fs.email as user_email
        FROM email_queue eq
        LEFT JOIN form_submissions fs ON eq.submission_id = fs.id
        WHERE eq.status IN ('pending', 'failed')
        ORDER BY eq.created_at DESC
        LIMIT 10
    ")->fetchAll();

} catch (Exception $e) {
    die('Database connection failed: ' . $e->getMessage());
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>BIA Admin Dashboard</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f5f5f5; line-height: 1.6; }
        .header { background: #000069; color: white; padding: 20px; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); text-align: center; }
        .stat-number { font-size: 2em; font-weight: bold; color: #000069; }
        .stat-label { color: #666; margin-top: 5px; }
        .section { background: white; margin-bottom: 20px; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .section-header { background: #000069; color: white; padding: 15px 20px; font-weight: bold; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #f8f9fa; font-weight: bold; }
        .status-new { background: #e3f2fd; color: #1976d2; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .status-contacted { background: #f3e5f5; color: #7b1fa2; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .status-pending { background: #fff3e0; color: #f57c00; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .status-failed { background: #ffebee; color: #d32f2f; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .status-sent { background: #e8f5e8; color: #2e7d32; padding: 4px 8px; border-radius: 4px; font-size: 0.8em; }
        .logout { float: right; color: white; text-decoration: none; background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 5px; }
        .refresh { margin-bottom: 20px; }
        .refresh a { background: #000069; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; }
        @media (max-width: 768px) {
            .container { padding: 10px; }
            table { font-size: 0.9em; }
            th, td { padding: 8px; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>BIA Admin Dashboard</h1>
        <a href="?logout" class="logout">Logout</a>
    </div>

    <div class="container">
        <div class="refresh">
            <a href="dashboard.php">🔄 Refresh Data</a>
        </div>

        <!-- Statistics -->
        <div class="stats">
            <div class="stat-card">
                <div class="stat-number"><?= $stats['total_submissions'] ?></div>
                <div class="stat-label">Total Submissions</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?= $stats['today_submissions'] ?></div>
                <div class="stat-label">Today's Submissions</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?= $stats['pending_emails'] ?></div>
                <div class="stat-label">Pending Emails</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?= $stats['failed_emails'] ?></div>
                <div class="stat-label">Failed Emails</div>
            </div>
        </div>

        <!-- Recent Submissions -->
        <div class="section">
            <div class="section-header">Recent Form Submissions (Last 20)</div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Emails Sent</th>
                        <th>Submitted</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($recent_submissions as $submission): ?>
                    <tr>
                        <td><?= $submission['id'] ?></td>
                        <td><?= htmlspecialchars($submission['name']) ?></td>
                        <td><?= htmlspecialchars($submission['email']) ?></td>
                        <td><?= htmlspecialchars($submission['phone']) ?></td>
                        <td><?= htmlspecialchars($submission['city']) ?></td>
                        <td><?= htmlspecialchars($submission['country']) ?></td>
                        <td><?= htmlspecialchars($submission['source']) ?></td>
                        <td><span class="status-<?= $submission['status'] ?>"><?= ucfirst($submission['status']) ?></span></td>
                        <td><?= $submission['emails_sent'] ?></td>
                        <td><?= date('M d, Y H:i', strtotime($submission['created_at'])) ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>

        <!-- Email Queue Status -->
        <?php if (!empty($email_queue)): ?>
        <div class="section">
            <div class="section-header">Email Queue Status (Pending/Failed)</div>
            <table>
                <thead>
                    <tr>
                        <th>Queue ID</th>
                        <th>Type</th>
                        <th>Recipient</th>
                        <th>User Name</th>
                        <th>Status</th>
                        <th>Attempts</th>
                        <th>Scheduled</th>
                        <th>Error</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($email_queue as $email): ?>
                    <tr>
                        <td><?= $email['id'] ?></td>
                        <td><?= str_replace('_', ' ', ucfirst($email['email_type'])) ?></td>
                        <td><?= htmlspecialchars($email['recipient_email']) ?></td>
                        <td><?= htmlspecialchars($email['name'] ?? 'N/A') ?></td>
                        <td><span class="status-<?= $email['status'] ?>"><?= ucfirst($email['status']) ?></span></td>
                        <td><?= $email['attempts'] ?>/<?= $email['max_attempts'] ?></td>
                        <td><?= date('M d, Y H:i', strtotime($email['scheduled_at'])) ?></td>
                        <td><?= htmlspecialchars(substr($email['error_message'] ?? '', 0, 50)) ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <?php endif; ?>

        <!-- System Info -->
        <div class="section">
            <div class="section-header">System Information</div>
            <table>
                <tr>
                    <td><strong>Server Time:</strong></td>
                    <td><?= date('Y-m-d H:i:s T') ?></td>
                </tr>
                <tr>
                    <td><strong>PHP Version:</strong></td>
                    <td><?= PHP_VERSION ?></td>
                </tr>
                <tr>
                    <td><strong>Database:</strong></td>
                    <td><?= $pdo->getAttribute(PDO::ATTR_SERVER_VERSION) ?></td>
                </tr>
                <tr>
                    <td><strong>Last Refresh:</strong></td>
                    <td><?= date('Y-m-d H:i:s') ?></td>
                </tr>
            </table>
        </div>
    </div>
</body>
</html> 