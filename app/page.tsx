 'use client'

import React, { useEffect, useState } from 'react'
import RSVPForm from './components/RSVPForm'
import WhatsAppCommunity from './components/WhatsAppCommunity'

export default function Home() {
  const [showForm, setShowForm] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Fixed closing time: 2 hours before event start (West Africa Time, UTC+1)
  const eventStartMs = new Date('2025-08-15T17:00:00+01:00').getTime()
  const closingDeadline = eventStartMs - 2 * 60 * 60 * 1000
  const [timeLeftMs, setTimeLeftMs] = useState<number>(() => Math.max(closingDeadline - Date.now(), 0))

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeftMs(Math.max(closingDeadline - Date.now(), 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [closingDeadline])

  const isClosed = timeLeftMs <= 0
  const hours = Math.floor(timeLeftMs / 3600000)
  const minutes = Math.floor((timeLeftMs % 3600000) / 60000)
  const seconds = Math.floor((timeLeftMs % 60000) / 1000)
  const pad = (n: number) => n.toString().padStart(2, '0')

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="fixed inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onError={(e) => console.error('Video error:', e)}
        >
                                <source src="https://cdn.midjourney.com/video/350543a3-3c97-4364-9c41-d073c332b816/0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40"></div>
      </div>
      {/* Closing Soon / Closed banner */}
      {(
        <div className="fixed top-3 left-0 right-0 z-20 flex justify-center px-4">
          {isClosed ? (
            <div className="px-5 py-3 rounded-2xl shadow-2xl bg-red-600 text-white border border-white/20">
              <p className="text-sm font-bold tracking-wide">RSVP is now closed. See you tonight!</p>
            </div>
          ) : (
            <div className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur px-4 py-3 border border-white/40">
              <div className="text-[11px] sm:text-xs font-semibold text-gray-700 tracking-wide text-center">RSVP closes in</div>
              <div className="mt-1 flex items-end justify-center gap-2 font-mono">
                <div className="w-12 sm:w-14 px-2 py-1 rounded-lg bg-gray-900 text-white text-2xl sm:text-3xl font-extrabold text-center">
                  {mounted ? pad(hours) : '--'}
                </div>
                <span className="text-lg sm:text-2xl font-bold text-gray-900">:</span>
                <div className="w-12 sm:w-14 px-2 py-1 rounded-lg bg-gray-900 text-white text-2xl sm:text-3xl font-extrabold text-center">
                  {mounted ? pad(minutes) : '--'}
                </div>
                <span className="text-lg sm:text-2xl font-bold text-gray-900">:</span>
                <div className="w-12 sm:w-14 px-2 py-1 rounded-lg bg-gray-900 text-white text-2xl sm:text-3xl font-extrabold text-center">
                  {mounted ? pad(seconds) : '--'}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Main Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4 text-center">
                            {/* Event Title */}
                                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-sora drop-shadow-lg">
                              CTRL + SHINE
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
                                                            <span className="font-medium">Friday, 15th August</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="font-medium">Venue: KAIRO's HUB</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                                                            <span className="font-medium">5:00 PM - 11:30 PM</span>
                        </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <button
          onClick={() => setShowForm(true)}
          disabled={isClosed}
          className="bg-white text-gray-900 font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isClosed ? 'RSVP Closed' : 'Save a Spot'}
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
              <RSVPForm onSuccess={() => {
                setShowForm(false)
                setShowWhatsApp(true)
              }} />
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Community Modal */}
      {showWhatsApp && (
        <WhatsAppCommunity onClose={() => setShowWhatsApp(false)} />
      )}
    </main>
  )
} 