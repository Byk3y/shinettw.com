import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ctrl Shine Live Event - Friday, 15th June',
  description: 'Join Ctrl Shine for an unforgettable live music experience. RSVP now to secure your spot and get exclusive updates.',
  keywords: 'Ctrl Shine, live music, concert, event, June 15',
  authors: [{ name: 'ShineTTW' }],
      openGraph: {
      title: 'Ctrl Shine Live Event - Friday, 15th June',
      description: 'Join Ctrl Shine for an unforgettable live music experience.',
      url: 'https://shinetw.com',
      siteName: 'Ctrl Shine Live Event',
          images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Ctrl Shine Live Event',
        },
      ],
    locale: 'en_US',
    type: 'website',
  },
      twitter: {
      card: 'summary_large_image',
      title: 'Ctrl Shine Live Event - Friday, 15th June',
      description: 'Join Ctrl Shine for an unforgettable live music experience.',
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