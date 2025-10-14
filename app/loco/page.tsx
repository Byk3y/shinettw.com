/*
 * LOCO Landing Page - Single Release Landing
 *
 * VIDEO INTEGRATION:
 * - YouTube embed: https://youtu.be/NWvscGKWYRk ✅ (implemented)
 * - Cover art: /public/music/loco-cover.jpg (available for metadata)
 *
 * ENVIRONMENT SETUP:
 * - Add NEXT_PUBLIC_ENCORE_URL=https://shinettw.ffm.to/loco to .env.local
 * - This is your presave link that shows all streaming options
 * - If not set, CTA will point to the presave link as fallback
 *
 * UTM PROPAGATION:
 * - Automatically captures UTM parameters from incoming URL
 * - Appends them to the CTA link to preserve email campaign attribution
 * - Supports: utm_source, utm_medium, utm_campaign, utm_term, utm_content
 *
 * YOUTUBE INTEGRATION:
 * - Video ID: NWvscGKWYRk
 * - YouTube embed with native controls
 * - Responsive embed with aspect-square ratio
 * - NEXT_PUBLIC_ENCORE_URL is set to https://shinettw.ffm.to/loco
 */

'use client'

import React, { useState, useEffect } from 'react'
import CTAButton from './CTAButton'
import MobileMenu from '../components/Navigation/MobileMenu'
import { mobileSocialLinks } from '../config/social'

export default function LocoPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Control body overflow to prevent scrolling on LOCO page
  useEffect(() => {
    // Disable scrolling when component mounts
    document.body.style.overflow = 'hidden'
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="h-dvh bg-[#0b0b0b] text-[#f7f3e9] flex flex-col items-center justify-center px-4 py-4 md:py-8 animate-in fade-in duration-1000 overflow-hidden">
      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        activeSection=""
        isBlogPage={false}
      />
      {/* Logo */}
      <div className="mb-1 md:mb-8 -mt-8 md:mt-0">
        <img
          src="/icons/shine website icon.png"
          alt="Shine TTW"
          className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 animate-spin"
          style={{ animationDuration: '8s' }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full text-center space-y-4 md:space-y-8">
        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-[#f7f3e9]/80 font-light leading-relaxed">
          Love, madness, and the line between both.
        </p>

        {/* Video Preview and CTA Button Container */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-4 md:space-y-0 max-w-sm md:max-w-2xl mx-auto">
                  {/* YouTube Shorts Preview */}
                  <div className="relative w-full max-w-sm md:max-w-xl">
                    <div className="relative group">
                      <iframe
                        src="https://www.youtube.com/embed/NWvscGKWYRk?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0"
                        title="LOCO Preview - Shine TTW"
                        className="w-full aspect-square rounded-2xl shadow-2xl border border-[#d4af37]/20 hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)] transition-all duration-500 hover:scale-105"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

          {/* CTA Button */}
          <div className="md:pt-0">
            <CTAButton />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2 md:mt-8 text-xs md:text-sm text-[#f7f3e9]/60 font-light">
        Made with heart in Lagos 🇳🇬
      </div>

      {/* Social Media Icons */}
      <div className="mt-3 md:mt-4 flex items-center justify-center space-x-4">
        {mobileSocialLinks.map((social) => {
          const IconComponent = social.icon
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f7f3e9]/60 hover:text-[#d4af37] transition-colors duration-300 hover:scale-110 transform"
              aria-label={`Follow Shine TTW on ${social.platform}`}
            >
              <IconComponent className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
