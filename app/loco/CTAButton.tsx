'use client'

import React from 'react'
import { useUTMParams } from '../hooks/useUTMParams'

export default function CTAButton() {
  const { appendUTMToUrl } = useUTMParams()
  
  const encoreUrl = process.env.NEXT_PUBLIC_ENCORE_URL || 'https://shinettw.ffm.to/loco'
  const finalUrl = appendUTMToUrl(encoreUrl)
  
  return (
    <a
      href={finalUrl}
      className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#d4af37] text-black font-bold text-base rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:ring-offset-2 focus:ring-offset-[#0b0b0b] transform hover:-translate-y-1 active:scale-95"
    >
      LISTEN
    </a>
  )
}
