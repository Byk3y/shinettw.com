'use client'

import React, { useState } from 'react'
import { FaPlay } from 'react-icons/fa'
import { videosData } from '../config/videos'
import { trackVideoPlay } from '../config/analytics'

export default function VideosCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  
  const videos = videosData

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const openVideo = (youtubeId: string, videoTitle?: string) => {
    console.log('🎬 VIDEO CLICKED! Opening video with ID:', youtubeId)
    if (videoTitle) {
      trackVideoPlay(videoTitle)
    }
    setSelectedVideo(youtubeId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  // Prevent iframe from opening new windows and ensure mobile compatibility
  const handleIframeLoad = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.focus();
      // Add mobile-specific attributes
      iframe.setAttribute('webkit-playsinline', 'true');
      iframe.setAttribute('playsinline', 'true');
      iframe.setAttribute('allowfullscreen', 'false');
      
      // Prevent new window opening on mobile
      if (window.innerWidth <= 768) {
        iframe.style.pointerEvents = 'auto';
        iframe.style.touchAction = 'manipulation';
      }
    }
  }

  return (
    <section id="videos" className="py-20 pb-8">
      {/* Video Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Shine TTW Music Videos",
            "description": "Official music videos by Shine TTW",
            "publisher": {
              "@type": "Organization",
              "name": "Shine TTW"
            },
            "video": videos.map(video => ({
              "@type": "VideoObject",
              "name": video.title,
              "description": `${video.title} - Official music video by Shine TTW`,
              "thumbnailUrl": video.thumbnail,
              "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`,
              "url": `https://www.youtube.com/watch?v=${video.youtubeId}`,
              "uploadDate": "2024-01-01",
              "duration": "PT3M30S",
              "creator": {
                "@type": "Person",
                "name": "Shine TTW"
              }
            }))
          })
        }}
      />
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-anime-xl text-white text-center mb-2">VIDEOS</h2>
        
        {/* Section Separator Line */}
        <div className="w-full max-w-4xl mx-auto mb-8 md:mb-16">
          <div className="h-px bg-red-600 mx-4"></div>
        </div>
        

        
        {/* Video Carousel - Mobile Single View, Desktop Grid */}
        <div className="md:hidden">
          {/* Mobile Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center relative">
              <div className="mb-4 relative">
                <img
                  src={videos[currentVideoIndex].thumbnail}
                  alt={`${videos[currentVideoIndex].title} - Shine TTW Music Video`}
                  className="w-full h-64 object-cover mx-auto shadow-2xl rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Play Overlay - Always visible on mobile */}
                <div 
                  className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg cursor-pointer"
                  onClick={() => openVideo(videos[currentVideoIndex].youtubeId, videos[currentVideoIndex].title)}
                >
                  <div className="relative">
                    {/* YouTube-style play button */}
                    <svg 
                      className="w-16 h-16 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" 
                      viewBox="0 0 68 48"
                      fill="currentColor"
                    >
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="currentColor"/>
                      <path d="M 45,24 27,14 27,34" fill="black"/>
                    </svg>
                  </div>
                </div>
                

              </div>
              
                            <div className="flex items-center justify-between mb-2">
                {/* Left Arrow */}
                <button
                  onClick={prevVideo}
                  className="text-white hover:text-chrome transition-colors focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Centered Title */}
                <h3 className="text-cyberpunk text-white text-center flex-1">{videos[currentVideoIndex].title}</h3>

                {/* Right Arrow */}
                <button
                  onClick={nextVideo}
                  className="text-white hover:text-chrome transition-colors focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="group cursor-pointer" onClick={() => openVideo(video.youtubeId, video.title)}>
              <div className="relative overflow-hidden rounded-lg shadow-2xl group-hover:shadow-chrome/20 transition-all duration-300">
                <img
                  src={video.thumbnail}
                  alt={`${video.title} - Shine TTW Music Video`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="relative">
                    {/* YouTube-style play button */}
                    <svg 
                      className="w-16 h-16 text-white drop-shadow-lg hover:scale-110 transition-transform duration-200" 
                      viewBox="0 0 68 48"
                      fill="currentColor"
                    >
                      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="currentColor"/>
                      <path d="M 45,24 27,14 27,34" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-cyberpunk text-white mb-2">{video.title}</h3>
                <p className="text-body text-gray-400">{video.description}</p>
              </div>
            </div>
          ))}
          
          {/* More Videos Button - Positioned as the last item in the grid */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => window.open('https://youtube.com/@shinettw?si=sgNtwCtr5W7zk07p?sub_confirmation=1', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white font-anime font-bold tracking-widest py-3 px-8 text-lg transition-all duration-300 transform hover:scale-105"
            >
              MORE VIDEOS
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm video-modal">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-chrome transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=1&modestbranding=1&rel=0&fs=0&iv_load_policy=3&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}&enablejsapi=1&widget_referrer=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                title="YouTube video player"
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                style={{ border: 'none' }}
                sandbox="allow-same-origin allow-scripts allow-presentation allow-forms allow-popups"
                onLoad={handleIframeLoad}

              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
