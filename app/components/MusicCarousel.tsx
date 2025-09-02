'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { musicData } from '../config/music'
import { trackMusicPlay } from '../config/analytics'

export default function MusicCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setIsTransitioning(true)
    setImageLoading(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % musicData.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setImageLoading(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + musicData.length) % musicData.length)
      setIsTransitioning(false)
    }, 150)
  }

  const currentItem = musicData[currentSlide]

  // Swipe functionality
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section id="music" className="py-8 md:py-16 pb-0 md:pb-16 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-anime-xl text-white text-center mb-2">MUSIC</h2>
        
        {/* Section Separator Line */}
        <div className="w-11/12 md:w-10/12 h-px bg-gray-600 mx-auto mb-8 md:mb-16"></div>
        
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Layout - Side by Side */}
          <div className="hidden md:flex items-center gap-32">
            {/* Left Side - Cover Art */}
            <div className="flex-shrink-0 ml-16 relative">
              {/* Loading Skeleton */}
              {imageLoading && (
                <div className="absolute inset-0 w-80 h-80 bg-gray-800 animate-pulse rounded-lg shadow-2xl"></div>
              )}
              
              <Image
                src={currentItem.coverArt}
                alt={`${currentItem.title} - ${currentItem.subtitle} by Shine TTW`}
                width={320}
                height={320}
                className={`shadow-2xl object-cover transition-opacity duration-300 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                } ${isTransitioning ? 'opacity-50' : ''}`}
                priority={currentSlide === 0}
                quality={90}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            </div>
            
            {/* Right Side - Track Info */}
            <div className="flex-1 text-left ml-24">
              {/* Track Title */}
              <h3 className={`text-4xl md:text-5xl text-white font-anime font-bold mb-6 transition-opacity duration-150 ${
                isTransitioning ? 'opacity-50' : 'opacity-100'
              }`}>
                {currentItem.title}
              </h3>
              
              {/* LISTEN Button */}
              <button 
                className="bg-red-600 hover:bg-red-700 text-white font-anime font-bold tracking-widest py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  const currentTrack = musicData[currentSlide];
                  const listenUrl = currentTrack.streamingLinks.primary || currentTrack.streamingLinks.appleMusic;
                  trackMusicPlay(currentTrack.title, 'Desktop');
                  window.open(listenUrl, '_blank');
                }}
              >
                LISTEN
              </button>
            </div>
          </div>

          {/* Mobile Layout - Centered */}
          <div 
            className="md:hidden text-center relative"
            ref={carouselRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Cover Art */}
            <div className="mb-3 relative">
              {/* Loading Skeleton */}
              {imageLoading && (
                <div className="absolute inset-0 w-96 h-96 bg-gray-800 animate-pulse rounded-lg shadow-2xl mx-auto"></div>
              )}
              
              <Image
                src={currentItem.coverArt}
                alt={`${currentItem.title} - ${currentItem.subtitle} by Shine TTW`}
                width={384}
                height={384}
                className={`mx-auto shadow-2xl object-cover transition-opacity duration-300 ${
                  imageLoading ? 'opacity-0' : 'opacity-100'
                } ${isTransitioning ? 'opacity-50' : ''}`}
                priority={currentSlide === 0}
                quality={90}
                onLoad={() => setImageLoading(false)}
                onError={() => setImageLoading(false)}
              />
            </div>
            
            {/* Track Title with Navigation Arrows */}
            <div className="relative w-full mb-3 flex items-center justify-center">
              {/* Left Arrow - Fixed Position */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-chrome transition-all duration-300 focus:outline-none z-10 group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-chrome/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main Arrow with Continuous Movement */}
                <div className="relative">
                  <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </div>
              </button>

              {/* Track Title - Centered */}
              <h3 className={`text-cyberpunk-lg text-white whitespace-nowrap transition-opacity duration-150 text-center px-16 ${
                isTransitioning ? 'opacity-50' : 'opacity-100'
              }`}>
                {currentItem.title}
              </h3>

              {/* Right Arrow - Fixed Position */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-chrome transition-all duration-300 focus:outline-none z-10 group"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-chrome/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Main Arrow with Continuous Movement */}
                <div className="relative">
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* LISTEN Button */}
            <button 
              className="bg-chrome text-black font-cyberpunk font-bold tracking-widest py-2 px-6 text-base mb-0 transition-all duration-300 transform hover:scale-105 hover:bg-white"
              onClick={() => {
                const currentTrack = musicData[currentSlide];
                const listenUrl = currentTrack.streamingLinks.primary || currentTrack.streamingLinks.appleMusic;
                trackMusicPlay(currentTrack.title, 'Mobile');
                window.open(listenUrl, '_blank');
              }}
            >
              LISTEN
            </button>
            
            {/* Watch Video Link for TIME track */}
            {currentItem.title === "TIME" && (
              <a 
                href="#videos"
                className="text-chrome hover:text-white text-sm font-cyberpunk tracking-wider transition-colors duration-300 mt-2 block"
              >
                Watch Video →
              </a>
            )}
          </div>

          {/* Desktop Navigation Arrows - Far Left and Right */}
          <div className="hidden md:block">
            {/* Left Arrow - Far Left */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-chrome transition-all duration-300 focus:outline-none z-10 group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-chrome/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main Arrow with Continuous Movement */}
              <div className="relative">
                <svg className="w-12 h-12 group-hover:-translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
              
              {/* Subtle "Back" Text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Back
              </div>
            </button>

            {/* Right Arrow - Far Right */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-chrome transition-all duration-300 focus:outline-none z-10 group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-chrome/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Main Arrow with Continuous Movement */}
              <div className="relative">
                <svg className="w-12 h-12 group-hover:translate-x-2 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Subtle "More" Text */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                More
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
