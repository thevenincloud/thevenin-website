import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SocialProof } from '@/components/social-proof'
import { FeaturesSection } from '@/components/features-section'
import { BenefitsSection } from '@/components/benefits-section'
import { DemoVideoSection } from '@/components/demo-video-section'
import { VendorNeutralSection } from '@/components/vendor-neutral-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <FeaturesSection />
      <BenefitsSection />
      <DemoVideoSection />
      <VendorNeutralSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
