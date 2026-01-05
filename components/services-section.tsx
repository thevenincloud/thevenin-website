import { Button } from '@/components/ui/button'
import { Rocket, Settings, Shield, ArrowRight, Check } from 'lucide-react'
import { PremiumIconBadge, PremiumIcon } from '@/components/premium-icon'

export default function ServicesSection() {
  const services = [
    {
      icon: Rocket,
      title: 'App Deployments',
      description: 'Deploy your application ensuring high performance and scalability.',
      subtitle: 'Manage the entire life-cycle of your app with our platform, including upgrades and rollbacks.',
      features: [
        'Monitoring and Logging',
        'Public Endpoints/Custom Domains',
        'Resource Allocation for each App',
      ],
      gradient: 'from-primary/10 to-transparent',
    },
    {
      icon: Settings,
      title: 'Fine Grained Control',
      description: 'All resources have change history and version control.',
      subtitle: 'Check what has been changed and who changed it, enforce RBAC and Resource Quotas.',
      features: [
        'Role Based Access',
        'Governance and Audibility',
        'Predictable Billing',
      ],
      gradient: 'from-primary/10 to-transparent',
    },
    {
      icon: Shield,
      title: 'Zero Trust Security',
      description: 'Our platform is designed to be compliant with the latest security standards.',
      subtitle: 'Your environments are completely isolated, data is encrypted both at rest and transit.',
      features: [
        'Container and Network Isolation',
        'Data encryption at Rest and Transit',
        'Access Policies',
      ],
      gradient: 'from-primary/10 to-transparent',
    },
  ]

  return (
    <section id="services" className="relative py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl">
            Explore Thevenin's{' '}
            <span className="text-primary">Platform</span>
          </h2>
          <p className="mx-auto mb-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Thevenin offers simplicity to empower your applications deployment and management without compromising quality.
          </p>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/80">
            Easily deploy containerized (Docker) applications. Attach volumes, variables, files if needed.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border/60 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${service.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-4">
                  <PremiumIconBadge
                    icon={service.icon}
                    className="group-hover:border-primary/30 group-hover:bg-primary/10"
                    iconClassName="group-hover:text-primary"
                  />
                </div>
                
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground/80">
                  {service.subtitle}
                </p>

                {/* Features List */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <PremiumIcon icon={Check} size="xs" tone="primary" className="mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="secondary" 
                  className="w-full group-hover:border-primary/50 group-hover:bg-primary/5"
                  asChild
                >
                  <a href="https://apps.thevenin.io/login">
                    Try our Demo
                    <PremiumIcon
                      icon={ArrowRight}
                      size="xs"
                      className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
                    />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
