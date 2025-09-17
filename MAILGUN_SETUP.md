# Mailgun SMTP Setup for Contact Form

This guide will help you set up Mailgun SMTP for the contact form functionality.

## Prerequisites

1. A Mailgun account (sign up at https://www.mailgun.com/)
2. A verified domain in Mailgun

## Setup Steps

### 1. Get Mailgun SMTP Credentials

1. Log in to your Mailgun dashboard
2. Go to "Sending" → "Domains"
3. Select your domain
4. Go to "SMTP" tab
5. Copy your SMTP credentials:
   - **SMTP Username**: Usually `postmaster@your-domain.mailgun.org`
   - **SMTP Password**: Your Mailgun SMTP password

### 2. Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# Mailgun SMTP Configuration
MAILGUN_SMTP_USERNAME=postmaster@your-domain.mailgun.org
MAILGUN_SMTP_PASSWORD=your-mailgun-smtp-password

# Contact form recipient email
CONTACT_EMAIL=info@devx.gr
```

### 3. Domain Verification

Make sure your domain is verified in Mailgun:

1. In Mailgun dashboard, go to "Sending" → "Domains"
2. Add your domain if not already added
3. Follow the DNS verification steps
4. Wait for verification to complete (can take up to 24 hours)

### 4. Test the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page
3. Fill out and submit the contact form
4. Check your email for the message

## Troubleshooting

### Common Issues

1. **"Authentication failed" error**
   - Double-check your SMTP credentials
   - Ensure your domain is verified in Mailgun

2. **"Connection timeout" error**
   - Check your internet connection
   - Verify Mailgun SMTP settings (host: smtp.mailgun.org, port: 587)

3. **"Domain not verified" error**
   - Complete domain verification in Mailgun dashboard
   - Wait for DNS propagation (up to 24 hours)

### Testing SMTP Connection

You can test your SMTP connection using a simple Node.js script:

```javascript
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransporter({
  host: 'smtp.mailgun.org',
  port: 587,
  secure: false,
  auth: {
    user: 'your-smtp-username',
    pass: 'your-smtp-password'
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});
```

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables in production
- Consider using Mailgun's API instead of SMTP for better error handling
- Implement rate limiting for the contact form

## Production Deployment

For production deployment:

1. Set environment variables in your hosting platform
2. Ensure your domain is properly configured in Mailgun
3. Test the contact form thoroughly
4. Monitor Mailgun logs for any issues

## Support

If you encounter issues:

1. Check Mailgun dashboard for delivery logs
2. Review server logs for error messages
3. Test with a simple email client first
4. Contact Mailgun support if needed
