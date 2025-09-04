'use client'

import React, { useState, useEffect } from 'react'
import { 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaApple, 
  FaSpotify, 
  FaFacebook,
  FaSnapchat,
  FaEnvelope
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { trackSocialClick, trackBookingInquiry } from '../config/analytics'

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'event',
      title: 'Upcoming Event',
      message: 'Encore Bi-Monthly Live Performance - Oct 17, 2025 (Invite Only)',
      timestamp: new Date(),
      read: false
    },
    {
      id: 2,
      type: 'music',
      title: 'New Release',
      message: 'AUNTY MARY featured on Spinall\'s Eko Groove album',
      timestamp: new Date(),
      read: false
    }
  ])
  const [showNotificationPanel, setShowNotificationPanel] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleNotificationPanel = () => {
    setShowNotificationPanel(!showNotificationPanel)
  }

  const markNotificationAsRead = (notificationId: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === notificationId 
          ? { ...notification, read: true }
          : notification
      )
    )
  }

  const handleNotificationClick = (notification: any) => {
    // Mark as read first
    markNotificationAsRead(notification.id)
    
    // Handle specific notification actions
    if (notification.id === 2) { // AUNTY MARY notification
      window.open('https://SPINALL.lnk.to/EKOGROOVE', '_blank')
    } else if (notification.id === 1) { // Event notification
      // Scroll to events section
      const eventsSection = document.getElementById('events')
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
    // Close notification panel
    setShowNotificationPanel(false)
  }

  const unreadCount = notifications.filter(n => !n.read).length

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'music', 'videos', 'events', 'connect']
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

      {/* Mobile Hamburger Menu Icon */}
      <div className={`md:hidden fixed top-4 right-3 z-50 transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <button 
          onClick={toggleMobileMenu}
          className="text-white hover:text-chrome transition-colors focus:outline-none"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Inbox Icon with Notification */}
      <div className="md:hidden fixed top-4 left-3 z-50">
        <button 
          className="relative text-white hover:text-chrome transition-colors focus:outline-none"
          onClick={toggleNotificationPanel}
        >
          <FaEnvelope className="w-8 h-8" />
          {/* Notification Badge with Dynamic Count */}
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{unreadCount}</span>
            </div>
          )}
        </button>
      </div>

      {/* Notification Panel */}
      {showNotificationPanel && (
        <div className="md:hidden fixed top-16 left-3 right-3 z-50 bg-black/95 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl max-h-80 overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-lg">Notifications</h3>
              <button 
                onClick={toggleNotificationPanel}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    notification.read 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-red-900/20 border-red-700'
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm">
                        {notification.title}
                      </h4>
                      <p className="text-gray-300 text-xs mt-1">
                        {notification.message}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">
                        {notification.timestamp.toLocaleDateString()}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-red-500 rounded-full ml-2 mt-1"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
          </nav>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
        
        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-80 bg-black border-l border-gray-800 shadow-2xl">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={toggleMobileMenu}
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
              href="#music" 
              onClick={toggleMobileMenu}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              MUSIC
            </a>
            <a 
              href="#videos" 
              onClick={toggleMobileMenu}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              VIDEOS
            </a>
            <a 
              href="#events" 
              onClick={toggleMobileMenu}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              EVENTS
            </a>
            <a 
              href="#connect" 
              onClick={toggleMobileMenu}
              className="block text-white text-2xl font-anime font-bold tracking-widest hover:text-chrome transition-colors"
            >
              CONNECT
            </a>
          </nav>
          
          {/* Social Media Icons */}
          <div className="px-8 py-8 border-t border-gray-800">
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/shinettw?igsh=MXN3eTMxMmN3MWh1Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chrome transition-colors"
                onClick={() => trackSocialClick('Instagram')}
              >
                <FaInstagram className="w-6 h-6" />
              </a>

              <a
                href="https://x.com/shinettw_?s=11&t=Et70zsgSPUZVCQ4SiLBz9A"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chrome transition-colors"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              
              <a
                href="https://www.facebook.com/shinetotheworlds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chrome transition-colors"
              >
                <FaFacebook className="w-6 h-6" />
              </a>

              <a
                href="https://youtube.com/@shinettw?si=sgNtwCtr5W7zk07p?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chrome transition-colors"
              >
                <FaYoutube className="w-6 h-6" />
              </a>

              <a
                href="https://www.tiktok.com/@shinettw?_t=8nortgxpdt0&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chrome transition-colors"
              >
                <FaTiktok className="w-6 h-6" />
              </a>

              <a
                href="https://www.snapchat.com/add/shinettw1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chrome transition-colors"
              >
                <FaSnapchat className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content - Desktop Only */}
      <div className="hidden md:flex relative z-10 flex-col justify-center items-center h-full px-4 text-center">
      </div>

      {/* Social Media Icons - Desktop Only, Right Side */}
      <div className="hidden md:block absolute right-6 top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col space-y-4">
                    <a
            href="https://www.instagram.com/shinettw?igsh=MXN3eTMxMmN3MWh1Ng=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          <a
            href="https://www.tiktok.com/@shinettw?_t=8nortgxpdt0&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaTiktok className="w-6 h-6" />
          </a>

          <a
            href="https://youtube.com/@shinettw?si=sgNtwCtr5W7zk07p?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaYoutube className="w-6 h-6" />
          </a>

          <a
            href="https://music.apple.com/ng/artist/shine-ttw/1649199436"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaApple className="w-6 h-6" />
          </a>

          <a
            href="https://open.spotify.com/artist/5MMagWgGKYleThIlmQp6wn?si=-TBksCz9QZ2NVDL7kaPo_Q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaSpotify className="w-6 h-6" />
          </a>
          
          <a
            href="https://x.com/shinettw_?s=11&t=Et70zsgSPUZVCQ4SiLBz9A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>

          <a
            href="https://www.snapchat.com/add/shinettw1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaSnapchat className="w-6 h-6" />
          </a>
          
          <a
            href="https://www.facebook.com/shinetotheworlds"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bouncing Booking Button - Mobile: Bottom Right of Screen */}
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <a
          href="mailto:shinettwworks@gmail.com?subject=Booking Inquiry"
          className="group relative inline-block"
          onClick={() => trackBookingInquiry()}
        >
          <div className="relative">
            {/* Glow Effect - Smaller on mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Main Button - Smaller on mobile */}
            <div className="relative bg-gradient-to-r from-chrome via-gray-300 to-chrome hover:from-gray-200 hover:via-chrome hover:to-gray-200 text-black font-anime font-bold text-xs px-2 py-1 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 animate-bounce border border-purple-400">
              <span className="relative z-10 tracking-wide">BOOK SHINE!!</span>
              
              {/* Sparkle Effects - Smaller on mobile */}
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </a>
      </div>

      {/* Desktop Booking Button - Bottom Right */}
      <div className="hidden md:block absolute bottom-6 right-6 z-30">
        <a
          href="mailto:shinettwworks@gmail.com?subject=Booking Inquiry"
          className="group relative inline-block"
          onClick={() => trackBookingInquiry()}
        >
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            
            {/* Main Button */}
            <div className="relative bg-gradient-to-r from-chrome via-gray-300 to-chrome hover:from-gray-200 hover:via-chrome hover:to-gray-200 text-black font-anime font-bold text-sm px-4 py-2 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 animate-bounce border-2 border-purple-400">
              <span className="relative z-10 tracking-wider">BOOK SHINE!!</span>
              
              {/* Sparkle Effects */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-1.5 w-1 h-1 bg-chrome rounded-full animate-ping delay-300"></div>
            </div>
            
            {/* Hover Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
          </div>
        </a>
      </div>
    </section>
  )
}
