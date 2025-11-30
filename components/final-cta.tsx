import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-krona text-4xl tracking-tight text-balance md:text-5xl">
            Start building today.
          </h2>
          <p className="mb-10 text-lg text-muted-foreground">
            Join developers who are already shipping faster with Thevenin.
          </p>
          <Button 
            size="lg" 
            className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-10 py-6 text-lg"
          >
            Try Thevenin Demo
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
