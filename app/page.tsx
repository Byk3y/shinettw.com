'use client'

import React, { useState } from 'react'
import RSVPForm from './components/RSVPForm'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="fixed inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.midjourney.com/video/2af3197f-999f-4865-892d-b20de18db32a/0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
      </div>
      
      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center">
        {/* Event Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-sora drop-shadow-lg">
          ShineTTW
        </h1>
        
        {/* Event Subtitle */}
        <p className="text-xl sm:text-2xl text-white/90 font-medium mb-6 drop-shadow-lg">
          Live Event
        </p>
        
        {/* Event Details */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-sm mx-auto">
          <div className="space-y-3 text-white">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Saturday, August 10</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <span className="font-medium">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8:00 PM - 11:00 PM</span>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Save a Spot
        </button>
        
        {/* Footer */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/70 text-sm">
            © 2024 ShineTTW. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Secure Your Spot</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2">
                Join us for an unforgettable evening of music and energy.
              </p>
            </div>
            
            {/* Form */}
            <div className="p-6">
              <RSVPForm onSuccess={() => setShowForm(false)} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 