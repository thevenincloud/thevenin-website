import { FeaturesOverviewSection } from '@/components/features-overview-section'
import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'
import { OrganizationSchema, SoftwareApplicationSchema, WebsiteSchema } from '@/components/structured-data'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Thevenin - Build like a Startup. Ship like an Enterprise.',
  description: 'Get the power of an enterprise-grade platform without the engineering overhead. Thevenin makes app deployment scalable, secure, and effortless.',
  alternates: {
    canonical: 'https://thevenin.io',
  },
}

// Lazy load below-the-fold components
const TargetAudienceSection = dynamic(() => import('@/components/target-audience-section').then(mod => ({ default: mod.TargetAudienceSection })), {
  loading: () => <div className="min-h-[400px]" />,
})
const DemoVideoSection = dynamic(() => import('@/components/demo-video-section').then(mod => ({ default: mod.DemoVideoSection })), {
  loading: () => <div className="min-h-[400px]" />,
})
const VendorNeutralSection = dynamic(() => import('@/components/vendor-neutral-section').then(mod => ({ default: mod.VendorNeutralSection })), {
  loading: () => <div className="min-h-[400px]" />,
})
const StateOfArtSection = dynamic(() => import('@/components/state-of-art-section').then(mod => ({ default: mod.StateOfArtSection })), {
  loading: () => <div className="min-h-[400px]" />,
})
const FinalCTA = dynamic(() => import('@/components/final-cta').then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="min-h-[200px]" />,
})
const Footer = dynamic(() => import('@/components/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="min-h-[300px]" />,
})

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <SoftwareApplicationSchema />
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <FeaturesOverviewSection />
        <TargetAudienceSection />
        <DemoVideoSection />
        <VendorNeutralSection />
        <StateOfArtSection />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}
