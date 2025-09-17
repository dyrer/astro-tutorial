# Netlify Deployment Guide

This guide will help you deploy your Astro blog with Mailgun contact form to Netlify.

## Prerequisites

1. A Netlify account (sign up at https://www.netlify.com/)
2. A Mailgun account with verified domain
3. Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Prepare Your Repository

Make sure your code is pushed to your Git repository with all the files:
- `netlify.toml` - Netlify configuration
- `netlify/functions/contact.js` - Contact form function
- `netlify/functions/package.json` - Function dependencies
- All your Astro source files

### 2. Deploy to Netlify

#### Option A: Deploy from Git (Recommended)

1. Log in to your Netlify dashboard
2. Click "New site from Git"
3. Connect your Git provider and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (or latest)
5. Click "Deploy site"

#### Option B: Deploy from Local Build

1. Run `npm run build` locally
2. Drag and drop the `dist` folder to Netlify dashboard
3. Your site will be deployed instantly

### 3. Configure Environment Variables

In your Netlify dashboard:

1. Go to **Site settings** → **Environment variables**
2. Add the following variables:

```
MAILGUN_SMTP_USERNAME=postmaster@your-domain.mailgun.org
MAILGUN_SMTP_PASSWORD=your-mailgun-smtp-password
CONTACT_EMAIL=info@devx.gr
```

### 4. Install Netlify CLI (Optional)

For local testing of Netlify functions:

```bash
npm install -g netlify-cli
netlify dev
```

This will run your site locally with Netlify functions support.

## Testing the Contact Form

1. Visit your deployed site
2. Navigate to `/contact`
3. Fill out and submit the contact form
4. Check your email for the message

## Troubleshooting

### Common Issues

1. **Function not found (404)**
   - Ensure `netlify.toml` is in the root directory
   - Check that `netlify/functions/contact.js` exists
   - Verify the function name matches the file name

2. **Email not sending**
   - Check environment variables are set correctly
   - Verify Mailgun credentials
   - Check Netlify function logs in the dashboard

3. **CORS errors**
   - The function includes CORS headers
   - Make sure you're using the correct function URL

### Checking Function Logs

1. Go to Netlify dashboard
2. Navigate to **Functions** tab
3. Click on your function to view logs
4. Check for any error messages

## Custom Domain (Optional)

1. In Netlify dashboard, go to **Domain settings**
2. Add your custom domain
3. Configure DNS records as instructed
4. Enable HTTPS (automatic with Netlify)

## Performance Optimization

1. **Enable Netlify Edge Functions** (if needed)
2. **Configure caching** in `netlify.toml`:
   ```toml
   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
   ```

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to Git
2. **Rate Limiting**: Consider adding rate limiting to prevent spam
3. **Input Validation**: The function validates all inputs
4. **CORS**: Properly configured for security

## Monitoring

1. **Netlify Analytics**: Monitor site performance
2. **Function Logs**: Check for errors and performance
3. **Mailgun Dashboard**: Monitor email delivery

## Support

If you encounter issues:

1. Check Netlify function logs
2. Verify Mailgun configuration
3. Test locally with `netlify dev`
4. Contact Netlify support if needed

## Next Steps

After successful deployment:

1. Set up custom domain
2. Configure analytics
3. Set up monitoring alerts
4. Consider adding more Netlify functions as needed

Your Astro blog with Mailgun contact form is now live on Netlify! 🚀
