'use client'

import React from 'react'
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaApple,
  FaSpotify,
  FaFacebook,
  FaSnapchat
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-400 text-center md:text-left mb-6 md:mb-0">
            <p className="text-body-md">© ShineTTW 2025</p>
            <p className="text-body text-gray-500">All rights reserved</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/shinettw?igsh=MXN3eTMxMmN3MWh1Ng=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.tiktok.com/@shinettw?_t=8nortgxpdt0&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
            
            <a
              href="https://youtube.com/@shinettw?si=sgNtwCtr5W7zk07p?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            
            <a
              href="https://x.com/shinettw_?s=11&t=Et70zsgSPUZVCQ4SiLBz9A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
            
            <a
              href="https://music.apple.com/ng/artist/shine-ttw/1649199436"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaApple className="w-5 h-5" />
            </a>
            
            <a
              href="https://open.spotify.com/artist/5MMagWgGKYleThIlmQp6wn?si=-TBksCz9QZ2NVDL7kaPo_Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaSpotify className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.facebook.com/shinettw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            
            <a
              href="https://www.snapchat.com/add/shinettw1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-chrome transition-colors"
            >
              <FaSnapchat className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
