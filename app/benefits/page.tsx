import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { 
  Zap, 
  Shield, 
  Cloud, 
  Layers, 
  TrendingDown, 
  DollarSign,
  Lock,
  Network,
  Key,
  Fingerprint,
  Server,
  Boxes,
  ArrowRight,
  Check
} from 'lucide-react'
import { BreadcrumbSchema } from '@/components/structured-data'

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
      gradient: 'from-yellow-500/20 via-orange-500/10 to-transparent',
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-500/10',
      features: [
        'Zero DevOps knowledge required',
        'Automated setup and maintenance',
        'Instant deployment pipelines',
        'Self-healing infrastructure'
      ]
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Designed with strong isolation and compliance in mind.',
      details: 'MFA is mandatory for all users. Environments are network isolated with eBPF. Containers are sandboxed in gVisor. Volumes are encrypted with KMS, Secrets with age keys and Endpoints with TLS. mTLS is available in Prod Tier.',
      gradient: 'from-primary/20 via-green-500/10 to-transparent',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
      features: [
        'Mandatory MFA authentication',
        'Network isolation with eBPF',
        'Container sandboxing with gVisor',
        'End-to-end encryption (KMS, age, TLS)',
        'mTLS support in Production tier'
      ]
    },
    {
      icon: Cloud,
      title: 'Portable and Vendor Neutral',
      description: 'Thevenin is designed to run anywhere.',
      details: 'Avoid vendor-lock-in by deploying apps to different hyperscalers in our cloud solution or by using your own cloud with Bring Your Own Cloud (BYOC) to integrate your existing services.',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      features: [
        'Multi-cloud deployment options',
        'No vendor lock-in',
        'BYOC (Bring Your Own Cloud)',
        'Seamless cloud migration',
        'Integrate with existing services'
      ]
    },
    {
      icon: Layers,
      title: 'Built for Modern Architectures',
      description: 'Built from the ground up for multi-tiered systems.',
      details: 'Offering flexibility, modular deployment, and consistent performance at any scale.',
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
      features: [
        'Multi-tiered architecture support',
        'Microservices-ready platform',
        'Modular deployment patterns',
        'Consistent performance at scale',
        'Service mesh integration'
      ]
    },
    {
      icon: TrendingDown,
      title: 'Efficient Resource Usage',
      description: 'Designed to adjust to each microservice\'s resource requirements.',
      details: 'No matter how small they are, making it into an extremely efficient platform for architectures with many services.',
      gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
      features: [
        'Dynamic resource allocation',
        'Optimized for microservices',
        'Minimal resource overhead',
        'Efficient scaling mechanisms',
        'Resource usage analytics'
      ]
    },
    {
      icon: DollarSign,
      title: 'Predictable, Fair Billing',
      description: 'Pay only for what you use: CPU, RAM, storage, and bandwidth.',
      details: 'Thevenin\'s transparent billing and resource quotas help control costs and prevent overuse in development environments.',
      gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-500/10',
      features: [
        'Usage-based pricing',
        'Transparent cost breakdown',
        'Resource quotas & limits',
        'Development environment controls',
        'No hidden fees'
      ]
    },
  ]

  const securityFeatures = [
    { icon: Lock, text: 'Mandatory MFA' },
    { icon: Network, text: 'eBPF Network Isolation' },
    { icon: Boxes, text: 'gVisor Container Sandboxing' },
    { icon: Key, text: 'KMS Volume Encryption' },
    { icon: Fingerprint, text: 'Age-encrypted Secrets' },
    { icon: Server, text: 'TLS Endpoints' },
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
              <Zap className="h-4 w-4" />
              Key Advantages
            </div>
            
            <h1 className="mb-6 font-krona text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
              The Key Advantages of Thevenin for{' '}
              <span className="text-primary">Modern Software Teams</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Discover how Thevenin redefines PaaS by simplifying infrastructure with security and reliability in mind.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                asChild
              >
                <a href="https://apps.thevenin.io/login">
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base font-medium px-8"
                asChild
              >
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
                    <div className={`mb-6 inline-flex rounded-lg ${benefit.iconBg} p-3`}>
                      <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
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
                          <Check className={`h-5 w-5 shrink-0 ${benefit.iconColor} mt-0.5`} />
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
                  <feature.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground">{feature.text}</h3>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
              <Shield className="mx-auto h-12 w-12 text-primary mb-4" />
              <h3 className="mb-2 text-xl font-bold">Production-Ready mTLS</h3>
              <p className="text-muted-foreground">
                Mutual TLS authentication available in Production tier for service-to-service communication.
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
              <Button 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                asChild
              >
                <a href="https://apps.thevenin.io/login">
                  Try Thevenin Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base font-medium px-8"
                asChild
              >
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
