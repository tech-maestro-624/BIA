<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
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
    // Get JSON input
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    if (!$data) {
        throw new Exception('Invalid JSON data');
    }
    
    // Validate required fields
    $required_fields = ['name', 'email', 'phone', 'city', 'country'];
    foreach ($required_fields as $field) {
        if (empty($data[$field])) {
            throw new Exception("Field '$field' is required");
        }
    }
    
    // Sanitize and validate data
    $name = trim($data['name']);
    $email = trim($data['email']);
    $phone = trim($data['phone']);
    $city = trim($data['city']);
    $country = trim($data['country']);
    $source = isset($data['source']) ? trim($data['source']) : 'unknown';
    $timestamp = isset($data['timestamp']) ? $data['timestamp'] : date('Y-m-d H:i:s');
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email format');
    }
    
    // Validate phone number (basic validation)
    if (!preg_match('/^[0-9+\-\s()]+$/', $phone)) {
        throw new Exception('Invalid phone number format');
    }
    
    // Validate name length
    if (strlen($name) < 2 || strlen($name) > 100) {
        throw new Exception('Name must be between 2 and 100 characters');
    }
    
    // Connect to database
    $dsn = "mysql:host={$db_config['host']};dbname={$db_config['dbname']};charset=utf8mb4";
    $pdo = new PDO($dsn, $db_config['username'], $db_config['password'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    
    // Check if email already exists in the last 24 hours (prevent spam)
    $check_query = "SELECT id FROM form_submissions WHERE email = ? AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)";
    $check_stmt = $pdo->prepare($check_query);
    $check_stmt->execute([$email]);
    
    if ($check_stmt->rowCount() > 0) {
        echo json_encode([
            'success' => true, 
            'message' => 'We have already received your inquiry. Our team will contact you soon.',
            'duplicate' => true
        ]);
        exit;
    }
    
    // Insert form submission
    $insert_query = "INSERT INTO form_submissions (name, email, phone, city, country, source, ip_address, user_agent, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())";
    $insert_stmt = $pdo->prepare($insert_query);
    
    $ip_address = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
    $insert_stmt->execute([$name, $email, $phone, $city, $country, $source, $ip_address, $user_agent]);
    
    $submission_id = $pdo->lastInsertId();
    
    // Add to email queue
    $queue_query = "INSERT INTO email_queue (submission_id, email_type, recipient_email, priority, created_at) VALUES (?, ?, ?, ?, NOW())";
    $queue_stmt = $pdo->prepare($queue_query);
    
    // Add user notification email
    $queue_stmt->execute([$submission_id, 'user_confirmation', $email, 2]);
    
    // Add admin notification email
    $admin_email = 'admin@bostoninstituteofanalytics.org'; // Update with actual admin email
    $queue_stmt->execute([$submission_id, 'admin_notification', $admin_email, 1]);
    
    // Log successful submission
    error_log("Form submission successful: ID $submission_id, Email: $email, Source: $source");
    
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully',
        'submission_id' => $submission_id
    ]);
    
} catch (PDOException $e) {
    error_log("Database error in form submission: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error occurred. Please try again later.'
    ]);
    
} catch (Exception $e) {
    error_log("Form submission error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?> 