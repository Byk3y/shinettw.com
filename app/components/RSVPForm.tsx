'use client'

import React from 'react'
import { useRSVPForm } from '../hooks/useRSVPForm'
import EventFormField from './Forms/EventFormField'
import EventPhoneInput from './Forms/EventPhoneInput'

interface RSVPFormProps {
  onSuccess?: () => void
}

export default function RSVPForm({ onSuccess }: RSVPFormProps) {
  const { formData, errors, status, updateField, handleSubmit } = useRSVPForm({ onSuccess })

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <EventFormField
          label="Full Name"
          value={formData.fullName}
          onChange={(value) => updateField('fullName', value)}
          error={errors.fullName}
          placeholder="Enter your full name"
          disabled={status.isSubmitting}
          required
        />

        <EventFormField
          label="Email Address"
          value={formData.email}
          onChange={(value) => updateField('email', value)}
          error={errors.email}
          type="email"
          placeholder="Enter your email address"
          disabled={status.isSubmitting}
          required
        />

        <EventPhoneInput
          phone={formData.phone}
          onPhoneChange={(value) => updateField('phone', value)}
          error={errors.phone}
          disabled={status.isSubmitting}
        />

        <button
          type="submit"
          disabled={status.isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status.isSubmitting ? 'Saving...' : 'Save my spot'}
        </button>
      </form>

      {status.submitMessage && status.submitMessage.type === 'error' && (
        <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
          <p className="text-sm font-medium">{status.submitMessage.message}</p>
        </div>
      )}
    </div>
  )
}