'use client'

import React from 'react'
import { trackBookingInquiry } from '../../config/analytics'

interface BookingButtonProps {
  variant: 'mobile' | 'desktop'
  className?: string
}

export default function BookingButton({ variant, className = '' }: BookingButtonProps) {
  const handleClick = () => {
    trackBookingInquiry()
  }

  if (variant === 'mobile') {
    return (
      <div className={`md:hidden fixed bottom-4 right-4 z-30 ${className}`}>
        <a
          href="mailto:shinettwworks@gmail.com?subject=Booking Inquiry"
          className="group relative inline-block"
          onClick={handleClick}
        >
          <div className="relative">
            {/* Glow Effect - Smaller on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Main Button - Smaller on mobile */}
            <div className="relative bg-gradient-to-r from-chrome via-gray-300 to-chrome hover:from-gray-200 hover:via-chrome hover:to-gray-200 text-black font-anime font-bold text-xs px-2 py-1 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 animate-bounce border border-purple-400">
              <span className="relative z-10 tracking-wide">BOOK SHINE!!</span>
              
              {/* Sparkle Effects - Smaller on mobile */}
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </a>
      </div>
    )
  }

  return (
    <div className={`hidden md:block absolute bottom-6 right-6 z-30 ${className}`}>
      <a
        href="mailto:shinettwworks@gmail.com?subject=Booking Inquiry"
        className="group relative inline-block"
        onClick={handleClick}
      >
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-r from-chrome via-gray-300 to-chrome hover:from-gray-200 hover:via-chrome hover:to-gray-200 text-black font-anime font-bold text-sm px-4 py-2 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 animate-bounce border-2 border-purple-400">
            <span className="relative z-10 tracking-wider">BOOK SHINE!!</span>
            
            {/* Sparkle Effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -right-1.5 w-1 h-1 bg-chrome rounded-full animate-ping delay-300"></div>
          </div>
          
          {/* Hover Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
        </div>
      </a>
    </div>
  )
}
