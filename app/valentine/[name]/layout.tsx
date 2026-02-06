import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Happy Valentine\'s Day! 💕 | Shine TTW',
    description: 'A personalized Valentine\'s message just for you from Shine TTW',
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
