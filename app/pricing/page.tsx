'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Cloud, Server, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PremiumIcon } from '@/components/premium-icon'

export default function PricingPage() {
  const tiers = [
    {
      name: 'Dev',
      description: 'Ideal for companies in need of a platform where to develop their products and showcase to their stakeholders.',
      tagline: 'Speed up development',
      pricing: 'From €25',
      pricingUnit: 'per vCPU/node',
      pricingDetail: 'used by your apps in each monthly billing cycle.',
      titleColor: 'text-foreground',
      bgGradient: 'from-muted/40 to-transparent',
      borderColor: 'border-border/60',
      hoverBorder: 'hover:border-primary/30',
      checkTone: 'muted',
      features: [
        'Deploy Experimental Applications',
        'Security Guarantees',
        'Community Support',
        'Onboarding Support',
      ],
      popular: false,
    },
    {
      name: 'Prod',
      description: 'Ideal for companies in need of a robust, safe and scalable platform for their production services.',
      tagline: 'Production-ready excellence',
      pricing: 'From €60',
      pricingUnit: 'per vCPU/node',
      pricingDetail: 'used by your apps in each monthly billing cycle.',
      titleColor: 'text-primary',
      bgGradient: 'from-primary/10 to-transparent',
      borderColor: 'border-primary/30',
      hoverBorder: 'hover:border-primary/60',
      checkTone: 'primary',
      features: [
        'Guaranteed Uptime SLA',
        'Priority Support',
        'Disaster Recovery',
        'Compliance Support'
      ],
      popular: false,
    },
    {
      name: 'Enterprise',
      description: 'Ideal for large enterprises looking to have their brand on their Thevenin Solution and integrated with their current deployments.',
      tagline: 'Custom solutions at scale',
      pricing: 'Custom',
      pricingUnit: 'Pricing',
      pricingDetail: 'Tailored to your business needs',
      titleColor: 'text-foreground',
      bgGradient: 'from-muted/40 to-transparent',
      borderColor: 'border-border/60',
      hoverBorder: 'hover:border-primary/30',
      checkTone: 'muted',
      features: [
        'White-label solution',
        'Dedicated Support Team',
        'Custom Services and Integrations',
        'Personalized Training and Onboarding',
      ],
      popular: false,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <PremiumIcon icon={Zap} size="xs" className="text-primary" />
                <span className="text-sm font-medium text-primary">Simple, transparent pricing</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 pb-2 bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Pricing & Tiers
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect plan for your needs. Scale as you grow with no hidden fees.
              </p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div
                    className={`
                      relative h-full overflow-hidden rounded-3xl border-2 transition-all duration-300
                      ${tier.borderColor} ${tier.hoverBorder}
                      hover:shadow-xl
                      bg-card
                    `}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-linear-to-br ${tier.bgGradient} opacity-50`} />

                    {/* Content */}
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className={`text-3xl font-bold mb-2 ${tier.titleColor}`}>
                          {tier.name}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground">
                          {tier.tagline}
                        </p>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6 pb-6 border-b border-border/50">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-4xl font-bold">{tier.pricing}</span>
                          <span className="text-muted-foreground">{tier.pricingUnit}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {tier.pricingDetail}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="mb-6 text-muted-foreground leading-relaxed min-h-20">
                        {tier.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <PremiumIcon
                              icon={Check}
                              size="sm"
                              tone={tier.checkTone}
                              className="mt-0.5"
                            />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* We should all supported Providers here */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12"
            >
              <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Available Cloud Marketplaces{' '}
                    <span className="text-primary">for all Tiers</span>
                  </h3>
                  <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                    Thevenin is a <span className="font-semibold text-foreground">Portable and Vendor Neutral</span> Solution.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    You can either use our cloud solution or deploy it in your own Cloud or On-Premises, avoiding vendor lock-in completely.
                  </p>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 rounded-2xl border-2 border-primary/20 hover:border-primary/40 bg-card p-6 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Cloud className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Thevenin Cloud</h4>
                      <p className="text-sm text-muted-foreground">
                        Fully managed, optimized, and maintained by our team
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 rounded-2xl border-2 border-primary/20 hover:border-primary/40 bg-card p-6 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Your Infrastructure</h4>
                      <p className="text-sm text-muted-foreground">
                        Deploy on your preferred Cloud provider or On-Premises
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div> */}

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-lg text-muted-foreground mb-6">
                Need help choosing the right plan?
              </p>
              <Button
                variant="cta"
                size="lg"
                asChild
              >
                <a href="/contact">
                  Contact Us
                  <PremiumIcon
                    icon={ArrowRight}
                    size="xs"
                    className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
