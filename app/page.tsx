'use client'

import React from 'react'
import Hero from './components/Hero'
import MusicCarousel from './components/MusicCarousel'
import VideosCarousel from './components/VideosCarousel'
import Events from './components/Events'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <MusicCarousel />
      <VideosCarousel />
      <Events />
      <Connect />
      <Footer />
    </main>
  )
} 