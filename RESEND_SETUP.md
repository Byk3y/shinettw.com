# Resend Email Setup Guide

## 🚀 **Why Resend?**

Since Mailchimp automations require a paid plan, we're using **Resend** to send beautiful custom welcome emails. Resend offers:

- ✅ **Free tier**: 3,000 emails/month
- ✅ **Beautiful HTML emails**
- ✅ **Fast delivery**
- ✅ **Great deliverability**
- ✅ **Easy setup**

## 📋 **Step 1: Create Resend Account**

1. Go to [resend.com](https://resend.com)
2. Click **"Sign up"**
3. Create your account (you can use GitHub or email)
4. Verify your email address

## 🔑 **Step 2: Get Your API Key**

1. **Log into Resend**
2. Go to **API Keys** in the left sidebar
3. Click **"Create API Key"**
4. Give it a name like "ShineTTW Event Emails"
5. **Copy the API key** (it starts with `re_`)

## 📧 **Step 3: Add to Environment Variables**

1. **Update your `.env.local` file**:
   ```env
   # Add this line to your existing .env.local
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

2. **Replace** `re_your_actual_api_key_here` with your actual Resend API key

## 🎨 **Step 4: Customize Your Email**

The welcome email is already beautifully designed with:

- ✅ **Professional layout**
- ✅ **Event details**
- ✅ **Mobile-responsive design**
- ✅ **Your branding colors**
- ✅ **Personalized with their name**

### **Email Features:**
- **Subject**: "🎵 You're confirmed for ShineTTW Live Event!"
- **Content**: Event details, venue, time, what to expect
- **Design**: Clean, modern, mobile-friendly
- **Personalization**: Uses their name and phone number

## 🧪 **Step 5: Test Your Setup**

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Test the form**:
   - Go to `http://localhost:3000`
   - Fill out the RSVP form
   - Submit and check your email

3. **Check both services**:
   - **Mailchimp**: Contact should appear in your audience
   - **Resend**: Beautiful welcome email should be received

## 📊 **Step 6: Monitor Your Emails**

1. **Resend Dashboard**:
   - Go to [resend.com](https://resend.com)
   - Check **Activity** tab for email status
   - Monitor delivery rates and bounces

2. **Mailchimp Dashboard**:
   - Check your audience for new subscribers
   - Verify phone numbers are stored

## 🔧 **Customization Options**

### **Change Email Content**:
Edit `app/email-service.ts` to modify:
- Email subject line
- Event details
- Styling and colors
- Additional information

### **Add Your Logo**:
1. Upload your logo to a CDN
2. Add `<img src="your-logo-url" alt="ShineTTW">` to the email HTML

### **Change Sender Email**:
Update the `from` field in `sendWelcomeEmail()`:
```typescript
from: 'ShineTTW <your-email@yourdomain.com>'
```

## 💰 **Pricing**

- **Free Tier**: 3,000 emails/month
- **Paid Plans**: Start at $20/month for 50,000 emails
- **Perfect for events**: Most events won't exceed the free tier

## 🚨 **Troubleshooting**

### **Email not sending:**
- Check your Resend API key is correct
- Verify the API key is in your `.env.local`
- Check Resend dashboard for errors

### **Email in spam:**
- Resend has excellent deliverability
- Check spam folder initially
- Emails should go to inbox after first delivery

### **Form not working:**
- Check browser console for errors
- Verify all environment variables are set
- Test Mailchimp integration separately

## ✅ **Success Checklist**

- [ ] Resend account created
- [ ] API key generated and copied
- [ ] API key added to `.env.local`
- [ ] Development server restarted
- [ ] Form submission tested
- [ ] Welcome email received
- [ ] Mailchimp contact created

---

**Your custom email system is now ready! 🎵**

Users will receive a beautiful, professional welcome email immediately after RSVPing, and you'll have full control over the content and design. 