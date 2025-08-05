# Deployment Guide - ShineTTW Event Landing Page

## 🚀 Quick Deployment to Vercel

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: ShineTTW event landing page"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

### Step 3: Configure Environment Variables

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `MAILCHIMP_API_KEY` | `your_api_key_here` | Production, Preview, Development |
   | `MAILCHIMP_LIST_ID` | `your_list_id_here` | Production, Preview, Development |
   | `MAILCHIMP_DC` | `us21` (or your DC) | Production, Preview, Development |

4. Click "Save" for each variable

### Step 4: Get Mailchimp Credentials

#### API Key
1. Log in to [Mailchimp](https://mailchimp.com)
2. Go to **Account** → **Extras** → **API Keys**
3. Click **Create A Key**
4. Copy the generated API key

#### List ID (Audience ID)
1. Go to **Audience** → **Settings** → **Audience name and defaults**
2. Copy the **Audience ID** (looks like: `a1b2c3d4e5`)

#### Data Center
1. Check your Mailchimp URL: `https://us21.admin.mailchimp.com`
2. The data center is `us21` (or whatever appears in your URL)

### Step 5: Test Your Deployment

1. Visit your Vercel URL (e.g., `https://your-project.vercel.app`)
2. Fill out the RSVP form with a test email
3. Check your Mailchimp audience for the new subscriber
4. Verify the confirmation message appears

### Step 6: Custom Domain Setup (When Ready)

When your `shinetw.com` domain is renewed:

1. Go to Vercel project dashboard → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `shinetw.com`
4. Follow Vercel's DNS configuration instructions:
   - Add an A record pointing to Vercel's IP
   - Add a CNAME record for `www` subdomain
5. Update the metadata in `app/layout.tsx`:
   ```typescript
   openGraph: {
     url: 'https://shinetw.com', // Update this
     // ... other settings
   }
   ```

## 🔧 Troubleshooting

### Common Issues

**Form not working:**
- ✅ Check environment variables are set correctly
- ✅ Verify Mailchimp API key has proper permissions
- ✅ Check Vercel function logs for errors

**Domain not working:**
- ✅ Wait for DNS propagation (up to 48 hours)
- ✅ Verify DNS records are correct
- ✅ Check domain status in Vercel dashboard

**Styling issues:**
- ✅ Clear browser cache
- ✅ Check if TailwindCSS is building correctly
- ✅ Verify Google Fonts are loading

### Debug Mode

To debug issues in production:

1. Go to Vercel dashboard → **Functions** tab
2. Check the server action logs
3. Add temporary console logs to `app/actions.ts`:
   ```typescript
   console.log('Environment check:', {
     hasApiKey: !!process.env.MAILCHIMP_API_KEY,
     hasListId: !!process.env.MAILCHIMP_LIST_ID,
     hasDc: !!process.env.MAILCHIMP_DC
   })
   ```

## 📱 Mobile Testing

Test your deployment on mobile devices:

1. **iOS Safari**: Test form submission and responsive design
2. **Android Chrome**: Verify touch interactions
3. **Tablet**: Check layout on larger screens
4. **Slow Network**: Test with throttled connection

## 🔒 Security Checklist

- ✅ Environment variables are set (not in code)
- ✅ Input validation is working
- ✅ Error messages don't expose sensitive data
- ✅ HTTPS is enabled (automatic with Vercel)
- ✅ No API keys in client-side code

## 📊 Analytics Setup (Optional)

Consider adding analytics to track form submissions:

1. **Google Analytics**: Add GA4 tracking code
2. **Vercel Analytics**: Enable in project settings
3. **Mailchimp Reports**: Check subscription analytics

## 🎯 Performance Optimization

Your site is already optimized with:
- ✅ Next.js App Router for fast loading
- ✅ TailwindCSS for minimal CSS
- ✅ Google Fonts with display=swap
- ✅ Responsive images and lazy loading
- ✅ Server-side rendering for SEO

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review Mailchimp API documentation
3. Test locally with `npm run dev`
4. Check browser console for errors

---

**Your ShineTTW event landing page is now live! 🎉** 