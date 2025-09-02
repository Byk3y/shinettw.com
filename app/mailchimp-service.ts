interface MailchimpContact {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
}

interface MailchimpResponse {
  success: boolean
  error?: string
  data?: any
}

// Function to add contact to Mailchimp using direct API calls
export async function addContactToMailchimp(contact: MailchimpContact): Promise<MailchimpResponse> {
  try {
    console.log("📝 Adding contact to Mailchimp...")
    console.log("📧 Email:", contact.email)
    console.log("🔑 API Key exists:", !!process.env.MAILCHIMP_API_KEY)
    console.log("📋 List ID exists:", !!process.env.MAILCHIMP_LIST_ID)
    console.log("🌍 Data Center exists:", !!process.env.MAILCHIMP_DC)
    
    const apiKey = process.env.MAILCHIMP_API_KEY
    const listId = process.env.MAILCHIMP_LIST_ID
    const dataCenter = process.env.MAILCHIMP_DC
    
    if (!apiKey || !listId || !dataCenter) {
      console.error("❌ Missing Mailchimp configuration")
      return {
        success: false,
        error: "Mailchimp configuration incomplete"
      }
    }
    
    // Create the API endpoint URL
    const apiUrl = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`
    
    // Prepare the contact data
    const contactData = {
      email_address: contact.email,
      status: "subscribed",
      merge_fields: {
        FNAME: contact.firstName,
        LNAME: contact.lastName,
        PHONE: contact.phone,
        COUNTRY: contact.country
      }
    }
    
    console.log("🌐 Making request to:", apiUrl)
    console.log("📦 Contact data:", JSON.stringify(contactData, null, 2))
    
    // Make the API request
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from('anystring:' + apiKey).toString('base64'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    })
    
    const responseData = await response.json()
    
    if (!response.ok) {
      console.error("❌ Mailchimp API Error:", response.status, responseData)
      return {
        success: false,
        error: responseData.detail || `HTTP ${response.status}: ${response.statusText}`
      }
    }
    
    console.log("✅ Contact added to Mailchimp successfully:", contact.email)
    console.log("📊 Response:", responseData)
    
    return {
      success: true,
      data: responseData
    }
    
  } catch (error) {
    console.error("❌ Mailchimp service error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

// Function to test Mailchimp connection
export async function testMailchimpConnection(): Promise<boolean> {
  try {
    const apiKey = process.env.MAILCHIMP_API_KEY
    const dataCenter = process.env.MAILCHIMP_DC
    
    if (!apiKey || !dataCenter) {
      console.error("❌ Missing Mailchimp API key or data center")
      return false
    }
    
    const testUrl = `https://${dataCenter}.api.mailchimp.com/3.0/ping`
    
    const response = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + Buffer.from('anystring:' + apiKey).toString('base64'),
        'Content-Type': 'application/json'
      }
    })
    
    if (response.ok) {
      console.log("✅ Mailchimp connection test successful")
      return true
    } else {
      console.error("❌ Mailchimp connection test failed:", response.status)
      return false
    }
    
  } catch (error) {
    console.error("❌ Mailchimp connection test error:", error)
    return false
  }
}
