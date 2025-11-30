'use client'

import { Shield, Cloud, Zap, GitBranch, DollarSign, Boxes } from 'lucide-react'
import { useState } from 'react'

export function FeaturesOverviewSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Shield,
      title: 'Security & Compliance by Default',
      description: 'Isolation, encryption, MFA, gVisor, eBPF, secure secrets; everything built in.',
      gradient: 'from-primary/20 via-green-500/10 to-transparent',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/10',
      borderColor: 'border-primary/30',
      details: ['Multi-factor Authentication', 'Container Isolation (gVisor)', 'Network Security (eBPF)', 'Encrypted Secrets & Data']
    },
    {
      icon: Cloud,
      title: 'Portability & Vendor Neutrality',
      description: 'Run Thevenin across clouds or in your own infrastructure (BYOC).',
      gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      details: ['Multi-cloud Support', 'BYOC Available', 'No Vendor Lock-in', 'Easy Migration']
    },
    {
      icon: Zap,
      title: 'Modern Automated Operations',
      description: 'Continuous reconciliation and zero manual orchestration.',
      gradient: 'from-yellow-500/20 via-orange-500/10 to-transparent',
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      details: ['Kubernetes Operators', 'Auto-healing', 'Zero Downtime Deploys', 'Continuous Reconciliation']
    },
    {
      icon: Boxes,
      title: 'Flexible Architecture',
      description: 'Designed for modular, microservices-based software.',
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      details: ['Microservices Ready', 'Service Mesh Compatible', 'Modular Deployment', 'Scale per Service']
    },
    {
      icon: GitBranch,
      title: 'Governance & Auditability',
      description: 'Clear history, access control and transparent resource limits and quotas.',
      gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      details: ['Version Control', 'RBAC Built-in', 'Audit Logs', 'Resource Quotas']
    },
    {
      icon: DollarSign,
      title: 'Predictable Usage & Billing',
      description: 'Pay only for the resources you use, with transparent billing and quotas that keep cloud costs under control.',
      gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      details: ['Usage-based Pricing', 'No Hidden Fees', 'Cost Controls', 'Resource Quotas']
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-card/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            Platform Features
          </div>
          
          <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl lg:text-6xl">
            Features
          </h2>
          
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Thevenin offers simplicity to empower your applications deployment and management without compromising security.
          </p>
          
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Easily deploy containerized (Docker) applications. Attach volumes, variables, files if needed.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-2xl border ${feature.borderColor} bg-card p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${
                hoveredIndex === index ? 'scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Animated gradient background */}
              <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 inline-flex rounded-xl ${feature.iconBg} p-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-tight">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>

                {/* Feature Details */}
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li 
                      key={i} 
                      className="flex items-center gap-2 text-sm text-foreground/80 transition-all duration-300"
                      style={{ 
                        transitionDelay: hoveredIndex === index ? `${i * 50}ms` : '0ms',
                        opacity: hoveredIndex === index ? 1 : 0.7
                      }}
                    >
                      <div className={`h-1.5 w-1.5 rounded-full ${feature.iconBg} ${feature.iconColor}`} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${feature.iconBg} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-40 group-hover:scale-150`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA or Info */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            All features included in every tier.{' '}
            <a href="/benefits" className="font-semibold text-primary hover:underline">
              Learn more about our benefits →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
