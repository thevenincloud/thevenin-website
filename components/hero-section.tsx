import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import { TheveninAnimation } from '@/components/thevenin-animation'
import { AnimatedHeroTitle } from '@/components/animated-hero-title'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Thévenin Circuit Animation - Full background */}
      {/* <TheveninAnimation /> */}

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Title */}
          <AnimatedHeroTitle />
          
          {/* Subtitle with emphasis */}
          <p className="mx-auto mb-8 max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground">
            Get the power of an Enterprise grade platform without the engineering overhead.
          </p>

          <p className="mx-auto mb-12 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground/80">
            Thevenin's platform makes applications deployments effortless and scalable; while enforcing the governance, security and reliability standards of enterprise companies.
          </p>

          <p className="mx-auto mb-12 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground/80">
            Use the platform in our cloud or deploy it in your own, you are in control.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              asChild
            >
              <a href="https://apps.thevenin.io/login">
                Join the Beta
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="border-primary/50 text-foreground hover:bg-primary/10 text-base font-medium px-8"
              asChild
            >
              <a href="https://docs.thevenin.io" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                View Docs
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of viewport */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  )
}
