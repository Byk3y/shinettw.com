import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ShineTTW Live Event - Friday, 15th August',
  description: 'Join ShineTTW for an unforgettable live music experience. RSVP now to secure your spot and get exclusive updates.',
  keywords: 'ShineTTW, live music, concert, event, August 15',
  authors: [{ name: 'ShineTTW' }],
      openGraph: {
      title: 'ShineTTW Live Event - Friday, 15th August',
      description: 'Join ShineTTW for an unforgettable live music experience.',
      url: 'https://shinetw.com',
      siteName: 'ShineTTW Live Event',
          images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ShineTTW Live Event',
        },
      ],
    locale: 'en_US',
    type: 'website',
  },
      twitter: {
      card: 'summary_large_image',
      title: 'ShineTTW Live Event - Friday, 15th August',
      description: 'Join ShineTTW for an unforgettable live music experience.',
      images: ['/og-image.jpg'],
    },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 