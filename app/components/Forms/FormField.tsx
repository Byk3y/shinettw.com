'use client'

import React from 'react'

interface FormFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  type?: 'text' | 'email' | 'tel'
  required?: boolean
  placeholder?: string
  className?: string
  variant?: 'newsletter' | 'event'
  disabled?: boolean
}

export default function FormField({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
  className = '',
  variant = 'newsletter',
  disabled = false
}: FormFieldProps) {
  const getInputClasses = () => {
    if (variant === 'event') {
      return `input-field ${className} ${disabled ? 'disabled:opacity-50' : ''}`
    }
    // newsletter variant (default)
    return `w-full bg-transparent border-0 border-b-2 border-red-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 py-2 text-xl font-cyberpunk ${className}`
  }

  const getLabelClasses = () => {
    if (variant === 'event') {
      return 'block text-sm font-medium text-gray-700 mb-1'
    }
    // newsletter variant (default)
    return 'block text-white text-base font-bold uppercase tracking-wider mb-2'
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
        {label} {required && variant === 'newsletter' && '*'}
        {required && variant === 'event' && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={getInputClasses()}
      />
      {variant === 'newsletter' && <div className={getUnderlineClasses()}></div>}
    </div>
  )
}
