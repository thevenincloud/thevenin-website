'use client'

import { useState } from 'react'
import { SectionWrapper } from './section-wrapper'
import { SectionHeader } from './section-header'

export function VendorNeutralSection() {
  const [_, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      title: 'Compliant Access',
      description: 'Use it in your cloud, within your internal network or VPN',
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
    },
    {
      title: 'Data Sovereignty',
      description: 'Keep data in your region',
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
    },
    {
      title: 'Easy Migration',
      description: 'Move anytime, no penalties',
      gradient: 'from-primary/10 to-transparent',
      iconBg: 'bg-primary/10',
    }
  ]

  return (
    <SectionWrapper background="default" id="vendor-neutral">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={
            <>
              You are in control.{' '}
              <span className="text-primary">No Vendor Lock-in.</span>
            </>
          }
          description="Deploy Thevenin on your own infrastructure. You are free to move."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Title */}
                <h3 className="mb-3 text-xl md:text-2xl font-bold">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className={`absolute -bottom-8 -right-8 h-32 w-32 rounded-full ${feature.iconBg} opacity-20 blur-2xl transition-all duration-300 group-hover:opacity-40 group-hover:scale-125`} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
