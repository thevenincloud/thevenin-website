import { Cloud, Lock, Zap } from 'lucide-react'

export function VendorNeutralSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl">
            You are in control.{' '}
            <span className="text-primary">No Vendor Lock-in.</span>
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Use our optimized cloud or deploy Thevenin on your own infrastructure (BYOC - Bring Your Own Cloud). 
            You are free to move.
          </p>

          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-lg border border-border/50 bg-card p-6">
              <Cloud className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-semibold">Flexible Hosting</h3>
              <p className="text-sm text-muted-foreground">
                Deploy on our cloud or yours
              </p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card p-6">
              <Lock className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-semibold">Data Sovereignty</h3>
              <p className="text-sm text-muted-foreground">
                Keep data in your region
              </p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card p-6">
              <Zap className="mx-auto mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 font-semibold">Easy Migration</h3>
              <p className="text-sm text-muted-foreground">
                Move anytime, no penalties
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
