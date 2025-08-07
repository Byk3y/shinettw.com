import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  fullName: string
  email: string
  phone: string
}

// Function to create contact in Resend Audiences
async function createContact(data: EmailData) {
  try {
    console.log("📝 Creating contact in Resend Audiences...")
    
    const response = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        firstName: data.fullName.split(' ')[0],
        lastName: data.fullName.split(' ').slice(1).join(' ') || '',
        phone: data.phone,
        unsubscribed: false,
        audienceId: 'general' // Default audience
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.log('❌ Contact creation failed:', error)
      return false
    }

    const result = await response.json()
    console.log('✅ Contact created successfully:', data.email)
    console.log('📊 Contact ID:', result.id)
    return true
  } catch (error) {
    console.error('❌ Contact creation error:', error)
    return false
  }
}

export async function sendWelcomeEmail(data: EmailData) {
  console.log("📧 Attempting to send email to:", data.email)
  console.log("🔑 API Key exists:", !!process.env.RESEND_API_KEY)
  console.log("🔑 API Key starts with:", process.env.RESEND_API_KEY?.substring(0, 10))
  
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is not set")
    return { success: false, error: "Email service not configured" }
  }

  try {
    const { data: emailResult, error } = await resend.emails.send({
      from: 'ShineTTW <noreply@shinettw.com>',
      to: [data.email],
      subject: '🎵 You\'re confirmed for Ctrl Shine Live Event!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ctrl Shine Live Event Confirmation</title>
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
            .event-details {
              background: #f3f4f6;
              border-radius: 8px;
              padding: 20px;
              margin: 20px 0;
            }
            .event-detail {
              display: flex;
              align-items: center;
              margin: 10px 0;
              font-size: 16px;
            }
            .event-detail svg {
              width: 20px;
              height: 20px;
              margin-right: 10px;
              color: #ef4444;
            }
            .cta-button {
              display: inline-block;
              background: #ef4444;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .highlight {
              background: #fef3c7;
              padding: 15px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #f59e0b;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="title">🎉 You're Confirmed!</div>
              <div class="subtitle">Hi ${data.fullName}, you've successfully saved your spot for the Ctrl Shine Live Event!</div>
            </div>
            
            <div class="event-details">
              <div class="event-detail">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <strong>Date:</strong> Friday, 15th June, 2024
              </div>
              <div class="event-detail">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <strong>Time:</strong> 5:00 PM - 11:00 PM
              </div>
              <div class="event-detail">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <strong>Venue:</strong> To Be Announced
              </div>
            </div>
            
            <div class="highlight">
              <strong>🎵 What to Expect:</strong><br>
              • 3 hours of non-stop entertainment<br>
              • Live performance by ShineTTW<br>
              • Your favorite hits and exclusive new tracks<br>
              • An unforgettable evening of music and energy
            </div>
            
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <strong>📱 Important Notes:</strong><br>
              • Doors open at 4:30 PM<br>
              • Free entry (you're already on the guest list!)<br>
              • Bring your energy and dancing shoes!
            </div>
            
            <p>We'll send you updates and reminders as the event approaches. If you have any questions, feel free to reply to this email.</p>
            
            <p style="text-align: center; font-size: 18px; font-weight: bold; color: #ef4444;">
              See you there! 🎵
            </p>
            
            <div class="footer">
              <p><strong>Best regards,</strong><br>The ShineTTW Team</p>
              <p style="font-size: 12px; margin-top: 20px;">
                You're receiving this email because you RSVP'd for the Ctrl Shine Live Event.<br>
                Phone: ${data.phone}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    if (error) {
      console.log('🔍 Resend API Response:', error)
      console.log('🔍 Error details:', JSON.stringify(error, null, 2))
      console.log('🔍 Error type:', typeof error)
      console.log('🔍 Error keys:', Object.keys(error || {}))
      return { success: false, error: error.message || 'Unknown error from Resend' }
    }

    console.log("✅ Email sent successfully to:", data.email)
    
    // Create contact in Resend Audiences for future broadcasts
    const contactCreated = await createContact(data)
    
    if (contactCreated) {
      console.log("✅ Contact saved to Resend Audiences for future broadcasts")
    } else {
      console.log("⚠️ Contact creation failed, but email was sent successfully")
    }
    
    return { success: true, data: emailResult }
  } catch (error) {
    console.error('Email service error:', error)
    return { success: false, error: 'Failed to send email' }
  }
} 