# Mailchimp Setup Guide - ShineTTW Event

## 📋 **Step 1: Add Phone Number Merge Field**

You need to add a `PHONE` merge field to your Mailchimp audience so it can store phone numbers.

### How to Add Merge Field:

1. **Log into Mailchimp**
2. Go to **Audience** → **Settings** → **Audience fields and merge tags**
3. Click **Add a field**
4. Configure the field:
   - **Field Label**: `Phone Number`
   - **Field Type**: `Phone Number`
   - **Required**: `No` (we handle validation in the form)
   - **Default Value**: Leave empty
5. Click **Save**

## 📧 **Step 2: Customize Welcome Email**

Set up a custom welcome email that includes event details and venue information.

### How to Set Up Welcome Email:

1. **Go to Mailchimp Dashboard**
2. Navigate to **Audience** → **Settings** → **Audience name and defaults**
3. Scroll down to **Welcome email**
4. Click **Edit welcome email**
5. Configure the email:

### **Email Subject:**
```
🎵 You're confirmed for ShineTTW Live Event!
```

### **Email Content:**
```
Hi {{FNAME}},

🎉 You've successfully saved your spot for the ShineTTW Live Event!

**Event Details:**
📅 Date: Saturday, August 10, 2024
🕐 Time: 8:00 PM - 11:00 PM
📍 Venue: Lagos Convention Center
🌍 Location: Victoria Island, Lagos, Nigeria

**What to Expect:**
• 3 hours of non-stop entertainment
• Live performance by ShineTTW
• Your favorite hits and exclusive new tracks
• An unforgettable evening of music and energy

**Important Notes:**
• Doors open at 7:30 PM
• Free entry (you're already on the guest list!)
• Bring your energy and dancing shoes!

We'll send you updates and reminders as the event approaches. If you have any questions, feel free to reply to this email.

See you there! 🎵

Best regards,
The ShineTTW Team

---
You're receiving this email because you RSVP'd for the ShineTTW Live Event.
```

6. **Save the welcome email**

## 🔧 **Step 3: Test the Complete Flow**

1. **Test the form locally**:
   - Go to `http://localhost:3000`
   - Fill out the form with your details
   - Submit and check for success message

2. **Check Mailchimp**:
   - Go to Audience → All contacts
   - Verify your contact appears with phone number
   - Check that you received the welcome email

3. **Verify merge fields**:
   - Your contact should show:
     - `FNAME`: Your full name
     - `PHONE`: Your phone number
     - `EMAIL`: Your email address

## 📱 **Step 4: Future Email Campaigns**

Now you can send targeted emails to your audience:

### **Example Campaign Ideas:**
1. **Event Reminder** (1 week before)
2. **Final Details** (1 day before)
3. **Post-Event Thank You**
4. **Future Events Announcement**

### **How to Send Campaigns:**
1. Go to **Campaigns** → **Create Campaign**
2. Choose **Email**
3. Select your audience
4. Use merge tags like `{{FNAME}}` for personalization
5. Send to all subscribers or segment by criteria

## 🎯 **Merge Tags You Can Use**

In your email campaigns, you can use these merge tags:
- `{{FNAME}}` - Full Name
- `{{PHONE}}` - Phone Number
- `{{EMAIL}}` - Email Address

## ✅ **Verification Checklist**

- [ ] Phone number merge field added to Mailchimp
- [ ] Welcome email customized with event details
- [ ] Form submission working locally
- [ ] Contact appears in Mailchimp with all fields
- [ ] Welcome email received
- [ ] Phone number stored correctly

## 🚨 **Troubleshooting**

### **Phone number not saving:**
- Check that the merge field is named exactly `PHONE`
- Verify the field type is "Phone Number"
- Check server logs for API errors

### **Welcome email not sending:**
- Ensure welcome email is enabled in audience settings
- Check spam folder
- Verify email content is saved

### **Form validation errors:**
- Phone number must be in valid format
- International numbers should start with +
- Remove spaces, dashes, and parentheses

---

**Your ShineTTW event RSVP system is now complete! 🎵** 