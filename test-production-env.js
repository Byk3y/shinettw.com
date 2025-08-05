// Test script to verify production environment setup
console.log('🔍 Checking production environment setup...');

// Check if we're in a production environment
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';
console.log('🌍 Environment:', isProduction ? 'Production' : 'Development');

// Check for required environment variables
const requiredVars = [
  'MAILCHIMP_API_KEY',
  'MAILCHIMP_LIST_ID', 
  'MAILCHIMP_DC',
  'RESEND_API_KEY'
];

console.log('\n📋 Environment Variables Check:');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (value) {
    console.log(`✅ ${varName}: ${value.substring(0, 10)}...`);
  } else {
    console.log(`❌ ${varName}: NOT SET`);
  }
});

console.log('\n💡 If any variables show as NOT SET, you need to configure them in your Vercel dashboard.');
console.log('🔗 Go to: https://vercel.com/dashboard -> Your Project -> Settings -> Environment Variables'); 