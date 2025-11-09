# Deployment Guide

## GitHub Repository Setup

✅ **COMPLETED** - Repository created and pushed to GitHub:
- Repository: https://github.com/AbdullahZeer/outorbit-games-website
- Branch: `main`
- Status: All code pushed successfully

## Netlify Deployment

1. **Connect Repository to Netlify:**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select the `outorbit-games-website` repository
   - Netlify will auto-detect the build settings from `netlify.toml`

2. **Configure Build Settings (should auto-detect):**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variable: `OUTORBIT_ENV=production`

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will build and deploy automatically

## Domain Configuration

1. **Add Custom Domain in Netlify:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter `outorbit.games`
   - Follow Netlify's instructions

2. **Configure DNS:**
   
   **Option A: Use Netlify Nameservers (Recommended)**
   - Netlify will provide nameservers (e.g., `dns1.p01.nsone.net`)
   - Go to your domain registrar (where you bought outorbit.games)
   - Update nameservers to Netlify's nameservers
   - Wait for DNS propagation (can take up to 48 hours, usually faster)

   **Option B: Use CNAME Record**
   - Add a CNAME record in your DNS settings:
     - Name: `@` or `outorbit.games`
     - Value: Your Netlify site URL (e.g., `outorbit-games-website.netlify.app`)
   - Note: Some registrars don't support CNAME on root domain, use Option A instead

3. **SSL Certificate:**
   - Netlify automatically provisions SSL certificates via Let's Encrypt
   - This happens automatically after DNS is configured correctly
   - Wait a few minutes after DNS propagation

4. **Verify:**
   - Visit `https://outorbit.games` to confirm everything works
   - Check that SSL certificate is active (padlock icon in browser)

## Post-Deployment Checklist

- [x] GitHub repository created and code pushed ✅
- [ ] Netlify site deployed successfully
- [ ] Custom domain `outorbit.games` added in Netlify
- [ ] DNS records configured (nameservers or CNAME)
- [ ] SSL certificate active
- [ ] Site accessible at https://outorbit.games
- [ ] Starfield animation working correctly
- [ ] All links and contact email working
- [ ] Mobile responsive design verified

## Troubleshooting

**Build fails on Netlify:**
- Check build logs in Netlify dashboard
- Ensure Node.js version matches (set in netlify.toml)
- Verify all dependencies are in package.json

**Domain not resolving:**
- Check DNS propagation: https://www.whatsmydns.net/
- Verify nameservers/CNAME records are correct
- Wait up to 48 hours for full propagation

**SSL certificate issues:**
- Ensure DNS is correctly configured first
- Check Netlify SSL/TLS settings
- Contact Netlify support if issues persist

