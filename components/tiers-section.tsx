import { Button } from '@/components/ui/button'
import { ArrowRight, Cloud, Server } from 'lucide-react'

export default function TiersSection() {
  const tiers = [
    {
      name: 'Dev',
      description: 'Ideal for companies in need of a platform where to develop their products and showcase to their stakeholders. Speed up development with the best price.',
      pricing: 'From €25 per vCPU/node',
      pricingDetail: 'used by your apps in each monthly billing cycle.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/50',
      ctaText: 'Get Started',
      ctaLink: 'https://apps.thevenin.io/signup',
    },
    {
      name: 'Prod',
      description: 'Ideal for companies in need of a robust, safe and scalable platform for their production services. Deploy your services with a guaranteed service uptime.',
      pricing: 'From €60 per vCPU/node',
      pricingDetail: 'used by your apps in each monthly billing cycle.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/50',
      featured: true,
      ctaText: 'Get Started',
      ctaLink: 'https://apps.thevenin.io/signup',
    },
    {
      name: 'Enterprise',
      description: 'Ideal for large enterprises looking to have their brand on their Thevenin Solution and integrated with their current deployments. We offer dedicated support and custom services to help you fulfill all your business needs using the platform.',
      pricing: 'Contact Sales for Pricing',
      pricingDetail: '',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      hoverBorder: 'hover:border-primary/50',
      ctaText: 'Get Started',
      ctaLink: '/contact',
    },
  ]

  return (
    <section id="pricing" className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl lg:text-6xl">
            <span className="text-primary">Pricing</span> and Tiers
          </h2>
        </div>

        {/* Tier Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`group relative overflow-hidden rounded-3xl border-2 ${tier.borderColor} ${tier.hoverBorder} bg-card transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div className="p-8">
                {/* Tier Name */}
                <h3 className="mb-4 text-3xl font-bold text-primary">{tier.name}</h3>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-muted-foreground min-h-[120px]">
                  {tier.description}
                </p>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-border/50">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {tier.pricing}
                  </div>
                  {tier.pricingDetail && (
                    <div className="text-sm text-muted-foreground">
                      {tier.pricingDetail}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-6 rounded-xl group/btn"
                  asChild
                >
                  <a href={tier.ctaLink}>
                    {tier.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
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
