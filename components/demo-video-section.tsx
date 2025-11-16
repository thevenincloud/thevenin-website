import { Play } from 'lucide-react'

export function DemoVideoSection() {
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-background py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="font-heading text-4xl font-bold leading-tight text-balance lg:text-5xl">
              See Thevenin in Action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Watch how you can deploy and scale your infrastructure in seconds
            </p>
          </div>

          {/* Video Container */}
          <div className="group relative aspect-video overflow-hidden rounded-lg border border-border/40 bg-muted/20 shadow-2xl shadow-primary/5 transition-all hover:border-border/60">
            {/* Placeholder for video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
                <button
                  className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-background/80 backdrop-blur-sm transition-all hover:scale-110 hover:bg-background"
                  aria-label="Play demo video"
                >
                  <Play className="ml-1 h-8 w-8 fill-primary text-primary" />
                </button>
              </div>
            </div>

            {/* Video thumbnail */}
            <img
              src="/modern-cloud-infrastructure-dashboard-with-graphs-.jpg"
              alt="Thevenin Platform Demo"
              className="h-full w-full object-cover opacity-40 transition-opacity group-hover:opacity-60"
            />
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl font-bold text-primary">
                &lt;30s
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Average Deploy Time
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-primary">
                99.9%
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Uptime SLA
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold text-primary">
                24/7
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
