'use client'

import React from 'react'
import SocialIcons from './SocialIcons'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  activeSection: string
  isBlogPage: boolean
  isLocoPage?: boolean
}

export default function MobileMenu({ isOpen, onClose, activeSection, isBlogPage, isLocoPage = false }: MobileMenuProps) {
  return (
    <>
      {/* Mobile Hamburger Menu Icon */}
      <div className={`md:hidden fixed top-4 right-3 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <button 
          onClick={onClose}
          className="text-white hover:text-chrome transition-colors focus:outline-none"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Side Drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-80 bg-black border-l border-gray-800 shadow-2xl">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={onClose}
              className="text-white hover:text-chrome transition-colors focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="px-8 py-12 space-y-8">
            <a 
              href={isLocoPage ? "/#music" : "#music"} 
              onClick={onClose}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              MUSIC
            </a>
            <a 
              href={isLocoPage ? "/#videos" : "#videos"} 
              onClick={onClose}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              VIDEOS
            </a>
            <a 
              href={isLocoPage ? "/#events" : "#events"} 
              onClick={onClose}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              EVENTS
            </a>
            <a 
              href={isLocoPage ? "/#connect" : "#connect"} 
              onClick={onClose}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              CONNECT
            </a>
            <span 
              className="block text-gray-500 text-2xl font-anime font-bold tracking-widest cursor-not-allowed"
              title="Coming Soon"
            >
              BLOG <span className="text-sm">(COMING SOON)</span>
            </span>
          </nav>
          
          {/* Social Media Icons */}
          {!isBlogPage && (
            <div className="px-8 py-8 border-t border-gray-800">
              <SocialIcons variant="mobile" />
              
              {/* Website Icon */}
              <div className="mt-8 flex justify-center">
                <img 
                  src="/icons/shine website icon.png" 
                  alt="Shine TTW Logo" 
                  className="w-32 h-32 object-contain hover:scale-105 transition-transform duration-300 animate-spin"
                  style={{ animationDuration: '3s' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
