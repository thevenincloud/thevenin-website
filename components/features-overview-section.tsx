'use client'

import { Shield, Cloud, Workflow, ScrollText, DollarSign, Boxes } from 'lucide-react'
import { useState } from 'react'
import { SectionWrapper } from './section-wrapper'
import { SectionHeader } from './section-header'
import { PremiumIconBadge } from '@/components/premium-icon'

export function FeaturesOverviewSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Shield,
      title: 'Security & Compliance by Default',
      description: 'Isolation, encryption, MFA, gVisor, eBPF, secure secrets; everything built in.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      details: ['Multi-factor Authentication', 'Container Isolation (gVisor)', 'Network Security (eBPF)', 'Encrypted Secrets & Data']
    },
    {
      icon: Cloud,
      title: 'Portability & Vendor Neutrality',
      description: 'Run Thevenin in your own infrastructure, be it the Cloud or Onpremises.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      details: ['Data Sovereignty', 'No Vendor Lock-in', 'Easy Migration', 'Airgapped Version']
    },
    {
      icon: Workflow,
      title: 'Modern Automated Operations',
      description: 'Continuous reconciliation and zero manual orchestration.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      details: ['Kubernetes Operators', 'Auto-healing', 'Zero Downtime Deploys', 'Continuous Reconciliation']
    },
    {
      icon: Boxes,
      title: 'Flexible Architecture',
      description: 'Designed for modular, microservices-based software.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      details: ['Microservices Ready', 'Efficient Resource Allocation', 'Modular Deployment', 'Scale per Service']
    },
    {
      icon: ScrollText,
      title: 'Governance & Auditability',
      description: 'Clear history, access control and transparent resource limits and quotas.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      details: ['Version Control', 'RBAC Built-in', 'Audit Logs', 'Resource Quotas']
    },
    {
      icon: DollarSign,
      title: 'Predictable Usage & Billing',
      description: 'Pay only for the resources you use, with transparent billing and quotas that keep cloud costs under control.',
      gradient: 'from-primary/10 via-transparent to-transparent',
      details: ['Usage-based Pricing', 'No Hidden Fees', 'Cost Controls', 'Resource Quotas']
    },
  ]

  return (
    <SectionWrapper background="muted" id="features">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <SectionHeader
        badge="Platform Features"
        badgeIcon={Workflow}
        title="Features"
        description={
          <>
            Thevenin offers simplicity to empower your applications deployment and management without compromising security.
            <span className="block mt-2 text-base">
              Easily deploy containerized (Docker) applications. Attach volumes, variables, files if needed.
            </span>
          </>
        }
      />

      {/* Features Grid */}
      <div className="grid-responsive-3 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${
              hoveredIndex === index ? 'scale-[1.02]' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Animated gradient background */}
            <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Icon */}
              <div className="mb-6 transition-all duration-300 group-hover:scale-[1.03]">
                <PremiumIconBadge
                  icon={feature.icon}
                  className="group-hover:border-primary/30 group-hover:bg-primary/10"
                  iconClassName="group-hover:text-primary"
                />
              </div>
              
              {/* Title */}
              <h3 className="mb-3 text-xl md:text-2xl font-bold leading-tight">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="mb-6 text-sm md:text-base leading-relaxed text-muted-foreground">
                {feature.description}
              </p>

              {/* Feature Details */}
              <ul className="space-y-2.5 mt-auto">
                {feature.details.map((detail, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-2.5 text-sm text-foreground/80 transition-all duration-300"
                    style={{ 
                      transitionDelay: hoveredIndex === index ? `${i * 50}ms` : '0ms',
                      opacity: hoveredIndex === index ? 1 : 0.7
                    }}
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-primary/50" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-40 group-hover:scale-150" />
          </div>
        ))}
      </div>

      {/* Bottom CTA or Info */}
      <div className="mt-12 md:mt-16 text-center">
        <p className="text-base md:text-lg text-muted-foreground">
          All features included in every tier.{' '}
          <a href="/benefits" className="link-primary">
            Learn more about our benefits →
          </a>
        </p>
      </div>
    </SectionWrapper>
  )
}
