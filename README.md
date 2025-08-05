# ShineTTW Live Event Landing Page

A modern, mobile-friendly event landing page built with Next.js, TailwindCSS, and Resend integration for collecting RSVPs and managing contacts.

## Features

- ✅ **Responsive Design**: Mobile-first approach with TailwindCSS
- ✅ **Resend Integration**: Contact management and email sending
- ✅ **Form Validation**: Client and server-side validation with Nigerian phone validation
- ✅ **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- ✅ **Modern UI**: Clean, professional design with Google Fonts
- ✅ **Error Handling**: Comprehensive error states and user feedback
- ✅ **Video Background**: Immersive full-screen video experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS
- **Email Service**: Resend API
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

# Edit .env.local with your Resend API key
nano .env.local
```

### 3. Get Resend API Key

1. Go to [Resend](https://resend.com) and create an account
2. Navigate to API Keys section
3. Create a new API key
4. Copy the key to your `.env.local` file

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
3. Add the following variable:
   - `RESEND_API_KEY`

### 3. Custom Domain Setup

When your `shinetw.com` domain is renewed:

1. Go to Vercel project dashboard → Settings → Domains
2. Add your custom domain: `shinetw.com`
3. Update your DNS records as instructed by Vercel
4. Update the `url` in `app/layout.tsx` metadata

## Project Structure

```
├── app/
│   ├── actions.ts          # Server actions for Resend API
│   ├── email-service.ts    # Email service using Resend
│   ├── components/
│   │   └── RSVPForm.tsx    # RSVP form component
│   ├── globals.css         # Global styles and TailwindCSS
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main landing page
``` 