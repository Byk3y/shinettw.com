'use server'

import { sendWelcomeEmail } from './email-service'

interface FormData {
  fullName: string
  email: string
  phone: string
}

interface Response {
  success: boolean
  message: string
}

export async function subscribeToEvent(formData: FormData): Promise<Response> {
  try {
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

    // Send welcome email via Resend
    try {
      const emailResult = await sendWelcomeEmail(formData)
      if (!emailResult.success) {
        console.error('Email sending failed:', emailResult.error)
        return {
          success: false,
          message: 'Unable to send confirmation email. Please try again later.'
        }
      }
    } catch (emailError) {
      console.error('Welcome email error:', emailError)
      return {
        success: false,
        message: 'Unable to send confirmation email. Please try again later.'
      }
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