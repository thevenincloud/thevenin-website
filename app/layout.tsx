import { CookieBanner } from '@/components/cookie-banner'
import { GoogleAnalytics } from '@/components/google-analytics'
import { ApolloTracking } from '@/components/apollo-tracking'
import { WebVitals } from '@/components/web-vitals'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Krona_One, Lexend } from 'next/font/google'
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
  metadataBase: new URL('https://thevenin.io'),
  title: {
    default: 'Thevenin - Build like a Startup. Ship like an Enterprise.',
    template: '%s | Thevenin'
  },
  description: 'Get the power of an enterprise-grade platform without the engineering overhead. Thevenin makes app deployment scalable, secure, and effortless.',
  keywords: [
    'cloud platform',
    'infrastructure deployment',
    'enterprise platform',
    'application deployment',
    'DevOps automation',
    'cloud infrastructure',
    'platform as a service',
    'scalable deployment',
    'secure infrastructure',
    'multi-cloud platform'
  ],
  authors: [{ name: 'Thevenin' }],
  creator: 'Thevenin',
  publisher: 'Thevenin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thevenin.io',
    siteName: 'Thevenin',
    title: 'Thevenin - Build like a Startup. Ship like an Enterprise.',
    description: 'Get the power of an enterprise-grade platform without the engineering overhead. Thevenin makes app deployment scalable, secure, and effortless.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Thevenin Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thevenin - Build like a Startup. Ship like an Enterprise.',
    description: 'Get the power of an enterprise-grade platform without the engineering overhead.',
    images: ['/logo.png'],
    creator: '@thevenin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://thevenin.io',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
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
        <link rel="dns-prefetch" href="https://assets.apollo.io" />
      </head>
      <body className={`${lexend.variable} ${kronaOne.variable} font-sans antialiased`}>
        <WebVitals />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
        <ApolloTracking apolloId={process.env.NEXT_PUBLIC_APOLLO_ID || ''} />
        {children}
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  )
}
