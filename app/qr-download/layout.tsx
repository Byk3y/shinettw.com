import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'QR Code Generator - Shine TTW | Create Branded QR Codes',
  description: 'Generate custom QR codes with Shine TTW logo overlay for events and marketing materials. Free QR code generator with download functionality.',
  keywords: 'QR code generator, Shine TTW, branded QR codes, event marketing, QR code with logo, free QR generator',
  openGraph: {
    title: 'QR Code Generator - Shine TTW | Create Branded QR Codes',
    description: 'Generate custom QR codes with Shine TTW logo overlay for events and marketing materials. Free QR code generator with download functionality.',
    url: 'https://shinettw.com/qr-download',
    siteName: 'Shine TTW Official',
    images: [
      {
        url: '/icons/brand-shine-website.png',
        width: 1200,
        height: 630,
        alt: 'Shine TTW QR Code Generator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Code Generator - Shine TTW | Create Branded QR Codes',
    description: 'Generate custom QR codes with Shine TTW logo overlay for events and marketing materials. Free QR code generator with download functionality.',
    images: ['/icons/brand-shine-website.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://shinettw.com/qr-download',
  },
}

export default function QRDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}





