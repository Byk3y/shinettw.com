/*
 * LOCO Landing Page - Single Release Landing
 * 
 * ASSET PLACEMENT:
 * - Instagram preview video: /public/videos/SHINE 2a.mp4 ✅ (implemented)
 * - Cover art: /public/music/loco-cover.jpg (available but not used as poster)
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
 * UPDATING ASSETS:
 * - Video: /public/videos/SHINE 2a.mp4 ✅ (implemented)
 * - Cover art: /public/music/loco-cover.jpg (available but not used)
 * - NEXT_PUBLIC_ENCORE_URL is set to https://shinettw.ffm.to/loco
 */

'use client'

import React, { useState, useRef } from 'react'
import CTAButton from './CTAButton'
import MobileMenu from '../components/Navigation/MobileMenu'

export default function LocoPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f7f3e9] flex flex-col items-center justify-center px-4 py-8 animate-in fade-in duration-1000">
      {/* Mobile Menu Component */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        activeSection=""
        isBlogPage={false}
      />
      {/* Logo */}
      <div className="mb-8">
        <img 
          src="/icons/shine website icon.png" 
          alt="Shine TTW" 
          className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 animate-spin"
          style={{ animationDuration: '8s' }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full text-center space-y-8">
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#f7f3e9]/80 font-light leading-relaxed">
          Love, madness, and the line between both.
        </p>

        {/* Video Preview and CTA Button Container */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0 max-w-sm md:max-w-2xl mx-auto">
          {/* Instagram Preview Video */}
          <div className="relative w-full max-w-sm md:max-w-xl">
            <div className="relative group">
              <video 
                ref={videoRef}
                playsInline
                preload="metadata"
                className="w-full rounded-2xl shadow-2xl border border-[#d4af37]/20 hover:shadow-[0_25px_50px_rgba(212,175,55,0.2)] transition-all duration-500 hover:scale-105"
                onClick={togglePlayPause}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/SHINE 2a.mp4" type="video/mp4" />
                Your browser does not support the video element.
              </video>
              
              {/* Custom Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300 rounded-2xl cursor-pointer"
              >
                <div className="relative">
                  {isPlaying ? (
                    <svg className="w-12 h-12 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-16 h-16 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" viewBox="0 0 68 48" fill="currentColor">
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="currentColor"/>
                      <path d="M 45,24 27,14 27,34" fill="black"/>
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="md:pt-0">
            <CTAButton />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-sm text-[#f7f3e9]/60 font-light">
        Made with heart in Lagos 🇳🇬
      </div>
    </div>
  )
}
