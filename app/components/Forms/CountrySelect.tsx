'use client'

import React from 'react'
import { countries, type Country } from '../../config/countries'

interface CountrySelectProps {
  value: string
  onChange: (value: string) => void
  className?: string
}

export default function CountrySelect({ value, onChange, className = '' }: CountrySelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full bg-transparent border-0 border-b-2 border-red-600 text-white focus:outline-none focus:border-red-500 py-2 appearance-none text-xl font-cyberpunk ${className}`}
    >
      <option value="" className="bg-black text-white">Select Country</option>
      {countries.map((country: Country) => (
        <option key={country.name} value={country.name} className="bg-black text-white">
          {country.name}
        </option>
      ))}
    </select>
  )
}
