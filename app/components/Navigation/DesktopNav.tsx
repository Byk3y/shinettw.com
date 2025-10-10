'use client'

import React from 'react'
import SocialIcons from './SocialIcons'

interface DesktopNavProps {
  activeSection: string
}

export default function DesktopNav({ activeSection }: DesktopNavProps) {
  return (
    <>
      {/* Navbar/Buttons Overlay - Desktop Only */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-20 pt-4 px-6">
        <div className="flex justify-between items-center">
          {/* Action Buttons */}
          <div className="flex space-x-4">
            <a 
              href="#music"
              className="bg-chrome text-black text-button py-3 px-6 rounded-full text-sm shadow-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Listen Now
            </a>
            <a 
              href="#videos"
              className="bg-transparent border-2 border-chrome text-chrome text-button py-3 px-6 rounded-full text-sm hover:bg-chrome hover:text-black transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Watch Videos
            </a>
          </div>
          
          {/* Navigation Placeholder */}
          <nav className="flex space-x-8">
            <a 
              href="#music" 
              className={`font-anime font-bold tracking-widest transition-colors ${
                activeSection === 'music' 
                  ? 'text-chrome border-b-2 border-chrome pb-1' 
                  : 'text-white hover:text-chrome'
              }`}
            >
              MUSIC
            </a>
            <a 
              href="#videos" 
              className={`font-anime font-bold tracking-widest transition-colors ${
                activeSection === 'videos' 
                  ? 'text-chrome border-b-2 border-chrome pb-1' 
                  : 'text-white hover:text-chrome'
              }`}
            >
              VIDEOS
            </a>
            <a 
              href="#events" 
              className={`font-anime font-bold tracking-widest transition-colors ${
                activeSection === 'events' 
                  ? 'text-chrome border-b-2 border-chrome pb-1' 
                  : 'text-white hover:text-chrome'
              }`}
            >
              EVENTS
            </a>
            <a 
              href="#connect" 
              className={`font-anime font-bold tracking-widest transition-colors ${
                activeSection === 'connect' 
                  ? 'text-chrome border-b-2 border-chrome pb-1' 
                  : 'text-white hover:text-chrome'
              }`}
            >
              CONNECT
            </a>
            <span 
              className="font-anime font-bold tracking-widest transition-colors text-gray-500 cursor-not-allowed"
              title="Coming Soon"
            >
              BLOG <span className="text-xs">(COMING SOON)</span>
            </span>
          </nav>
        </div>
      </div>

      {/* Social Media Icons - Desktop Only, Right Side */}
      <div className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <SocialIcons variant="desktop" orientation="vertical" />
      </div>
    </>
  )
}
