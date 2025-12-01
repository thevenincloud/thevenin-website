import { AnimatedHeroTitle } from '@/components/animated-hero-title'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-grid" />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-5xl text-center space-y-8 py-12 md:py-16">
          {/* Main Title */}
          <AnimatedHeroTitle />
          
          {/* Subtitle with emphasis */}
          <p className="mx-auto max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-muted-foreground font-medium">
            Get the power of an Enterprise grade platform without the engineering overhead
          </p>

          {/* Supporting text with better hierarchy */}
          <div className="space-y-4">
            <p className="mx-auto max-w-2xl text-body-large">
              Thevenin’s platform makes applications deployments effortless and scalable; while enforcing the governance, security and data sovereignty standards for enterprises
            </p>

            <p className="mx-auto max-w-2xl text-body">
              Deploy the platform in your own cloud, you are in control
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-4">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground text-base font-semibold px-8 py-6 shadow-lg shadow-primary/25 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="https://apps.thevenin.io/login">
                Try Thevenin Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="border-2 border-border hover:border-primary/50 text-foreground hover:bg-muted/50 text-base font-semibold px-8 py-6 transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="https://docsend.com/view/ypqcc6ymzq8c84ss" target="_blank" rel="noopener noreferrer">
                View Sales Deck
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of viewport */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2 transition-colors hover:border-primary/60">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
