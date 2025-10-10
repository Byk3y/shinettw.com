'use client'

import { useState } from 'react'
import { subscribeToNewsletter } from '../actions'
import { trackNewsletterSignup } from '../config/analytics'

export interface NewsletterFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  countryCode: string
  country: string
}

export interface FormStatus {
  isSubmitting: boolean
  isSubscribed: boolean
  submitMessage: { type: 'success' | 'error', message: string } | null
}

export function useNewsletterForm() {
  const [formData, setFormData] = useState<NewsletterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+234',
    country: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSubscribed: false,
    submitMessage: null
  })

  const updateField = (field: keyof NewsletterFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateForm = (): boolean => {
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus(prev => ({
        ...prev,
        submitMessage: { type: 'error', message: 'Please fill in all required fields.' }
      }))
      return false
    }
    return true
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: '+234',
      country: ''
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setStatus({
      isSubmitting: true,
      isSubscribed: false,
      submitMessage: null
    })

    try {
      const result = await subscribeToNewsletter({
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        phone: `${formData.countryCode}${formData.phone.trim()}`,
        country: formData.country.trim()
      })

      if (result.success) {
        trackNewsletterSignup()
        setStatus({
          isSubmitting: false,
          isSubscribed: true,
          submitMessage: { type: 'success', message: result.message }
        })
        resetForm()
        setTimeout(() => {
          setStatus(prev => ({
            ...prev,
            isSubscribed: false,
            submitMessage: null
          }))
        }, 5000)
      } else {
        setStatus({
          isSubmitting: false,
          isSubscribed: false,
          submitMessage: { type: 'error', message: result.message }
        })
      }
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSubscribed: false,
        submitMessage: { 
          type: 'error', 
          message: 'Something went wrong. Please try again.' 
        }
      })
    }
  }

  return {
    formData,
    status,
    updateField,
    handleSubmit
  }
}
