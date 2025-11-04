'use client'

import React from 'react'
import SocialIcons from './Navigation/SocialIcons'

export default function Footer() {
  return (
    <footer className="pt-8 sm:pt-12 pb-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left mb-6 md:mb-0">
            <p className="text-body-md">© Shine TTW 2025</p>
            <p className="text-body text-gray-500">All rights reserved</p>
          </div>
          
          {/* Social Icons */}
          <SocialIcons variant="footer" className="text-gray-400 hover:text-chrome" />
        </div>
      </div>
    </footer>
  )
}
