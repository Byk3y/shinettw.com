'use client'

import React from 'react'

interface EventPhoneInputProps {
  phone: string
  onPhoneChange: (phone: string) => void
  error?: string
  disabled?: boolean
  placeholder?: string
  className?: string
}

export default function EventPhoneInput({
  phone,
  onPhoneChange,
  error,
  disabled = false,
  placeholder = 'e.g., 07010137539',
  className = ''
}: EventPhoneInputProps) {
  return (
    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
        Phone Number <span className="text-gray-500">(for event updates)</span>
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        className={`input-field ${error ? 'border-red-500 focus:ring-red-500' : ''} ${disabled ? 'disabled:opacity-50' : ''} ${className}`}
        placeholder={placeholder}
        disabled={disabled}
        required
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
