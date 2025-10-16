'use client'

import React from 'react'
import { getEventsWithUpdatedStatuses, type Event } from '../config/events'

export default function Events() {
  const events = getEventsWithUpdatedStatuses()

  const getActionButtonStyle = (actionType: string) => {
    switch (actionType) {
      case 'rsvp':
        return 'bg-red-600 hover:bg-red-700 text-white'
      case 'tickets':
        return 'bg-red-600 hover:bg-red-700 text-white'
      case 'reminder':
        return 'bg-gray-600 hover:bg-gray-700 text-white'
      default:
        return 'bg-red-600 hover:bg-red-700 text-white'
    }
  }

  return (
    <section id="events" className="pt-20 pb-2 md:py-20">
      {/* Event Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Shine TTW Live Events",
            "description": "Upcoming and past events featuring Shine TTW",
            "organizer": {
              "@type": "Organization",
              "name": "Shine TTW"
            },
            "event": events.map(event => ({
              "@type": "Event",
              "name": event.title,
              "description": event.description,
              "startDate": event.date,
              "location": {
                "@type": "Place",
                "name": event.venue,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": event.city,
                  "addressCountry": event.location
                }
              },
              "offers": event.price ? {
                "@type": "Offer",
                "price": event.price,
                "priceCurrency": "NGN"
              } : undefined,
              "eventStatus": event.status === 'completed' ? "https://schema.org/EventScheduled" : "https://schema.org/EventScheduled"
            }))
          })
        }}
      />
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-anime-xl text-white text-center mb-4">EVENTS</h2>
        
        {/* Section Underline */}
        <div className="w-full max-w-4xl mx-auto mb-16">
          <div className="h-px bg-red-600 mx-4"></div>
        </div>
        
        {/* Events Container */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide pl-4 pr-8">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group flex-shrink-0 w-80 cursor-pointer overflow-hidden transform hover:scale-105"
                  onClick={() => {
                    // Handle card click - navigate to Ctrl Shine page for past event
                    if (event.id === 1) {
                      window.location.href = '/ctrlshine';
                    } else {
                      console.log('Event clicked:', event.id);
                    }
                  }}
                >
                  {/* Event Image */}
                  <div className="h-48 relative shadow-2xl transform hover:scale-105 transition-all duration-500 rounded-3xl z-10 overflow-hidden">
                    <img 
                      src={event.imageUrl}
                      alt={`${event.title} - Shine TTW Event in ${event.city}, ${event.location}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg ${
                      event.status === 'completed' ? 'text-red-600' : 'text-green-800'
                    }`}>
                      {event.status === 'completed' ? 'This event has passed' : event.status}
                    </div>
                  </div>
                  
                  {/* Event Info */}
                  <div className="p-4">
                    <div className="flex gap-4">
                      {/* Date Column */}
                      <div className="flex flex-col items-center">
                        <div className="text-green-800 text-sm font-bold uppercase tracking-wider">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                        <div className="text-green-800 text-3xl font-bold">
                          {new Date(event.date).getDate()}
                        </div>
                      </div>
                      
                      {/* Vertical Separator Line */}
                      <div className="w-px bg-gray-500 h-20"></div>
                      
                      {/* Event Details Column */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{event.city}, {event.location}</span>
                        </div>
                        
                        <h3 className="text-green-800 text-xl font-bold mb-2">
                          {event.venue}
                        </h3>
                        
                        <p className="text-gray-700 text-sm mb-3">
                          {event.description}
                        </p>
                        
                        {/* Pricing moved to bottom right */}
                        <div className="flex justify-end">
                          {event.price === 'FREE' ? (
                            <span className="text-green-800 text-sm font-bold">FREE</span>
                          ) : (
                            <span className="text-green-800 text-sm font-bold">{event.price}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {events.map((event) => (
              <div 
                key={event.id}
                className="bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer overflow-hidden"
                onClick={() => {
                  // Handle card click - navigate to Ctrl Shine page for past event
                  if (event.id === 1) {
                    window.location.href = '/ctrlshine';
                  } else {
                    console.log('Event clicked:', event.id);
                  }
                }}
              >
                {/* Event Image */}
                <div className="h-64 relative shadow-2xl transition-all duration-500 rounded-3xl z-10 overflow-hidden">
                  <img 
                    src={event.imageUrl}
                    alt={`${event.title} - Shine TTW Event in ${event.city}, ${event.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold uppercase shadow-lg ${
                    event.status === 'completed' ? 'text-red-600' : 'text-green-800'
                  }`}>
                    {event.status === 'completed' ? 'This event has passed' : event.status}
                  </div>
                </div>
                
                {/* Event Info */}
                <div className="p-6">
                  <div className="flex gap-6">
                    {/* Date Column */}
                    <div className="flex flex-col items-center">
                      <div className="text-green-800 text-lg font-bold uppercase tracking-wider">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                      <div className="text-green-800 text-5xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                    </div>
                    
                    {/* Vertical Separator Line */}
                    <div className="w-px bg-gray-500 h-24"></div>
                    
                    {/* Event Details Column */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-base">{event.city}, {event.location}</span>
                      </div>
                      
                      <h3 className="text-green-800 text-2xl font-bold mb-3">
                        {event.venue}
                      </h3>
                      
                      <p className="text-gray-700 text-base mb-4">
                        {event.description}
                      </p>
                      
                      {/* Pricing moved to bottom right */}
                      <div className="flex justify-end">
                        {event.price === 'FREE' ? (
                          <span className="text-green-800 text-base font-bold">FREE</span>
                        ) : (
                          <span className="text-green-800 text-base font-bold">{event.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* No Events Message (when events array is empty) */}
          {events.length === 0 && (
            <div className="text-center py-16">
              <div className="text-chrome text-6xl mb-4">🎵</div>
              <h3 className="text-futuristic text-white mb-4">No Events Scheduled</h3>
              <p className="text-body-md text-gray-400 mb-8">
                Check back soon for upcoming shows and tour dates
              </p>
              <button className="bg-chrome text-black font-bold py-3 px-8 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 text-button">
                Follow for Updates
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
