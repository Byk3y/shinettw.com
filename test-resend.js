const { Resend } = require('resend');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

async function testResend() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('❌ RESEND_API_KEY not found in .env.local');
    return;
  }

  console.log('🔑 API Key found:', apiKey.substring(0, 10) + '...');
  
  const resend = new Resend(apiKey);

  try {
    console.log('📧 Attempting to send test email...');
    
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['francischukwuma706@gmail.com'],
      subject: '🧪 Test Email from ShineTTW Event',
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify Resend is working correctly.</p>
        <p>If you receive this, your Resend setup is working! 🎉</p>
        <p>Time sent: ${new Date().toLocaleString()}</p>
      `,
    });

    if (error) {
      console.error('❌ Error sending email:', error);
      return;
    }

    console.log('✅ Email sent successfully!');
    console.log('📊 Response data:', data);
    
  } catch (error) {
    console.error('❌ Exception occurred:', error);
  }
}

testResend(); 