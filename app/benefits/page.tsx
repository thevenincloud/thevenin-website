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
  Globe,
  Boxes,
  Gauge,
  ArrowRight,
  Check
} from 'lucide-react'

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
          <div className="grid gap-12 lg:gap-16">
            {mainBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group relative ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
                  {/* Content Side */}
                  <div className={index % 2 === 1 ? 'lg:text-right' : ''}>
                    <div className={`mb-4 inline-flex rounded-lg ${benefit.iconBg} p-3`}>
                      <benefit.icon className={`h-8 w-8 ${benefit.iconColor}`} />
                    </div>
                    
                    <h2 className="mb-4 font-krona text-3xl tracking-tight md:text-4xl">
                      {benefit.title}
                    </h2>
                    
                    <p className="mb-4 text-lg leading-relaxed text-foreground">
                      {benefit.description}
                    </p>
                    
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {benefit.details}
                    </p>

                    {/* Features List */}
                    <ul className={`space-y-3 ${index % 2 === 1 ? 'lg:flex lg:flex-col lg:items-end' : ''}`}>
                      {benefit.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          {index % 2 === 1 && (
                            <span className="text-foreground/90 lg:order-1">{feature}</span>
                          )}
                          <Check className={`h-5 w-5 shrink-0 ${benefit.iconColor} mt-0.5 ${index % 2 === 1 ? 'lg:order-2' : ''}`} />
                          {index % 2 === 0 && (
                            <span className="text-foreground/90">{feature}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Side */}
                  <div className="relative">
                    <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${benefit.gradient} blur-3xl opacity-50`} />
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 shadow-xl">
                      {/* Effortless Infrastructure */}
                      {benefit.title === 'Effortless Infrastructure' && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span>$ thevenin deploy</span>
                          </div>
                          
                          <div className="space-y-2 font-mono text-xs">
                            <div className="flex items-center gap-2 text-green-500">
                              <Check className="h-3 w-3" />
                              <span>✓ Docker image built</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-500">
                              <Check className="h-3 w-3" />
                              <span>✓ Resources allocated</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-500">
                              <Check className="h-3 w-3" />
                              <span>✓ Load balancer configured</span>
                            </div>
                            <div className="flex items-center gap-2 text-green-500">
                              <Check className="h-3 w-3" />
                              <span>✓ Health checks passing</span>
                            </div>
                            <div className="flex items-center gap-2 text-yellow-500 animate-pulse">
                              <Zap className="h-3 w-3" />
                              <span>→ Deploying to production...</span>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border/30">
                            <div className="text-xs font-mono text-muted-foreground">
                              <div className="text-green-500 mb-1">🚀 Live at: https://app.thevenin.io</div>
                              <div>Deploy time: 42s</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Secure by Default */}
                      {benefit.title === 'Secure by Default' && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 text-green-500" />
                            <span>Security Status</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Fingerprint className="h-4 w-4 text-green-500" />
                                  <span className="text-sm font-medium">MFA Enabled</span>
                                </div>
                                <Check className="h-4 w-4 text-green-500" />
                              </div>
                              <div className="text-xs text-muted-foreground">All users authenticated</div>
                            </div>

                            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Network className="h-4 w-4 text-green-500" />
                                  <span className="text-sm font-medium">eBPF Isolation</span>
                                </div>
                                <Check className="h-4 w-4 text-green-500" />
                              </div>
                              <div className="text-xs text-muted-foreground">Network policies active</div>
                            </div>

                            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Lock className="h-4 w-4 text-green-500" />
                                  <span className="text-sm font-medium">Encryption</span>
                                </div>
                                <Check className="h-4 w-4 text-green-500" />
                              </div>
                              <div className="text-xs text-muted-foreground">Data encrypted at rest & transit</div>
                            </div>
                          </div>

                          <div className="pt-4 border-t border-border/30 text-center">
                            <div className="text-xs text-green-500 font-semibold">100% Compliant</div>
                          </div>
                        </div>
                      )}

                      {/* Portable and Vendor Neutral */}
                      {benefit.title === 'Portable and Vendor Neutral' && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Globe className="h-4 w-4 text-blue-500" />
                            <span>Multi-Cloud Deployment</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Cloud className="h-4 w-4 text-blue-500" />
                                    <span className="text-sm font-medium">Thevenin Cloud</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">app-prod-01</div>
                                </div>
                                <div className="text-green-500 text-xs font-semibold">Active</div>
                              </div>
                            </div>

                            <div className="rounded-lg border border-border/30 bg-muted/10 p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Server className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm font-medium">AWS (BYOC)</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">app-staging-02</div>
                                </div>
                                <div className="text-muted-foreground text-xs">Ready</div>
                              </div>
                            </div>

                            <div className="rounded-lg border border-border/30 bg-muted/10 p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Server className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm font-medium">GCP (BYOC)</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">app-dev-03</div>
                                </div>
                                <div className="text-muted-foreground text-xs">Ready</div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-2 text-center text-xs text-muted-foreground">
                            Switch providers anytime • No lock-in
                          </div>
                        </div>
                      )}

                      {/* Built for Modern Architectures */}
                      {benefit.title === 'Built for Modern Architectures' && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Layers className="h-4 w-4 text-purple-500" />
                            <span>Microservices Architecture</span>
                          </div>
                          
                          <div className="space-y-3">
                            {[
                              { name: 'API Gateway', instances: 3, cpu: '85%', status: 'healthy' },
                              { name: 'Auth Service', instances: 2, cpu: '45%', status: 'healthy' },
                              { name: 'User Service', instances: 4, cpu: '72%', status: 'healthy' },
                              { name: 'Payment Service', instances: 2, cpu: '38%', status: 'healthy' },
                            ].map((service, i) => (
                              <div key={service.name} className="rounded-lg border border-border/30 bg-muted/10 p-3">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                    <span className="text-sm font-medium">{service.name}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground">{service.instances}x</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex-1 h-1.5 rounded-full bg-muted-foreground/20">
                                    <div 
                                      className="h-full rounded-full bg-purple-500"
                                      style={{ width: service.cpu }}
                                    />
                                  </div>
                                  <span className="text-xs text-muted-foreground w-10">{service.cpu}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="pt-2 border-t border-border/30 text-center text-xs text-muted-foreground">
                            Auto-scaling • Load balanced • Service mesh ready
                          </div>
                        </div>
                      )}

                      {/* Efficient Resource Usage */}
                      {benefit.title === 'Efficient Resource Usage' && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <Gauge className="h-4 w-4 text-green-500" />
                            <span>Resource Optimization</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="rounded-lg border border-border/30 bg-muted/10 p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium">CPU Usage</span>
                                <span className="text-xs text-green-500">-45% vs traditional</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted-foreground/20">
                                <div className="h-full rounded-full bg-green-500" style={{ width: '55%' }} />
                              </div>
                              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                <span>0.5 cores</span>
                                <span>of 2 cores</span>
                              </div>
                            </div>

                            <div className="rounded-lg border border-border/30 bg-muted/10 p-3">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium">Memory</span>
                                <span className="text-xs text-green-500">-38% vs traditional</span>
                              </div>
                              <div className="h-2 rounded-full bg-muted-foreground/20">
                                <div className="h-full rounded-full bg-green-500" style={{ width: '62%' }} />
                              </div>
                              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                <span>248 MB</span>
                                <span>of 512 MB</span>
                              </div>
                            </div>

                            <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-3">
                              <div className="text-xs font-medium mb-1">Cost Savings</div>
                              <div className="text-2xl font-bold text-green-500">$847<span className="text-sm text-muted-foreground">/month</span></div>
                              <div className="text-xs text-muted-foreground mt-1">Compared to over-provisioned setup</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Predictable, Fair Billing */}
                      {benefit.title === 'Predictable, Fair Billing' && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                            <DollarSign className="h-4 w-4 text-indigo-500" />
                            <span>This Month&apos;s Usage</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="rounded-lg border border-border/30 bg-muted/10 p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium">CPU Hours</span>
                                <span className="text-sm font-semibold">$42.50</span>
                              </div>
                              <div className="text-xs text-muted-foreground">1,250 core-hours @ $0.034/hr</div>
                            </div>

                            <div className="rounded-lg border border-border/30 bg-muted/10 p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium">Memory</span>
                                <span className="text-sm font-semibold">$28.80</span>
                              </div>
                              <div className="text-xs text-muted-foreground">720 GB-hours @ $0.04/GB</div>
                            </div>

                            <div className="rounded-lg border border-border/30 bg-muted/10 p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium">Storage</span>
                                <span className="text-sm font-semibold">$15.00</span>
                              </div>
                              <div className="text-xs text-muted-foreground">50 GB @ $0.30/GB</div>
                            </div>

                            <div className="rounded-lg border border-border/30 bg-muted/10 p-3">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-medium">Bandwidth</span>
                                <span className="text-sm font-semibold">$8.70</span>
                              </div>
                              <div className="text-xs text-muted-foreground">87 GB @ $0.10/GB</div>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-border/30">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold">Total</span>
                              <span className="text-2xl font-bold text-indigo-500">$95.00</span>
                            </div>
                            <div className="text-xs text-muted-foreground text-center mt-2">
                              No surprises • Pay per use • Cancel anytime
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Join hundreds of teams already deploying faster and more securely with Thevenin.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                asChild
              >
                <a href="https://apps.thevenin.io/login">
                  Join the Beta
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
