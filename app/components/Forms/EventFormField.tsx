'use client'

import React from 'react'
import FormField from './FormField'

interface EventFormFieldProps {
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: 'text' | 'email' | 'tel'
  placeholder?: string
  disabled?: boolean
  required?: boolean
  className?: string
}

export default function EventFormField({
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  disabled = false,
  required = false,
  className = ''
}: EventFormFieldProps) {
  return (
    <div>
      <FormField
        label={label}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        variant="event"
        disabled={disabled}
        className={`${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
