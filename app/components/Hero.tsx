'use client'

import React from 'react'
import NotificationSystem from './NotificationSystem'
import Navigation from './Navigation'

export default function Hero() {
  return (
    <section id="hero" className="relative h-64 md:h-screen overflow-hidden">
      {/* SEO H1 Heading - Visually Hidden */}
      <h1 className="sr-only">Shine TTW - Afro Beats Artist | Nigerian Music</h1>
      
      {/* Video Background - Scoped to Hero section only (Desktop Only) */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
      </div>
      
      {/* Mobile Video Container - Full Width at Top */}
      <div className="md:hidden absolute top-0 left-0 right-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          className="w-full h-64 object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Notification System */}
      <NotificationSystem />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Content - Desktop Only */}
      <div className="hidden md:flex relative z-10 flex-col justify-center items-center h-full px-4 text-center">
      </div>
    </section>
  )
}