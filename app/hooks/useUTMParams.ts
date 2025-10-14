'use client'

import { useEffect, useState } from 'react'

interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
}

export function useUTMParams() {
  const [utmParams, setUtmParams] = useState<UTMParams>({})

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const params: UTMParams = {}
      
      // Extract UTM parameters
      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
      
      utmKeys.forEach(key => {
        const value = urlParams.get(key)
        if (value) {
          params[key as keyof UTMParams] = value
        }
      })
      
      setUtmParams(params)
    }
  }, [])

  const appendUTMToUrl = (baseUrl: string): string => {
    if (!baseUrl || baseUrl === '#') return baseUrl
    
    const url = new URL(baseUrl)
    const existingParams = new URLSearchParams(url.search)
    
    // Append UTM parameters if they exist
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value && !existingParams.has(key)) {
        existingParams.set(key, value)
      }
    })
    
    url.search = existingParams.toString()
    return url.toString()
  }

  return {
    utmParams,
    appendUTMToUrl,
    hasUTMParams: Object.keys(utmParams).length > 0
  }
}
