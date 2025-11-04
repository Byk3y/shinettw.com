'use client'

import React, { useRef } from 'react'
import { useNewsletterForm } from '../../hooks/useNewsletterForm'
import FormField from '../Forms/FormField'
import PhoneInput from '../Forms/PhoneInput'
import CountrySelect from '../Forms/CountrySelect'

export default function NewsletterForm() {
  const { formData, status, updateField, handleSubmit } = useNewsletterForm()
  const honeypotRef = useRef<HTMLInputElement>(null)

  return (
    <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-6">
      <h3 className="text-futuristic text-white text-center mb-4 sm:mb-8 text-xl sm:text-2xl font-bold uppercase tracking-wider">
        BE THE FIRST TO KNOW
      </h3>
      <p className="text-white text-center mb-6 sm:mb-8 text-xs sm:text-sm px-2">
        Get exclusive updates on new releases, tour dates, and behind-the-scenes content
      </p>
      
      <form onSubmit={(e) => handleSubmit(e, honeypotRef.current?.value || '')} className="space-y-4 sm:space-y-6">
        {/* Honeypot field - Hidden from users but visible to bots */}
        <input
          ref={honeypotRef}
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none' }}
          aria-hidden="true"
        />
        
        {/* First Name and Last Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <FormField
            label="FIRST NAME"
            value={formData.firstName}
            onChange={(value) => updateField('firstName', value)}
            required
          />
          <FormField
            label="LAST NAME"
            value={formData.lastName}
            onChange={(value) => updateField('lastName', value)}
            required
          />
        </div>

        {/* Email Field */}
        <FormField
          label="EMAIL ADDRESS"
          value={formData.email}
          onChange={(value) => updateField('email', value)}
          type="email"
          required
        />

        {/* Phone Number Field */}
        <PhoneInput
          phone={formData.phone}
          countryCode={formData.countryCode}
          onPhoneChange={(value) => updateField('phone', value)}
          onCountryCodeChange={(value) => updateField('countryCode', value)}
        />

        {/* Country Field */}
        <div className="text-left">
          <label className="block text-white text-sm sm:text-base font-bold uppercase tracking-wider mb-2">
            COUNTRY
          </label>
          <CountrySelect
            value={formData.country}
            onChange={(value) => updateField('country', value)}
          />
          <div className="h-px bg-red-600 mt-1"></div>
        </div>

        {/* Privacy Policy */}
        <div className="text-center">
          <p className="text-white text-[10px] sm:text-xs leading-relaxed px-2">
            EMAILS FROM SHINE TTW WILL BE SENT BY OR ON BEHALF OF SHINE TTW. YOU CAN UNSUBSCRIBE AT ANY TIME.
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={status.isSubmitting}
            className="bg-red-800 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2.5 sm:py-3 px-8 sm:px-12 text-base sm:text-lg uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
          >
            {status.isSubmitting ? 'SUBMITTING...' : status.isSubscribed ? 'SUBMITTED' : 'SUBMIT'}
          </button>
        </div>
        
        {/* Error Messages Only */}
        {status.submitMessage && status.submitMessage.type === 'error' && (
          <div className="text-center mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
            <p className="text-sm font-medium">{status.submitMessage.message}</p>
          </div>
        )}
      </form>
    </div>
  )
}
