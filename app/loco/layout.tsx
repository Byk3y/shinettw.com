import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LOCO — Shine TTW',
  description: 'A story about love, madness, and the line between both.',
  openGraph: {
    title: 'LOCO — Shine TTW',
    description: 'A story about love, madness, and the line between both.',
    images: [
      {
        url: '/music/loco-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'LOCO - Shine TTW',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LOCO — Shine TTW',
    description: 'A story about love, madness, and the line between both.',
    images: ['/music/loco-cover.jpg'],
  },
}

export default function LocoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
