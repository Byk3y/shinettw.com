'use client'

import React from 'react'
import { useState } from 'react'
import { subscribeToEvent } from '../actions'

interface FormData {
  fullName: string
  email: string
  phone: string
}

interface FormErrors {
  fullName?: string
  email?: string
  phone?: string
}

interface RSVPFormProps {
  onSuccess?: () => void
}

export default function RSVPForm({ onSuccess }: RSVPFormProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else {
      // Nigerian phone validation
      const cleanPhone = formData.phone.replace(/[\s\-\(\)]/g, '')
      const nigerianPhoneRegex = /^(\+?234|0)?[789][01]\d{8}$/
      
      if (!nigerianPhoneRegex.test(cleanPhone)) {
        newErrors.phone = 'Please enter a valid Nigerian phone number (e.g., 07010137539)'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      const result = await subscribeToEvent(formData)
      
      if (result.success) {
        setSubmitMessage({ type: 'success', message: result.message })
        setFormData({ fullName: '', email: '', phone: '' })
        // Call onSuccess callback after a short delay to show success message
        setTimeout(() => {
          onSuccess?.()
        }, 2000)
      } else {
        setSubmitMessage({ type: 'error', message: result.message })
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`input-field ${errors.fullName ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter your full name"
            disabled={isSubmitting}
            required
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="Enter your email address"
            disabled={isSubmitting}
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-gray-500">(for event updates)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`input-field ${errors.phone ? 'border-red-500 focus:ring-red-500' : ''}`}
            placeholder="e.g., 07010137539"
            disabled={isSubmitting}
            required
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : 'Save my spot'}
        </button>
      </form>

      {submitMessage && (
        <div className={`mt-4 p-4 rounded-lg ${
          submitMessage.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <p className="text-sm font-medium">{submitMessage.message}</p>
        </div>
      )}
    </div>
  )
} 