import { Button } from '@/components/ui/button'
import { Code, Rocket, Building2, Check, Cloud, Server, ArrowRight } from 'lucide-react'

export default function TiersSection() {
  const tiers = [
    {
      icon: Code,
      name: 'Dev',
      tagline: 'Build & Showcase',
      description: 'Ideal for companies in need of a platform where to develop their products and showcase to their investor.',
      highlight: 'Speed up development with the best price.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      hoverBorder: 'hover:border-blue-500/50',
    },
    {
      icon: Rocket,
      name: 'Prod',
      tagline: 'Scale & Deliver',
      description: 'Ideal for companies in need of a robust, safe and scalable platform for their production services.',
      highlight: 'Deploy your services with a guaranteed service uptime.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/50',
      featured: true,
    },
    {
      icon: Building2,
      name: 'Enterprise',
      tagline: 'Customize & Integrate',
      description: 'Ideal for large enterprises looking to develop new projects.',
      highlight: 'Integrate our state of the art solutions customized for your existing infrastructure and business needs.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      hoverBorder: 'hover:border-purple-500/50',
    },
  ]

  return (
    <section id="tiers" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Pre-header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Leave the management of operations and infrastructure to us so you can focus on your application.
          </p>
        </div>

        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl">
            Our Differentiated{' '}
            <span className="text-primary">Tiers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We have a solution for every type of project and company.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`group relative rounded-xl border ${tier.borderColor} ${tier.hoverBorder} bg-card p-8 transition-all hover:shadow-lg ${
                tier.featured ? 'scale-105 shadow-md shadow-primary/10' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                  Popular Choice
                </div>
              )}

              {/* Icon */}
              <div className={`mb-4 inline-flex rounded-lg ${tier.bgColor} p-3`}>
                <tier.icon className={`h-7 w-7 ${tier.color}`} />
              </div>

              {/* Tier Name & Tagline */}
              <h3 className="mb-2 text-2xl font-bold">{tier.name}</h3>
              <p className={`mb-4 text-sm font-medium ${tier.color}`}>
                {tier.tagline}
              </p>

              {/* Description */}
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              {/* Highlight */}
              <div className="mb-6 rounded-lg bg-muted/50 p-4">
                <p className="text-sm font-medium text-foreground">
                  {tier.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BYOC Section */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-border/50 bg-card/50 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                BYOC and Cloud Solutions{' '}
                <span className="text-primary">for all Tiers</span>
              </h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Thevenin is a Portable and Vendor Neutral Solution.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                You can either use our cloud solution or deploy it in your own Cloud or On-Premises avoiding vendor lock-in.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4">
                <Cloud className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <h4 className="mb-1 font-semibold">Thevenin Cloud</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimized and managed by us
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4">
                <Server className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                <div>
                  <h4 className="mb-1 font-semibold">Your Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">
                    Deploy on your Cloud or On-Premises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
            asChild
          >
            <a href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
