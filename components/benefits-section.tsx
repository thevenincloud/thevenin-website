import Image from 'next/image'

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-card/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-4xl">
              Focus on your code.{' '}
              <span className="text-primary">Not on infrastructure.</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Thevenin automates the hardest parts of configuration and maintenance (scaling, logging, monitoring) 
              so your team can focus on building incredible software.
            </p>
            <ul className="space-y-4">
              {[
                'Auto-scaling based on traffic patterns',
                'Built-in monitoring and logging',
                'One-click rollbacks and deployments',
                'Real-time performance insights',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/40" />
                <div className="h-3 w-3 rounded-full bg-primary/60" />
              </div>
              <pre className="overflow-x-auto text-sm leading-relaxed">
                <code className="text-muted-foreground">
{`$ thevenin deploy

✓ Building application...
✓ Running tests...
✓ Deploying to production...
✓ Running health checks...

🚀 Deployed successfully!
   https://app.thevenin.io

   Build time: 2m 34s
   Status: Healthy`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
