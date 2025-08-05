# ShineTTW Live Event Landing Page

A modern, mobile-friendly event landing page built with Next.js, TailwindCSS, and Mailchimp integration for collecting RSVPs.

## Features

- ✅ **Responsive Design**: Mobile-first approach with TailwindCSS
- ✅ **Mailchimp Integration**: Automatic email list subscription
- ✅ **Form Validation**: Client and server-side validation
- ✅ **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- ✅ **Modern UI**: Clean, professional design with Google Fonts
- ✅ **Error Handling**: Comprehensive error states and user feedback

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Email Service**: Mailchimp API
- **Fonts**: Google Fonts (Inter & Sora)
- **Language**: TypeScript

## Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd shinetw-event-landing

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy the example environment file
cp env.example .env.local

# Edit .env.local with your Mailchimp credentials
nano .env.local
```

### 3. Get Mailchimp Credentials

1. **API Key**: Go to Mailchimp → Account → Extras → API Keys → Create a key
2. **List ID**: Go to Audience → Settings → Audience name and defaults → Copy the Audience ID
3. **Data Center**: Check your API key URL (e.g., `us21` from `https://us21.admin.mailchimp.com`)

### 4. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your landing page.

## Deployment to Vercel

### 1. Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### 2. Set Environment Variables on Vercel

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following variables:
   - `MAILCHIMP_API_KEY`
   - `MAILCHIMP_LIST_ID`
   - `MAILCHIMP_DC`

### 3. Custom Domain Setup

When your `shinetw.com` domain is renewed:

1. Go to Vercel project dashboard → Settings → Domains
2. Add your custom domain: `shinetw.com`
3. Update your DNS records as instructed by Vercel
4. Update the `url` in `app/layout.tsx` metadata

## Project Structure

```
├── app/
│   ├── actions.ts          # Server actions for Mailchimp API
│   ├── components/
│   │   └── RSVPForm.tsx    # RSVP form component
│   ├── globals.css         # Global styles and TailwindCSS
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page
├── public/                 # Static assets
├── tailwind.config.js      # TailwindCSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the primary color scheme:

```javascript
colors: {
  primary: {
    50: '#fef7ee',
    // ... other shades
    900: '#762e14',
  },
}
```

### Content
Update the event details in `app/page.tsx`:
- Event title and date
- Venue information
- Description text
- Contact information

### Styling
Modify `app/globals.css` for custom styles and component classes.

## Security Features

- ✅ Input validation (client and server-side)
- ✅ Email format validation
- ✅ Environment variable protection
- ✅ Error handling without exposing sensitive data
- ✅ CSRF protection (built into Next.js)

## Testing

### Local Testing
1. Start the development server: `npm run dev`
2. Fill out the RSVP form with test data
3. Check your Mailchimp audience for new subscribers
4. Test error scenarios (invalid email, duplicate email)

### Production Testing
1. Deploy to Vercel
2. Test the live form submission
3. Verify emails are added to your Mailchimp list
4. Check error handling with invalid inputs

## Troubleshooting

### Common Issues

**Form not submitting:**
- Check environment variables are set correctly
- Verify Mailchimp API key has proper permissions
- Check browser console for errors

**Emails not appearing in Mailchimp:**
- Verify list ID is correct
- Check if email is already subscribed
- Review server logs for API errors

**Styling issues:**
- Ensure TailwindCSS is properly configured
- Check if custom CSS classes are defined
- Verify Google Fonts are loading

### Debug Mode

Add console logs to `app/actions.ts` for debugging:

```typescript
console.log('API Key exists:', !!process.env.MAILCHIMP_API_KEY)
console.log('List ID:', process.env.MAILCHIMP_LIST_ID)
```

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Mailchimp API documentation
3. Check Next.js and TailwindCSS documentation

## License

This project is private and proprietary to ShineTTW.

---

**Built with ❤️ for ShineTTW Live Event** 