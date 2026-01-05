import { Rocket, Shield, RefreshCw } from 'lucide-react'
import { PremiumIconBadge } from '@/components/premium-icon'

export function FeaturesSection() {
  const features = [
    {
      icon: Rocket,
      title: 'Simple Deployment',
      description: 'Deploy containerized apps (Docker) in seconds. Easily connect volumes, variables, and files.',
    },
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Completely isolated environments. Data encrypted at rest and in transit.',
    },
    {
      icon: RefreshCw,
      title: 'Lifecycle Management',
      description: 'Manage your app\'s entire lifecycle, including updates and rollbacks, from a single interface.',
    },
  ]

  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-krona text-3xl tracking-tight text-balance md:text-5xl">
            Effortless Infrastructure.{' '}
            <span className="text-primary">Security by Default.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-4">
                <PremiumIconBadge
                  icon={feature.icon}
                  className="group-hover:border-primary/30 group-hover:bg-primary/10"
                  iconClassName="group-hover:text-primary"
                />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
