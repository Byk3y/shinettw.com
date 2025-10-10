'use client'

import React from 'react'
import { countryCodes, type CountryCode } from '../../config/countries'

interface CountryCodeSelectProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function CountryCodeSelect({ value, onChange, className = '' }: CountryCodeSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-transparent border-0 border-b-2 border-red-600 text-white focus:outline-none focus:border-red-500 py-2 appearance-none text-xl font-cyberpunk min-w-[120px] ${className}`}
    >
      {countryCodes.map((countryCode: CountryCode) => (
        <option key={countryCode.code} value={countryCode.code} className="bg-black text-white">
          {countryCode.flag} {countryCode.code}
        </option>
      ))}
    </select>
  )
}
