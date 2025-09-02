'use client'

import React, { useState } from 'react'
import RSVPForm from '../components/RSVPForm'
import WhatsAppCommunity from '../components/WhatsAppCommunity'

export default function CtrlShineClient() {
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false)

  const handleRSVPSuccess = () => {
    setShowWhatsAppModal(true)
  }

  const handleCloseWhatsApp = () => {
    setShowWhatsAppModal(false)
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background with gradient overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-red-900"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            CTRL + SHINE 1.0
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            August 20, 2024
          </p>
          <p className="text-lg text-gray-400 mb-8">
            Lagos, Nigeria
          </p>
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider">
            This event has passed
          </div>
        </div>
      </section>

      {/* Event Gallery Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            EVENT GALLERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for gallery images */}
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Gallery Coming Soon</p>
            </div>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Gallery Coming Soon</p>
            </div>
            <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-400">Gallery Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Events Notification Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Want to be the first to know about future Shine TTW events? 
            Join our community and never miss out!
          </p>
          
          <RSVPForm onSuccess={handleRSVPSuccess} />
        </div>
      </section>

      {/* WhatsApp Community Modal */}
      {showWhatsAppModal && (
        <WhatsAppCommunity onClose={handleCloseWhatsApp} />
      )}
    </main>
  )
}
