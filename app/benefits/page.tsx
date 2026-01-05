import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { PremiumIcon, PremiumIconBadge } from '@/components/premium-icon'
import {
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  DollarSign,
  Fingerprint,
  Key,
  Layers,
  Lock,
  Network,
  Server,
  Shield,
  TrendingDown,
  Zap
} from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benefits - Why Choose Thevenin Platform',
  description: 'Discover the benefits of Thevenin: accelerate development, reduce costs, ensure security and compliance, and scale effortlessly with enterprise-grade infrastructure.',
  alternates: {
    canonical: 'https://thevenin.io/benefits',
  },
  openGraph: {
    title: 'Benefits - Why Choose Thevenin Platform',
    description: 'Accelerate development, reduce costs, ensure security and compliance with Thevenin.',
    url: 'https://thevenin.io/benefits',
  },
}

export default function BenefitsPage() {
  const mainBenefits = [
    {
      icon: Zap,
      title: 'Effortless Infrastructure',
      description: 'Deploy, scale, and manage applications without any DevOps or Cloud knowledge.',
      details: 'Thevenin automates the hardest parts of setup and maintenance so development teams can focus on what they do best: building great software.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      features: [
        'Zero DevOps knowledge required',
        'Automated setup and maintenance',
        'Instant application deployment',
        'Self-healing infrastructure'
      ]
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Designed with strong isolation and compliance in mind.',
      details: 'MFA is mandatory for all users. Environments are network isolated with eBPF. Containers are sandboxed in gVisor. Volumes are encrypted with KMS, Public Endpoints with TLS and Private Endpoints with mTLS. All Files, Variables and Configs are handled as Secrets',
      gradient: 'from-primary/10 via-transparent to-transparent',
      features: [
        'Mandatory MFA authentication',
        'Network isolation with eBPF',
        'Container sandboxing with gVisor',
        'KMS Data at rest encryption',
        'TLS and mTLS Data in-transit encryption',
        'Configs as Secrets by default'
      ]
    },
    {
      icon: Cloud,
      title: 'Portable and Vendor Neutral',
      description: 'Thevenin is designed to run anywhere.',
      details: 'Avoid vendor-lock-in by using Thevenin in your own Cloud Infrastructure. Keep control of your data and applications.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      features: [
        'Use in your internal network or VPN',
        'No vendor lock-in',
        'Seamless cloud migration',
        'Integrate with existing services'
      ]
    },
    {
      icon: Layers,
      title: 'Built for Modern Architectures',
      description: 'Built from the ground up for multi-tiered systems.',
      details: 'Offering flexibility, modular deployment, and consistent performance at any scale.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      features: [
        'Multi-tiered architecture support',
        'Low latency between services',
        'Consistent performance at scale',
        'Efficient Resource Allocation'
      ]
    },
    {
      icon: TrendingDown,
      title: 'Efficient Resource Usage',
      description: 'Designed to adjust to each microservice\'s resource requirements.',
      details: 'No matter how small they are, making it into an extremely efficient platform for architectures with many services.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      features: [
        'Lower Cloud Costs',
        'Dynamic resource allocation',
        'Efficient scaling mechanisms',
        'Resource usage analytics'
      ]
    },
    {
      icon: DollarSign,
      title: 'Predictable, Fair Billing',
      description: 'Pay only for the vCPU your apps use. Set monthly limits to what you will pay for Thevenin and your Cloud.',
      details: 'Thevenin\'s transparent billing and resource quotas help control costs and prevent overuse in development environments.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      features: [
        'Keep on budget with monthly limits',
        'Simple Usage-based pricing',
        'Resource quotas & limits',
        'No hidden fees'
      ]
    },
  ]

  const securityFeatures = [
    { icon: Lock, text: 'Mandatory MFA' },
    { icon: Network, text: 'eBPF Network Isolation' },
    { icon: Boxes, text: 'gVisor Container Sandboxing' },
    { icon: Key, text: 'KMS Volume Encryption' },
    { icon: Fingerprint, text: 'Secrets by Default' },
    { icon: Server, text: 'TLS and mTLS Endpoints' },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <PremiumIcon icon={Zap} size="xs" className="text-inherit" />
              Key Advantages
            </div>
            
            <h1 className="mb-6 font-krona text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
              The Key Advantages of Thevenin for{' '}
              <span className="text-primary">Modern Software Teams</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Discover how Thevenin redefines PaaS to make it safe and compliant.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="cta" size="lg" asChild>
                <a href="https://apps.thevenin.io/login">
                  Start Building
                  <PremiumIcon
                    icon={ArrowRight}
                    size="xs"
                    className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
                  />
                </a>
              </Button>
              <Button variant="ctaSecondary" size="lg" asChild>
                <a href="/contact">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:gap-12">
              {mainBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card/50 p-8 md:p-10 transition-all hover:border-border/60 hover:shadow-lg"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${benefit.gradient} opacity-30`} />
                  
                  <div className="relative">
                    <div className="mb-6">
                      <PremiumIconBadge
                        icon={benefit.icon}
                        className="group-hover:border-primary/30 group-hover:bg-primary/10"
                        iconClassName="group-hover:text-primary"
                      />
                    </div>
                    
                    <h2 className="mb-4 font-krona text-2xl tracking-tight md:text-3xl">
                      {benefit.title}
                    </h2>
                    
                    <p className="mb-4 text-lg leading-relaxed text-foreground">
                      {benefit.description}
                    </p>
                    
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {benefit.details}
                    </p>

                    {/* Features List */}
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {benefit.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <PremiumIcon icon={Check} size="sm" tone="primary" className="mt-0.5" />
                          <span className="text-sm text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="mb-6 font-krona text-3xl tracking-tight md:text-5xl">
                Enterprise-Grade{' '}
                <span className="text-primary">Security Stack</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Multiple layers of security protection, enabled by default for all deployments.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {securityFeatures.map((feature, index) => (
                <div
                  key={feature.text}
                  className="group relative rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <PremiumIcon icon={feature.icon} size="lg" tone="primary" className="mb-3" />
                  <h3 className="font-semibold text-foreground">{feature.text}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <PremiumIcon icon={Shield} size={48} tone="primary" className="mx-auto mb-4" />
              <h3 className="mb-2 text-xl font-bold">Zero Trust Security</h3>
              <p className="text-muted-foreground">
                Thevenin ensures that every access request is thoroughly verified and encrypted, regardless of its origin, minimizing potential attack surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl">
              Ready to Experience{' '}
              <span className="text-primary">These Benefits?</span>
            </h2>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="cta" size="lg" asChild>
                <a href="https://apps.thevenin.io/login">
                  Try Thevenin Demo
                  <PremiumIcon
                    icon={ArrowRight}
                    size="xs"
                    className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
                  />
                </a>
              </Button>
              <Button variant="ctaSecondary" size="lg" asChild>
                <a href="https://docs.thevenin.io" target="_blank" rel="noopener noreferrer">
                  Read Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
