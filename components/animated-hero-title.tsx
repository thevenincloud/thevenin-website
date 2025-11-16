'use client'

import { useEffect, useState } from 'react'

export function AnimatedHeroTitle() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Always render the same HTML structure for SSR and client
  return (
    <h1 className="mb-6 font-krona text-4xl leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl relative">
      {/* "Build like a" - static */}
      <span className="inline-block">Build like a </span>

      {/* "Startup" - Fast, agile, dynamic with moving particles */}
      <span className="relative inline-block group">
        <span className="relative z-10">Startup</span>

        {/* Fast-moving particles around "Startup" */}
        <span className="absolute inset-0 z-0">
          <span className={`absolute top-0 left-0 w-1 h-1 bg-primary rounded-full ${mounted ? 'animate-particle-1' : ''}`} />
          <span className={`absolute top-1/2 right-0 w-1 h-1 bg-primary rounded-full ${mounted ? 'animate-particle-2' : ''}`} />
          <span className={`absolute bottom-0 left-1/3 w-1 h-1 bg-primary rounded-full ${mounted ? 'animate-particle-3' : ''}`} />
          <span className={`absolute top-1/4 right-1/4 w-0.5 h-0.5 bg-primary/60 rounded-full ${mounted ? 'animate-particle-4' : ''}`} />
        </span>

        {/* Subtle glow pulse for startup energy */}
        <span className={`absolute -inset-2 bg-primary/5 blur-xl ${mounted ? 'animate-pulse-fast' : ''} -z-10`} />
      </span>

      {/* Line break to ensure proper spacing */}
      <br className="block" />
      
      {/* "Ship like an" - static */}
      <span className="inline-block text-primary">Ship like an </span>

      {/* "Enterprise" - Solid, structured, stable with grid */}
      <span className="relative inline-block group text-primary">
        <span className="relative z-10">Enterprise</span>

        {/* Structured grid lines that build around "Enterprise" */}
        <span className="absolute inset-0 -m-4 opacity-20">
          {/* Vertical lines */}
          <span className={`absolute left-0 top-0 w-px h-full bg-primary ${mounted ? 'animate-build-vertical-1' : ''}`} />
          <span className={`absolute left-1/3 top-0 w-px h-full bg-primary ${mounted ? 'animate-build-vertical-2' : ''}`} />
          <span className={`absolute left-2/3 top-0 w-px h-full bg-primary ${mounted ? 'animate-build-vertical-3' : ''}`} />
          <span className={`absolute right-0 top-0 w-px h-full bg-primary ${mounted ? 'animate-build-vertical-4' : ''}`} />

          {/* Horizontal lines */}
          <span className={`absolute top-0 left-0 w-full h-px bg-primary ${mounted ? 'animate-build-horizontal-1' : ''}`} />
          <span className={`absolute top-1/2 left-0 w-full h-px bg-primary ${mounted ? 'animate-build-horizontal-2' : ''}`} />
          <span className={`absolute bottom-0 left-0 w-full h-px bg-primary ${mounted ? 'animate-build-horizontal-3' : ''}`} />
        </span>

        {/* Solid foundation effect */}
        <span className="absolute -inset-2 bg-primary/5 blur-sm -z-10" />
      </span>
    </h1>
  )
}
