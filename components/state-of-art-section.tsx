'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { SectionWrapper } from './section-wrapper'
import { SectionHeader } from './section-header'

const technologies = [
  { name: 'Talos Linux', logo: '/states-art/talos.png', description: 'Immutable Infrastructure' },
  { name: 'Istio', logo: '/states-art/istio.png', description: 'Service Mesh' },
  { name: 'Gvisor', logo: '/states-art/gvisor.png', description: 'Container Security' },
  { name: 'Cilium', logo: '/states-art/cilium.png', description: 'eBPF Networking' },
  { name: 'Kyverno', logo: '/states-art/kyverno.png', description: 'Policy Engine' },
  { name: 'Ory', logo: '/states-art/ory.png', description: 'Identity & Access' },
  { name: 'OpenTelemetry', logo: '/states-art/open-telemetry.png', description: 'Observability' },
  { name: 'Kubernetes', logo: '/states-art/kubernetes.png', description: 'Orchestration' },
  { name: 'Terraform', logo: '/states-art/terraform.png', description: 'Infrastructure as Code' },
]

export function StateOfArtSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <SectionWrapper background="gradient" id="technologies">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader
          title={
            <span className="bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Powered by the State of the Art
            </span>
          }
          description="Built on industry-leading open-source technologies that power the world's most demanding infrastructure"
        />
      </motion.div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="relative group"
          >
            <div className={`
              relative p-6 md:p-8 rounded-2xl border bg-card/80 backdrop-blur-sm
              transition-all duration-300 h-full min-h-[200px] md:min-h-[240px]
              ${hoveredIndex === index 
                ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                : 'border-border/50 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1'}
            `}>
              {/* Glow effect on hover */}
              {hoveredIndex === index && (
                <motion.div
                  layoutId="hoverGlow"
                  className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center justify-between text-center h-full space-y-4">
                {/* Logo with animation */}
                <motion.div
                  className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 flex items-center justify-center"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={144}
                    height={144}
                    className="object-contain w-full h-full"
                  />
                </motion.div>

                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground font-medium">
                  {tech.description}
                </p>

                {/* Decorative line */}
                <motion.div
                  className="h-1 bg-linear-to-r from-transparent via-primary to-transparent w-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
