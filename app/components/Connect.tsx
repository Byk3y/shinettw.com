'use client'

import React from 'react'
import NewsletterForm from './Connect/NewsletterForm'

export default function Connect() {
  return (
    <section id="connect" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-anime-xl text-white text-center mb-4">CONNECT</h2>
        
        {/* Section Underline */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="h-px bg-white mx-4"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  )
}