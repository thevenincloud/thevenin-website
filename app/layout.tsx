import type { Metadata } from 'next'
import { Lexend, Krona_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import { GoogleAnalytics } from '@/components/google-analytics'
import { WebVitals } from '@/components/web-vitals'
import './globals.css'

const lexend = Lexend({ 
  subsets: ["latin"], 
  variable: '--font-lexend',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});
const kronaOne = Krona_One({ 
  subsets: ["latin"], 
  weight: '400',
  variable: '--font-krona',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'Thevenin - Build like a Startup. Ship like an Enterprise.',
  description: 'Get the power of an enterprise-grade platform without the engineering overhead. Thevenin makes app deployment scalable, secure, and effortless.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${lexend.variable} ${kronaOne.variable} font-sans antialiased`}>
        <WebVitals />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'} />
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  )
}
