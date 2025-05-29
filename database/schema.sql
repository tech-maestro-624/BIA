-- BIA Website Database Schema
-- Create database
CREATE DATABASE IF NOT EXISTS bia_website CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE bia_website;

-- Form submissions table
CREATE TABLE form_submissions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    source VARCHAR(50) DEFAULT 'unknown', -- track where form was submitted from (modal, contact, header)
    ip_address VARCHAR(45), -- supports both IPv4 and IPv6
    user_agent TEXT,
    status ENUM('new', 'contacted', 'converted', 'not_interested') DEFAULT 'new',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_status (status),
    INDEX idx_source (source)
);

-- Email queue table
CREATE TABLE email_queue (
    id INT PRIMARY KEY AUTO_INCREMENT,
    submission_id INT,
    email_type ENUM('user_confirmation', 'admin_notification', 'follow_up') NOT NULL,
    recipient_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    body TEXT,
    priority TINYINT DEFAULT 2, -- 1=high, 2=normal, 3=low
    status ENUM('pending', 'sent', 'failed', 'cancelled') DEFAULT 'pending',
    attempts INT DEFAULT 0,
    max_attempts INT DEFAULT 3,
    scheduled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sent_at TIMESTAMP NULL,
    error_message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (submission_id) REFERENCES form_submissions(id) ON DELETE CASCADE,
    INDEX idx_status (status),
    INDEX idx_priority (priority),
    INDEX idx_scheduled_at (scheduled_at),
    INDEX idx_email_type (email_type)
);

-- Admin users table (optional, for future use)
CREATE TABLE admin_users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'manager', 'viewer') DEFAULT 'viewer',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Email templates table
CREATE TABLE email_templates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    template_type ENUM('user_confirmation', 'admin_notification', 'follow_up') NOT NULL,
    subject VARCHAR(255) NOT NULL,
    body_html TEXT NOT NULL,
    body_text TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    UNIQUE KEY unique_template_type (template_type)
);

-- Insert default email templates
INSERT INTO email_templates (template_type, subject, body_html, body_text) VALUES 
(
    'user_confirmation',
    'Thank you for your interest in BIA Data Science Program',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Thank You - BIA</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #000069; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                <h1 style="margin: 0;">Boston Institute of Analytics</h1>
                <p style="margin: 5px 0 0 0;">Data Science & AI Excellence</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
                <h2 style="color: #000069;">Thank You, {{NAME}}!</h2>
                
                <p>Thank you for your interest in our <strong>Data Science and Artificial Intelligence</strong> program.</p>
                
                <p>We have received your inquiry and our expert team will contact you within 24 hours to discuss:</p>
                
                <ul style="background-color: white; padding: 20px; border-left: 4px solid #000069;">
                    <li>Detailed curriculum and learning path</li>
                    <li>Career opportunities and placement support</li>
                    <li>Flexible learning options</li>
                    <li>Certification details</li>
                    <li>Enrollment process and next steps</li>
                </ul>
                
                <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <p style="margin: 0;"><strong>Your downloaded brochure contains:</strong></p>
                    <p style="margin: 5px 0 0 0;">Complete program details, curriculum, and success stories from our graduates.</p>
                </div>
                
                <p style="margin-top: 30px;">Best regards,<br>
                <strong>BIA Admissions Team</strong><br>
                Phone: 748 387 1825<br>
                Email: connect@bostoninstituteofanalytics.org</p>
            </div>
        </div>
    </body>
    </html>',
    'Thank You for Your Interest in BIA Data Science Program

Dear {{NAME}},

Thank you for your interest in our Data Science and Artificial Intelligence program.

We have received your inquiry and our expert team will contact you within 24 hours to discuss:
- Detailed curriculum and learning path
- Career opportunities and placement support  
- Flexible learning options
- Certification details
- Enrollment process and next steps

Your downloaded brochure contains complete program details, curriculum, and success stories from our graduates.

Best regards,
BIA Admissions Team
Phone: 748 387 1825
Email: connect@bostoninstituteofanalytics.org'
),
(
    'admin_notification',
    'New Form Submission - BIA Website',
    '<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>New Lead - BIA</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #000069;">New Form Submission</h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px; font-weight: bold; width: 120px;">Name:</td>
                        <td style="padding: 8px;">{{NAME}}</td>
                    </tr>
                    <tr style="background-color: white;">
                        <td style="padding: 8px; font-weight: bold;">Email:</td>
                        <td style="padding: 8px;">{{EMAIL}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold;">Phone:</td>
                        <td style="padding: 8px;">{{PHONE}}</td>
                    </tr>
                    <tr style="background-color: white;">
                        <td style="padding: 8px; font-weight: bold;">City:</td>
                        <td style="padding: 8px;">{{CITY}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold;">Country:</td>
                        <td style="padding: 8px;">{{COUNTRY}}</td>
                    </tr>
                    <tr style="background-color: white;">
                        <td style="padding: 8px; font-weight: bold;">Source:</td>
                        <td style="padding: 8px;">{{SOURCE}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; font-weight: bold;">Submitted:</td>
                        <td style="padding: 8px;">{{TIMESTAMP}}</td>
                    </tr>
                </table>
            </div>
            
            <p style="margin-top: 20px;">
                <strong>Action Required:</strong> Please contact this lead within 24 hours for best conversion rates.
            </p>
        </div>
    </body>
    </html>',
    'New Form Submission - BIA Website

Name: {{NAME}}
Email: {{EMAIL}}
Phone: {{PHONE}}
City: {{CITY}}
Country: {{COUNTRY}}
Source: {{SOURCE}}
Submitted: {{TIMESTAMP}}

Action Required: Please contact this lead within 24 hours for best conversion rates.'
);

-- Create indexes for better performance
CREATE INDEX idx_submissions_email_date ON form_submissions(email, created_at);
CREATE INDEX idx_queue_status_priority ON email_queue(status, priority, scheduled_at); 