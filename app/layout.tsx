import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Orbitron, Inter, Exo_2, Chakra_Petch, Audiowide } from 'next/font/google'
import './globals.css'

// Import futuristic font for section titles
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

// Import anime-styled futuristic font for section titles
const exo2 = Exo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-exo2',
  display: 'swap',
})

// Import cyberpunk-style font for special elements
const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-chakra-petch',
  display: 'swap',
})

// Import futuristic display font for hero elements
const audiowide = Audiowide({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-audiowide',
  display: 'swap',
})

// Import clean sans-serif for body text
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shine TTW - Afro Beats Artist | Nigerian Music | Official Website',
  description: 'Discover Shine TTW, rising Afro Beats artist from Nigeria. Stream The Chosen One EP, TIME, I Go, and AUNTY MARY. Collaborations with Bob Sinclar and Spinall. Official artist website with music, videos, events, and latest updates.',
  keywords: 'Shine TTW, afro beats artist, Nigerian music, afro beats, The Chosen One EP, TIME, I Go, AUNTY MARY, Bob Sinclar, Spinall, afro beats music, Nigerian artist, afro beats streaming, afro beats playlist',
  authors: [{ name: 'Shine TTW' }],
  openGraph: {
    title: 'Shine TTW - Afro Beats Artist | Nigerian Music',
    description: 'Discover Shine TTW, rising Afro Beats artist from Nigeria. Stream The Chosen One EP and collaborations with Bob Sinclar and Spinall.',
    url: 'https://shinettw.com',
    siteName: 'Shine TTW Official',
    images: [
      {
        url: '/music/ep-the-chosen-one.jpg',
        width: 1200,
        height: 630,
        alt: 'Shine TTW - The Chosen One EP',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shine TTW - Afro Beats Artist | Nigerian Music',
    description: 'Discover Shine TTW, rising Afro Beats artist from Nigeria. Stream The Chosen One EP and collaborations with Bob Sinclar and Spinall.',
    images: ['/music/ep-the-chosen-one.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://shinettw.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#C0C0C0',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts for better performance */}
        <link
          rel="preload"
          href="/_next/static/media/orbitron.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/_next/static/media/exo2.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical music cover art */}
        <link
          rel="preload"
          as="image"
          href="/music/single-time.jpg"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icons/icon-512x512.png" type="image/png" sizes="512x512" />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C0C0C0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Shine TTW" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-192x192.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Shine TTW",
              "alternateName": "ShineTTW",
              "description": "Afro Beats artist from Nigeria known for The Chosen One EP and collaborations with Bob Sinclar and Spinall. Apple Music Up Next artist.",
              "url": "https://shinettw.com",
              "logo": "https://shinettw.com/music/ep-the-chosen-one.jpg",
              "image": "https://shinettw.com/music/ep-the-chosen-one.jpg",
              "genre": ["Afro Beats", "Afrobeat", "Nigerian Music", "Afro-Pop", "Afro-Sentio"],
              "foundingDate": "2024",
              "award": "Apple Music Up Next Recognition",
              "sameAs": [
                "https://www.instagram.com/shinettw",
                "https://www.tiktok.com/@shinettw",
                "https://youtube.com/@shinettw",
                "https://x.com/shinettw_",
                "https://music.apple.com/ng/artist/shine-ttw/1649199436",
                "https://open.spotify.com/artist/5MMagWgGKYleThIlmQp6wn"
              ],
              "album": [
                {
                  "@type": "MusicAlbum",
                  "name": "The Chosen One",
                  "description": "Debut EP by Shine TTW featuring Afro Beats sound",
                  "image": "https://shinettw.com/music/ep-the-chosen-one.jpg",
                  "byArtist": {
                    "@type": "MusicGroup",
                    "name": "Shine TTW"
                  },
                  "datePublished": "2024",
                  "numTracks": 4
                }
              ],
              "track": [
                {
                  "@type": "MusicRecording",
                  "name": "TIME",
                  "description": "Single by Shine TTW - Afro Beats vibes",
                  "image": "https://shinettw.com/music/single-time.jpg",
                  "byArtist": {
                    "@type": "MusicGroup",
                    "name": "Shine TTW"
                  },
                  "duration": "PT3M30S",
                  "datePublished": "2024"
                },
                {
                  "@type": "MusicRecording",
                  "name": "I Go",
                  "description": "Collaboration with Bob Sinclar",
                  "image": "https://shinettw.com/music/shine ttw & bob sinclar (i go).jpeg",
                  "byArtist": {
                    "@type": "MusicGroup",
                    "name": "Shine TTW"
                  },
                  "duration": "PT3M45S",
                  "datePublished": "2024"
                },
                {
                  "@type": "MusicRecording",
                  "name": "AUNTY MARY",
                  "description": "Collaboration with Spinall and Darkoo",
                  "image": "https://shinettw.com/music/AUNTY MARY, (Spinall, Shine ttw, Darkoo vibes).jpeg",
                  "byArtist": {
                    "@type": "MusicGroup",
                    "name": "Shine TTW"
                  },
                  "duration": "PT3M15S",
                  "datePublished": "2024"
                }
              ],
              "member": {
                "@type": "Person",
                "name": "Shine TTW",
                "jobTitle": "Music Artist",
                "description": "Afro Beats music artist and performer"
              }
            })
          }}
        />
      </head>
      <body className={`antialiased ${orbitron.variable} ${exo2.variable} ${chakraPetch.variable} ${audiowide.variable} ${inter.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 