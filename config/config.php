<?php
/**
 * BIA Website Configuration
 * Update these settings according to your environment
 */

return [
    // Database Configuration
    'database' => [
        'host' => 'localhost',
        'dbname' => 'bia_website',
        'username' => 'your_db_username', // Update with your DB username
        'password' => 'your_db_password', // Update with your DB password
        'charset' => 'utf8mb4'
    ],
    
    // SMTP Configuration for sending emails
    'smtp' => [
        'host' => 'smtp.gmail.com', // or your SMTP server
        'port' => 587,
        'username' => 'your-email@gmail.com', // Your SMTP username
        'password' => 'your-app-password', // Your SMTP password (use app password for Gmail)
        'encryption' => 'tls', // tls or ssl
        'from_email' => 'noreply@bostoninstituteofanalytics.org',
        'from_name' => 'Boston Institute of Analytics'
    ],
    
    // Admin Configuration
    'admin' => [
        'email' => 'admin@bostoninstituteofanalytics.org', // Admin notification email
        'phone' => '748 387 1825',
        'support_email' => 'connect@bostoninstituteofanalytics.org'
    ],
    
    // Email Queue Settings
    'email_queue' => [
        'max_attempts' => 3,
        'retry_delays' => [5, 15, 60], // minutes between retries
        'batch_size' => 50, // emails to process per batch
        'delay_between_emails' => 500000 // microseconds (0.5 seconds)
    ],
    
    // Security Settings
    'security' => [
        'rate_limit_window' => 24, // hours
        'max_submissions_per_email' => 1, // per rate limit window
        'allowed_origins' => ['*'], // for CORS, use specific domains in production
        'honeypot_fields' => ['website', 'url', 'company'] // spam protection
    ],
    
    // File Upload Settings
    'uploads' => [
        'brochure_path' => '/BIA-Data-Science-Brochure.pdf',
        'max_file_size' => 5242880, // 5MB in bytes
        'allowed_types' => ['pdf', 'doc', 'docx']
    ],
    
    // Application Settings
    'app' => [
        'name' => 'Boston Institute of Analytics',
        'timezone' => 'Asia/Kolkata',
        'debug' => false, // Set to false in production
        'log_file' => '/var/log/bia-website.log'
    ]
];
?> 