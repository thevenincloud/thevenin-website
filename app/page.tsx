import dynamic from 'next/dynamic'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesOverviewSection } from '@/components/features-overview-section'

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
  )
}
