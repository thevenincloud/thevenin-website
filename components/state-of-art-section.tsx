'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-background/50 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Powered by the State of the Art
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on industry-leading open-source technologies that power the world's most demanding infrastructure
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
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
                relative p-6 rounded-2xl border bg-card/50 backdrop-blur-sm
                transition-all duration-300 h-full
                ${hoveredIndex === index 
                  ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                  : 'border-border hover:border-primary/50'}
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

                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  {/* Logo with animation */}
                  <motion.div
                    className="h-32 w-32 md:h-36 md:w-36 flex items-center justify-center"
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
                  <p className="text-sm md:text-base text-muted-foreground flex items-center justify-center font-medium">
                    {tech.description}
                  </p>

                  {/* Decorative line */}
                  <motion.div
                    className="h-1 bg-linear-to-r from-transparent via-primary to-transparent"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
