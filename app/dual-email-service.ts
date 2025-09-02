import { addContactToMailchimp } from './mailchimp-service'
import { createContact as createResendContact } from './email-service'

interface NewsletterData {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
}

interface DualServiceResponse {
  success: boolean
  message: string
  mailchimpSuccess: boolean
  resendSuccess: boolean
  errors?: {
    mailchimp?: string
    resend?: string
  }
}

// Function to add contact to both Mailchimp and Resend
export async function addContactToBothServices(data: NewsletterData): Promise<DualServiceResponse> {
  console.log("🚀 Starting dual service integration...")
  console.log("📧 Contact email:", data.email)
  
  let mailchimpSuccess = false
  let resendSuccess = false
  const errors: { mailchimp?: string; resend?: string } = {}
  
  // Add to Mailchimp
  console.log("📝 Adding to Mailchimp...")
  try {
    const mailchimpResult = await addContactToMailchimp(data)
    if (mailchimpResult.success) {
      mailchimpSuccess = true
      console.log("✅ Mailchimp: Contact added successfully")
    } else {
      errors.mailchimp = mailchimpResult.error || 'Unknown Mailchimp error'
      console.log("❌ Mailchimp: Failed to add contact:", errors.mailchimp)
    }
  } catch (error) {
    errors.mailchimp = error instanceof Error ? error.message : 'Unknown Mailchimp error'
    console.log("❌ Mailchimp: Exception occurred:", errors.mailchimp)
  }
  
  // Add to Resend
  console.log("📝 Adding to Resend...")
  try {
            const resendResult = await createResendContact({
          fullName: `${data.firstName} ${data.lastName}`.trim(),
          email: data.email,
          phone: data.phone
        })
    
    if (resendResult) {
      resendSuccess = true
      console.log("✅ Resend: Contact added successfully")
    } else {
      errors.resend = 'Failed to add contact to Resend'
      console.log("❌ Resend: Failed to add contact")
    }
  } catch (error) {
    errors.resend = error instanceof Error ? error.message : 'Unknown Resend error'
    console.log("❌ Resend: Exception occurred:", errors.resend)
  }
  
  // Determine overall success and message
  const overallSuccess = mailchimpSuccess || resendSuccess // Success if at least one works
  
  let message: string
  if (mailchimpSuccess && resendSuccess) {
    message = "🎉 Successfully added to both Mailchimp and Resend!"
  } else if (mailchimpSuccess) {
    message = "✅ Added to Mailchimp successfully! (Resend failed)"
  } else if (resendSuccess) {
    message = "✅ Added to Resend successfully! (Mailchimp failed)"
  } else {
    message = "❌ Failed to add to both services"
  }
  
  console.log("📊 Final result:", {
    overallSuccess,
    mailchimpSuccess,
    resendSuccess,
    message,
    errors
  })
  
  return {
    success: overallSuccess,
    message,
    mailchimpSuccess,
    resendSuccess,
    errors: Object.keys(errors).length > 0 ? errors : undefined
  }
}

// Function to send welcome email via Resend (for newsletter signups)
export async function sendNewsletterWelcomeEmail(data: NewsletterData): Promise<{ success: boolean; error?: string }> {
  try {
    console.log("📧 Sending newsletter welcome email to:", data.email)
    
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { data: emailResult, error } = await resend.emails.send({
      from: 'ShineTTW <noreply@shinettw.com>',
      to: [data.email],
      subject: '🎵 Welcome to ShineTTW Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to ShineTTW Newsletter</title>
          <style>
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f9fa;
            }
            .container {
              background: white;
              border-radius: 12px;
              padding: 40px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
            }
            .title {
              font-size: 28px;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 10px;
            }
            .subtitle {
              font-size: 18px;
              color: #6b7280;
              margin-bottom: 30px;
            }
            .highlight {
              background: #fef3c7;
              padding: 15px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #f59e0b;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="title">🎉 Welcome to ShineTTW!</div>
              <div class="subtitle">Hey ${data.firstName} ${data.lastName} 😉</div>
            </div>
            
            <p>Thanks for joining the ShineTTW family! You're now part of an exclusive community that gets:</p>
            
            <div class="highlight">
              <strong>🎵 What You'll Get:</strong><br>
              • First access to new music releases<br>
              • Exclusive behind-the-scenes content<br>
              • Early bird access to concert tickets<br>
              • Special offers and merchandise drops<br>
              • Direct updates from ShineTTW
            </div>
            
            <p>We're excited to share the Afro-Sentio journey with you. Stay tuned for amazing content coming your way!</p>
            
            <p style="text-align: center; font-size: 18px; font-weight: bold; color: #ef4444;">
              Welcome to the family! 🎵✨
            </p>
            
            <div class="footer">
              <p><strong>Best regards,</strong><br>The ShineTTW Team</p>
              <p style="font-size: 12px; margin-top: 20px;">
                You're receiving this email because you subscribed to the ShineTTW newsletter.<br>
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.log('❌ Newsletter email sending failed:', error)
      return { success: false, error: error.message || 'Unknown error from Resend' }
    }

    console.log("✅ Newsletter welcome email sent successfully to:", data.email)
    return { success: true }
    
  } catch (error) {
    console.error('❌ Newsletter email service error:', error)
    return { success: false, error: 'Failed to send welcome email' }
  }
}
