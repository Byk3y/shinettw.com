import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shine TTW - Links | Connect with Shine TTW',
  description: 'Connect with Shine TTW on all social media platforms. Follow on Instagram, TikTok, YouTube, Apple Music, Spotify, X (Twitter), Snapchat, and Facebook.',
  keywords: 'Shine TTW, social media, Instagram, TikTok, YouTube, Apple Music, Spotify, X Twitter, Snapchat, Facebook, afro beats artist, Nigerian music',
  openGraph: {
    title: 'Shine TTW - Links | Connect with Shine TTW',
    description: 'Connect with Shine TTW on all social media platforms. Follow on Instagram, TikTok, YouTube, Apple Music, Spotify, X (Twitter), Snapchat, and Facebook.',
    url: 'https://shinettw.com/links',
    siteName: 'Shine TTW Official',
    images: [
      {
        url: '/music/ep-the-chosen-one.jpg',
        width: 1200,
        height: 630,
        alt: 'Shine TTW - Connect on Social Media',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shine TTW - Links | Connect with Shine TTW',
    description: 'Connect with Shine TTW on all social media platforms. Follow on Instagram, TikTok, YouTube, Apple Music, Spotify, X (Twitter), Snapchat, and Facebook.',
    images: ['/music/ep-the-chosen-one.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shinettw.com/links',
  },
}

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
