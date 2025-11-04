'use client'

import React from 'react'
import CountryCodeSelect from './CountryCodeSelect'

interface PhoneInputProps {
  phone: string
  countryCode: string
  onPhoneChange: (phone: string) => void
  onCountryCodeChange: (countryCode: string) => void
  className?: string
  variant?: 'newsletter' | 'event'
  disabled?: boolean
}

export default function PhoneInput({
  phone,
  countryCode,
  onPhoneChange,
  onCountryCodeChange,
  className = '',
  variant = 'newsletter',
  disabled = false
}: PhoneInputProps) {
  const getLabelClasses = () => {
    if (variant === 'event') {
      return 'block text-sm font-medium text-gray-700 mb-1'
    }
    // newsletter variant (default)
    return 'block text-white text-sm sm:text-base font-bold uppercase tracking-wider mb-2'
  }

  const getInputClasses = () => {
    if (variant === 'event') {
      return `input-field flex-1 ${disabled ? 'disabled:opacity-50' : ''}`
    }
    // newsletter variant (default)
    return 'flex-1 bg-transparent border-0 border-b-2 border-red-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 py-2 text-base sm:text-xl font-cyberpunk'
  }

  const getUnderlineClasses = () => {
    if (variant === 'event') {
      return '' // No underline for event variant
    }
    // newsletter variant (default)
    return 'h-px bg-red-600 mt-1'
  }

  return (
    <div className={`text-left ${className}`}>
      <label className={getLabelClasses()}>
        PHONE NUMBER {variant === 'newsletter' && '*'}
        {variant === 'event' && <span className="text-gray-500">(for event updates)</span>}
      </label>
      <div className="flex gap-2">
        <CountryCodeSelect
          value={countryCode}
          onChange={onCountryCodeChange}
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder={variant === 'event' ? 'e.g., 07010137539' : 'Phone number'}
          required
          disabled={disabled}
          className={getInputClasses()}
        />
      </div>
      {variant === 'newsletter' && <div className={getUnderlineClasses()}></div>}
    </div>
  )
}
