'use client'

import { useState } from 'react'
import { subscribeToEvent } from '../actions'
import { validateFullName, validateEmail, validateNigerianPhone } from '../utils/formValidation'

export interface RSVPFormData {
  fullName: string
  email: string
  phone: string
}

export interface RSVPFormErrors {
  fullName?: string
  email?: string
  phone?: string
}

export interface RSVPFormStatus {
  isSubmitting: boolean
  submitMessage: { type: 'error', message: string } | null
}

export interface RSVPFormProps {
  onSuccess?: () => void
}

export function useRSVPForm({ onSuccess }: RSVPFormProps = {}) {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: '',
    email: '',
    phone: ''
  })

  const [errors, setErrors] = useState<RSVPFormErrors>({})

  const [status, setStatus] = useState<RSVPFormStatus>({
    isSubmitting: false,
    submitMessage: null
  })

  const updateField = (field: keyof RSVPFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: RSVPFormErrors = {}

    // Validate full name
    const fullNameValidation = validateFullName(formData.fullName)
    if (!fullNameValidation.isValid) {
      newErrors.fullName = fullNameValidation.error
    }

    // Validate email
    const emailValidation = validateEmail(formData.email)
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error
    }

    // Validate Nigerian phone
    const phoneValidation = validateNigerianPhone(formData.phone)
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: ''
    })
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setStatus({
      isSubmitting: true,
      submitMessage: null
    })

    try {
      const result = await subscribeToEvent(formData)
      
      if (result.success) {
        resetForm()
        // Call onSuccess callback immediately to show WhatsApp modal
        onSuccess?.()
      } else {
        setStatus({
          isSubmitting: false,
          submitMessage: { type: 'error', message: result.message }
        })
      }
    } catch (error) {
      setStatus({
        isSubmitting: false,
        submitMessage: { 
          type: 'error', 
          message: 'Something went wrong. Please try again.' 
        }
      })
    }
  }

  return {
    formData,
    errors,
    status,
    updateField,
    handleSubmit
  }
}
