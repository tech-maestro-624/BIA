# BIA Website Backend Setup Instructions

## Overview
This setup includes:
- ✅ Form submission handling with PHP
- ✅ MySQL database with proper schema
- ✅ Email queue system with retry logic
- ✅ Spam protection and rate limiting
- ✅ Professional email templates
- ✅ Automated brochure download after form submission

## 1. Database Setup

### Create Database and Tables
```bash
# Login to MySQL
mysql -u root -p

# Create database and user
CREATE DATABASE bia_website CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'bia_user'@'localhost' IDENTIFIED BY 'secure_password_here';
GRANT ALL PRIVILEGES ON bia_website.* TO 'bia_user'@'localhost';
FLUSH PRIVILEGES;

# Import schema
mysql -u bia_user -p bia_website < database/schema.sql
```

### Verify Tables Created
```sql
USE bia_website;
SHOW TABLES;
-- Should show: form_submissions, email_queue, admin_users, email_templates
```

## 2. Configuration

### Update Database Credentials
Edit these files with your actual database credentials:
- `config/config.php`
- `public/api/submit-form.php`
- `scripts/process-email-queue.php`

```php
'database' => [
    'host' => 'localhost',
    'dbname' => 'bia_website',
    'username' => 'bia_user',        // Your DB username
    'password' => 'your_password',    // Your DB password
    'charset' => 'utf8mb4'
],
```

### Update SMTP Settings
Configure your email provider in `config/config.php`:

#### For Gmail:
```php
'smtp' => [
    'host' => 'smtp.gmail.com',
    'port' => 587,
    'username' => 'your-email@gmail.com',
    'password' => 'your-app-password',    // Generate app password in Gmail
    'encryption' => 'tls',
    'from_email' => 'noreply@yourdomain.com',
    'from_name' => 'Boston Institute of Analytics'
],
```

#### For Other SMTP Providers:
```php
'smtp' => [
    'host' => 'smtp.yourdomain.com',
    'port' => 587,
    'username' => 'your-smtp-username',
    'password' => 'your-smtp-password',
    'encryption' => 'tls',
    'from_email' => 'noreply@yourdomain.com',
    'from_name' => 'Boston Institute of Analytics'
],
```

### Update Admin Email
```php
'admin' => [
    'email' => 'admin@yourdomain.com',           // Where admin notifications go
    'phone' => '748 387 1825',
    'support_email' => 'connect@yourdomain.com'  // Customer support email
],
```

## 3. File Permissions

### Set Proper Permissions
```bash
# Make scripts executable
chmod +x scripts/process-email-queue.php

# Set web server permissions
chown -R www-data:www-data public/
chmod -R 755 public/

# Create log directory
mkdir -p /var/log/bia-website/
chown www-data:www-data /var/log/bia-website/
```

## 4. Cron Job Setup

### Add Cron Job for Email Processing
```bash
# Edit crontab
crontab -e

# Add this line (runs every 5 minutes)
*/5 * * * * /usr/bin/php /path/to/your/scripts/process-email-queue.php >> /var/log/bia-email-queue.log 2>&1

# For more frequent processing (every minute), use:
# * * * * * /usr/bin/php /path/to/your/scripts/process-email-queue.php >> /var/log/bia-email-queue.log 2>&1
```

### Test Email Processing
```bash
# Run manually to test
php scripts/process-email-queue.php

# Check logs
tail -f /var/log/bia-email-queue.log
```

## 5. Web Server Configuration

### Apache (.htaccess)
Create `public/.htaccess`:
```apache
RewriteEngine On

# API routes
RewriteRule ^api/(.*)$ api/$1 [L]

# Prevent access to config and scripts
RewriteRule ^(config|scripts|database)/ - [F,L]

# CORS headers
Header always set Access-Control-Allow-Origin "*"
Header always set Access-Control-Allow-Methods "POST, GET, OPTIONS"
Header always set Access-Control-Allow-Headers "Content-Type"
```

### Nginx
Add to your Nginx config:
```nginx
location /api/ {
    try_files $uri $uri/ =404;
}

location ~ ^/(config|scripts|database)/ {
    deny all;
    return 403;
}

# CORS headers
add_header Access-Control-Allow-Origin "*" always;
add_header Access-Control-Allow-Methods "POST, GET, OPTIONS" always;
add_header Access-Control-Allow-Headers "Content-Type" always;
```

## 6. Testing

### Test Form Submission
```bash
# Test API endpoint
curl -X POST http://yourdomain.com/api/submit-form.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "city": "mumbai",
    "country": "india",
    "source": "test"
  }'
```

### Expected Response
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "submission_id": 1
}
```

### Check Database
```sql
SELECT * FROM form_submissions ORDER BY created_at DESC LIMIT 5;
SELECT * FROM email_queue WHERE status = 'pending';
```

## 7. Email Templates

### Customize Email Templates
Edit templates in the database:
```sql
UPDATE email_templates 
SET subject = 'Your Custom Subject',
    body_html = 'Your custom HTML content with {{NAME}} placeholders'
WHERE template_type = 'user_confirmation';
```

### Available Placeholders
- `{{NAME}}` - User's name
- `{{EMAIL}}` - User's email
- `{{PHONE}}` - User's phone
- `{{CITY}}` - User's city
- `{{COUNTRY}}` - User's country
- `{{SOURCE}}` - Form source (modal, contact, header)
- `{{TIMESTAMP}}` - Submission timestamp

## 8. Monitoring & Maintenance

### Check Email Queue Status
```sql
-- Pending emails
SELECT COUNT(*) as pending_emails FROM email_queue WHERE status = 'pending';

-- Failed emails
SELECT * FROM email_queue WHERE status = 'failed' ORDER BY created_at DESC;

-- Recent submissions
SELECT name, email, city, source, created_at 
FROM form_submissions 
ORDER BY created_at DESC 
LIMIT 10;
```

### Log Files to Monitor
- `/var/log/bia-email-queue.log` - Email processing logs
- `/var/log/apache2/error.log` - Web server errors
- `/var/log/mysql/error.log` - MySQL errors

### Clean Up Old Data (Optional)
```sql
-- Clean up old successful queue entries (older than 30 days)
DELETE FROM email_queue 
WHERE status = 'sent' 
AND sent_at < DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Archive old submissions (optional)
CREATE TABLE form_submissions_archive AS 
SELECT * FROM form_submissions 
WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 YEAR);
```

## 9. Security Considerations

### Prevent Spam
- Rate limiting is built into the form handler
- Email validation and sanitization included
- IP address logging for abuse detection

### Database Security
- Use prepared statements (already implemented)
- Regular backups recommended
- Limit database user permissions

### SMTP Security
- Use app passwords instead of account passwords
- Consider using dedicated email service (SendGrid, Mailgun)
- Monitor for bounced emails

## 10. Production Deployment

### Before Going Live
1. ✅ Update all placeholder credentials
2. ✅ Test form submission end-to-end
3. ✅ Verify emails are being sent
4. ✅ Check cron job is running
5. ✅ Set up database backups
6. ✅ Configure log rotation
7. ✅ Test error handling

### Performance Optimization
- Enable MySQL query caching
- Use PHP OpCache for better performance
- Consider Redis for session storage
- Monitor server resources

## Support
For issues or questions, check:
1. Error logs first
2. Database connection
3. SMTP configuration
4. File permissions
5. Cron job execution

The system is designed to be robust with automatic retries and proper error handling. 