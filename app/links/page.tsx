'use client'

import React from 'react'
import Link from 'next/link'
import { socialLinks } from '../config/social'
import { trackSocialClick } from '../config/analytics'

export default function LinksPage() {
  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-gray-100/80" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 relative">
          {/* Logo - Absolutely positioned to prevent layout shift */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <img 
              src="/icons/brand-shine-website.png" 
              alt="Shine TTW Logo" 
              className="w-40 h-40 md:w-48 md:h-48 object-contain hover:scale-105 transition-transform duration-300 animate-spin"
              style={{ animationDuration: '3s' }}
            />
          </div>
          
          {/* Text Logo - Positioned to account for absolute logo */}
          <div className="flex justify-center pt-32 md:pt-40">
            <img 
              src="/images/logo/shinettw-text-logo-cropped.png" 
              alt="Shine TTW" 
              className="h-20 md:h-24 object-contain"
              style={{ maxWidth: '90vw' }}
            />
          </div>
        </div>

        {/* All Links */}
        <div className="space-y-4 mb-12">
          {socialLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick(link.platform)}
                className="group w-full bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200/50 rounded-xl px-6 py-4 flex items-center justify-between text-gray-900 shadow-md shadow-gray-200/50 hover:border-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 hover:shadow-xl hover:shadow-gray-300/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" />
                  <span className="font-body text-lg font-medium">
                    {link.platform}
                  </span>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </div>
              </a>
            )
          })}
          
          {/* Visit Website */}
          <Link 
            href="/"
            className="group w-full bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm border border-gray-200/50 rounded-xl px-6 py-4 flex items-center justify-between text-gray-900 shadow-md shadow-gray-200/50 hover:border-gray-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-50 hover:shadow-xl hover:shadow-gray-300/30 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center space-x-4">
              <svg 
                className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                />
              </svg>
              <span className="font-body text-lg font-medium">
                Visit Website
              </span>
            </div>
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
