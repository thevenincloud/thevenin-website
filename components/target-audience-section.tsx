'use client'

import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { SectionHeader } from './section-header'
import { SectionWrapper } from './section-wrapper'

export function TargetAudienceSection() {
  const [_, setHoveredAudience] = useState<number | null>(null)

  const audiences = [
    {
      title: 'Scaleups',
      description: 'Teams growing fast, facing development bottlenecks and losing control as more developers join the project.',
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
    },
    {
      title: 'Enterprises',
      description: 'Organizations with large dev teams, multiple products, and the need for strict governance and platform reliability.',
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
    },
    {
      title: 'Compliance Driven Industries',
      description: 'Where security, traceability, and control are essential: Defense, Fintech, Healthtech, Insurance, GovTech...',
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
    },
  ]

  const regulations = [
    {
      name: 'DORA',
      logo: '/regulations/dora.png',
      description: 'Digital Operational Resilience Act'
    },
    {
      name: 'EHDS',
      logo: '/regulations/ehds.png',
      description: 'European Health Data Space'
    },
    {
      name: 'GDPR',
      logo: '/regulations/gdpr.png',
      description: 'General Data Protection Regulation'
    },
    {
      name: 'Interoperable Europe Act',
      logo: '/regulations/interperable.png',
      description: 'EU Interoperability Framework'
    },
    {
      name: 'EU Data Act',
      logo: '/regulations/data-act.png',
      description: 'European Data Governance'
    },
    {
      name: 'NIS2',
      logo: '/regulations/nis.png',
      description: 'Network and Information Security'
    },
  ]

  return (
    <SectionWrapper background="default" id="audience">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Header */}
      <SectionHeader
        title={
          <>
            Who We're <span className="text-primary">Built For</span>
          </>
        }
      />

      {/* Audience Cards */}
      <div className="mx-auto max-w-7xl mb-16 md:mb-20 lg:mb-24">
        <div className="grid-responsive-3">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              onMouseEnter={() => setHoveredAudience(index)}
              onMouseLeave={() => setHoveredAudience(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${audience.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-primary">
                  {audience.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -bottom-8 -right-8 h-32 w-32 rounded-full ${audience.iconBg} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-40 group-hover:scale-125`} />
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Section */}
      <div className="mx-auto max-w-7xl">
        {/* Compliance Header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <CheckCircle2 className="h-4 w-4" />
            Compliance Ready
          </div>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-muted-foreground">
            Thevenin is ideal if you need to comply with any of these European Regulations or guidelines:
          </p>
        </div>

        {/* Regulations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {regulations.map((regulation, index) => (
            <div
              key={regulation.name}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm p-4 md:p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col items-center justify-between min-h-40"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Logo/Icon */}
              <div className="mb-3 md:mb-4 flex items-center justify-center h-12 w-12 md:h-16 md:w-16 opacity-80 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={regulation.logo}
                  alt={regulation.name}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Name */}
              <h4 className="mb-2 text-xs md:text-sm font-bold leading-tight text-center px-1">
                {regulation.name}
              </h4>
              
              {/* Description */}
              <p className="text-[10px] md:text-xs text-muted-foreground leading-snug text-center px-1">
                {regulation.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            Built with enterprise security and compliance standards in mind from day one.{' '}
            <a href="/benefits" className="link-primary">
              Learn more about our security →
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
