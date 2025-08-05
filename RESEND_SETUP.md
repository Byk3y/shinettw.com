# Resend Setup Guide - ShineTTW Event

This guide will help you set up Resend for managing contacts and sending emails for your ShineTTW event.

## 🚀 Quick Setup

### 1. Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up with your email address
3. Verify your email address

### 2. Get API Key
1. Navigate to **API Keys** in the left sidebar
2. Click **"Create API Key"**
3. Give it a name like "ShineTTW Event"
4. Copy the generated API key

### 3. Set Environment Variables

**Local Development:**
```bash
# Create .env.local file
cp env.example .env.local

# Add your API key
echo "RESEND_API_KEY=re_your_api_key_here" >> .env.local
```

**Production (Vercel):**
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add: `RESEND_API_KEY` = `re_your_api_key_here`

## 📧 Email Features

### Welcome Emails
- ✅ **Automatic**: Sent when someone RSVPs
- ✅ **Custom HTML**: Beautiful, branded design
- ✅ **Event Details**: Date, time, venue, expectations
- ✅ **Mobile Responsive**: Looks great on all devices

### Contact Management
- ✅ **Audiences**: All RSVPs automatically added
- ✅ **Contact Details**: Name, email, phone number
- ✅ **Export**: Download contact list anytime
- ✅ **Segmentation**: Filter by various criteria

### Broadcasts
- ✅ **Mass Emails**: Send to your entire audience
- ✅ **Templates**: Use pre-designed templates
- ✅ **Analytics**: Track open rates and clicks
- ✅ **Scheduling**: Send at optimal times

## 🔧 Configuration

### Current Setup
- **From Email**: `onboarding@resend.dev` (for testing)
- **Subject**: "🎵 You're confirmed for ShineTTW Live Event!"
- **Template**: Custom HTML with event branding

### Domain Verification (Optional)
For production use with your own domain:

1. **Add Domain**:
   - Go to **Domains** in Resend dashboard
   - Click **"Add Domain"**
   - Enter: `shinettw.com`

2. **DNS Configuration**:
   - Add the provided DNS records to your domain
   - Wait for verification (usually 5-10 minutes)

3. **Update From Email**:
   - Change from `onboarding@resend.dev` to `noreply@shinettw.com`
   - Update in `app/email-service.ts`

## 📊 Dashboard Features

### Audiences Section
- **View Contacts**: See all RSVPs
- **Contact Details**: Name, email, phone, signup date
- **Export Data**: Download as CSV
- **Search & Filter**: Find specific contacts

### Broadcasts Section
- **Create Campaigns**: Design email campaigns
- **Templates**: Use pre-built templates
- **Analytics**: Track performance
- **Scheduling**: Set send times

### Logs Section
- **Email Status**: Track delivery status
- **Bounces**: Monitor failed deliveries
- **Spam Reports**: Handle complaints
- **API Usage**: Monitor API calls

## 🧪 Testing

### Local Testing
1. Start development server: `npm run dev`
2. Fill out RSVP form with your email
3. Check your email for welcome message
4. Verify contact appears in Resend Audiences

### Production Testing
1. Deploy to Vercel
2. Test form submission on live site
3. Check email delivery
4. Verify contact management

## 🔒 Security & Limits

### Free Tier Limits
- **3,000 emails/month** (generous for events)
- **100 emails/day** (good for testing)
- **Unlimited contacts** (no audience size limit)

### Security Features
- ✅ **API Key Protection**: Environment variables
- ✅ **Rate Limiting**: Built-in protection
- ✅ **Spam Protection**: Automatic filtering
- ✅ **Bounce Handling**: Automatic management

## 🆘 Troubleshooting

### Common Issues

**Emails not sending:**
- Check API key is correct
- Verify environment variables are set
- Check Resend dashboard for errors

**Contacts not appearing:**
- Check form submission is working
- Verify email service is called
- Check Resend Audiences section

**Domain verification issues:**
- Ensure DNS records are correct
- Wait for propagation (up to 24 hours)
- Contact Resend support if needed

### Support
- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **API Reference**: [resend.com/docs/api-reference](https://resend.com/docs/api-reference)
- **Support**: Available in Resend dashboard

## 🎯 Next Steps

1. **Test the system** with your email
2. **Monitor the dashboard** for contacts
3. **Create your first broadcast** when ready
4. **Verify your domain** for production use
5. **Set up analytics** to track engagement

---

**🎵 Ready to rock your ShineTTW event! 🎵** 