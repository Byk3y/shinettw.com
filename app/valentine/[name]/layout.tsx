import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
    const name = params.name
    const displayName = name.charAt(0).toUpperCase() + name.slice(1)

    return {
        title: `A Surprise for ${displayName} 💌 | Shine TTW`,
        description: `Hey ${displayName}, I made a little surprise just for you. Click to open it! ✨`,
        openGraph: {
            title: `A Surprise for ${displayName} 💌`,
            description: `A personalized Valentine's message just for you from Shine TTW`,
            images: [
                {
                    url: '/images/valentine/og-preview.png',
                    width: 1200,
                    height: 630,
                    alt: 'Valentine Surprise',
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `A Surprise for ${displayName} 💌`,
            description: `A personalized Valentine's message just for you from Shine TTW`,
            images: ['/images/valentine/og-preview.png'],
        },
        alternates: {
            canonical: `https://shinettw.com/valentine/${name}`,
        },
    }
}

export default function ValentineLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* Google Fonts - Distinctive typography */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Space+Mono:wght@400;700&display=swap"
                rel="stylesheet"
            />

            <div
                style={{
                    minHeight: '100dvh',
                    background: '#0a0a0a',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                }}
            >
                {children}
            </div>
        </>
    )
}
