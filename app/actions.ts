'use server'

import { sendWelcomeEmail } from './email-service'

interface FormData {
  fullName: string
  email: string
  phone: string
}

interface MailchimpResponse {
  success: boolean
  message: string
}

export async function subscribeToMailchimp(formData: FormData): Promise<MailchimpResponse> {
  try {
    const apiKey = process.env.MAILCHIMP_API_KEY
    const listId = process.env.MAILCHIMP_LIST_ID
    const dc = process.env.MAILCHIMP_DC

    if (!apiKey || !listId || !dc) {
      console.error('Missing Mailchimp environment variables')
      return {
        success: false,
        message: 'Server configuration error. Please try again later.'
      }
    }

    if (!formData.email || !formData.fullName || !formData.phone) {
      return {
        success: false,
        message: 'Please provide your name, email address, and phone number.'
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: 'Please provide a valid email address.'
      }
    }

    const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
    const nigerianPhoneRegex = /^(\+?234|0)?[789][01]\d{8}$/

    if (!nigerianPhoneRegex.test(cleanPhone)) {
      return {
        success: false,
        message: 'Please provide a valid Nigerian phone number (e.g., 07010137539 or +2347010137539).'
      }
    }

    let normalizedPhone = cleanPhone
    if (cleanPhone.startsWith('0')) {
      normalizedPhone = '+234' + cleanPhone.substring(1)
    } else if (cleanPhone.startsWith('234')) {
      normalizedPhone = '+' + cleanPhone
    } else if (!cleanPhone.startsWith('+234')) {
      normalizedPhone = '+234' + cleanPhone
    }

    const payload = {
      email_address: formData.email.toLowerCase().trim(),
      status: 'subscribed',
      merge_fields: {
        FNAME: formData.fullName.trim(),
        PHONE: normalizedPhone
      }
    }

    const response = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      if (response.status === 400 && errorData.title === 'Member Exists') {
        return {
          success: false,
          message: 'This email is already subscribed to our list.'
        }
      }
      console.error('Mailchimp API error:', errorData)
      return {
        success: false,
        message: 'Unable to subscribe at this time. Please try again later.'
      }
    }

    // Try to send welcome email, but don't fail if it doesn't work
    try {
      const emailResult = await sendWelcomeEmail(formData)
      if (emailResult.warning) {
        console.log('Email warning:', emailResult.warning)
      }
    } catch (emailError) {
      console.error('Welcome email error:', emailError)
    }

    return {
      success: true,
      message: '🎉 You\'re on the list! Check your email for event details.'
    }

  } catch (error) {
    console.error('Subscription error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again later.'
    }
  }
} 