'use client'

import React from 'react'
import { useNewsletterForm } from '../../hooks/useNewsletterForm'
import FormField from '../Forms/FormField'
import PhoneInput from '../Forms/PhoneInput'
import CountrySelect from '../Forms/CountrySelect'

export default function NewsletterForm() {
  const { formData, status, updateField, handleSubmit } = useNewsletterForm()

  return (
    <div className="text-center mb-12">
      <h3 className="text-futuristic text-white text-center mb-8 text-2xl font-bold uppercase tracking-wider">
        BE THE FIRST TO KNOW
      </h3>
      <p className="text-white text-center mb-8 text-sm">
        Get exclusive updates on new releases, tour dates, and behind-the-scenes content
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* First Name and Last Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <label className="block text-white text-base font-bold uppercase tracking-wider mb-2">
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
          <p className="text-white text-xs leading-relaxed">
            EMAILS FROM SHINE TTW WILL BE SENT BY OR ON BEHALF OF SHINE TTW. YOU CAN UNSUBSCRIBE AT ANY TIME.
          </p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={status.isSubmitting}
            className="bg-red-800 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-12 text-lg uppercase tracking-wider transition-all duration-300"
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
