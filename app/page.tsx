import ServicesSection from "../components/services-section";
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { SocialProof } from '@/components/social-proof'
import { FeaturesOverviewSection } from '@/components/features-overview-section'
import { TargetAudienceSection } from '@/components/target-audience-section'
import { FeaturesSection } from '@/components/features-section'
import { BenefitsSection } from '@/components/benefits-section'
import { DemoVideoSection } from '@/components/demo-video-section'
import { VendorNeutralSection } from '@/components/vendor-neutral-section'
import { StateOfArtSection } from '@/components/state-of-art-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesOverviewSection />
      <TargetAudienceSection />
      {/* <SocialProof /> */}
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      {/* <BenefitsSection /> */}
      <DemoVideoSection />
      <VendorNeutralSection />
      <StateOfArtSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
