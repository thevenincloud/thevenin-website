import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import { TheveninAnimation } from '@/components/thevenin-animation'
import { AnimatedHeroTitle } from '@/components/animated-hero-title'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        
        {/* Thévenin Animation - Subtle background effect */}
        <TheveninAnimation />
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedHeroTitle />
          
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Get the power of an enterprise-grade platform without the engineering overhead. 
            Thevenin makes app deployment scalable, secure, and effortless.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8"
            >
              <a href="https://apps.thevenin.io/login">Join the Beta</a>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="border-border/50 text-base font-medium px-8"
            >
              <FileText className="mr-2 h-4 w-4" />
              <a href="https://docs.thevenin.io" target="_blank" rel="noopener noreferrer">View Docs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
