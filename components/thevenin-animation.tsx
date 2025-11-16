'use client'

import { useEffect, useState } from 'react'

// Generate static data outside component to avoid hydration mismatch
const complexNodes = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: 10 + (i * 3) % 80,
  y: 10 + (i * 7) % 80,
  size: 2 + (i % 3),
  delay: (i * 0.1) % 2,
}))

const connections = Array.from({ length: 45 }, (_, i) => {
  const from = complexNodes[i % complexNodes.length]
  const to = complexNodes[(i + 3) % complexNodes.length]
  return {
    id: i,
    x1: from.x,
    y1: from.y,
    x2: to.x,
    y2: to.y,
    delay: (i * 0.05) % 2,
  }
})

export function TheveninAnimation() {
  const [phase, setPhase] = useState<'complex' | 'transform' | 'simple'>('complex')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const timeline = [
      { delay: 0, phase: 'complex' as const },
      { delay: 5000, phase: 'transform' as const },
      { delay: 10000, phase: 'simple' as const },
      { delay: 15000, phase: 'complex' as const }, // Loop
    ]

    const timers = timeline.map(({ delay, phase: newPhase }) =>
      setTimeout(() => setPhase(newPhase), delay)
    )

    const loopInterval = setInterval(() => {
      setPhase('complex')
      setTimeout(() => setPhase('transform'), 5000)
      setTimeout(() => setPhase('simple'), 10000)
    }, 15000)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(loopInterval)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-70">
      {/* Debug indicator - remove once confirmed working */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/20 rounded text-xs text-primary font-mono pointer-events-auto z-50">
        Phase: {phase} | Mounted: {mounted ? '✓' : '✗'}
      </div>
      
      {/* SVG Canvas - Background only */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Stronger glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          
          {/* Gradient for lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Act 1: Complex Circuit - Visible mesh */}
        <g
          className={`transition-opacity duration-2000 ${
            phase === 'complex' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Connection lines - more visible */}
          {connections.slice(0, 30).map((conn) => (
            <line
              key={`line-${conn.id}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="url(#lineGradient)"
              strokeWidth="0.2"
              filter="url(#glow)"
              className="animate-pulse-slow"
              style={{ animationDelay: `${conn.delay}s` }}
            />
          ))}
          
          {/* Nodes - more visible */}
          {complexNodes.slice(0, 20).map((node) => (
            <circle
              key={`node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r="0.3"
              fill="hsl(var(--primary))"
              opacity="0.8"
              filter="url(#glow)"
              className="animate-pulse-slow"
              style={{ animationDelay: `${node.delay}s` }}
            />
          ))}
        </g>

        {/* Act 2: The Transformation - Clean geometric shape */}
        <g
          className={`transition-all duration-2000 ${
            phase === 'transform' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Central circuit symbol */}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.4"
            opacity="0.7"
            filter="url(#glow)"
            className="animate-pulse-slow"
          />
          
          <circle
            cx="50"
            cy="50"
            r="5"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="0.3"
            opacity="0.9"
            filter="url(#glow)"
            className="animate-pulse-slow"
          />

          {/* Four directional lines */}
          <line x1="50" y1="25" x2="50" y2="40" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.8" filter="url(#glow)" />
          <line x1="50" y1="60" x2="50" y2="75" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.8" filter="url(#glow)" />
          <line x1="25" y1="50" x2="40" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.8" filter="url(#glow)" />
          <line x1="60" y1="50" x2="75" y2="50" stroke="hsl(var(--primary))" strokeWidth="0.3" opacity="0.8" filter="url(#glow)" />
        </g>

        {/* Act 3: Simple Path - Clean horizontal flow */}
        <g
          className={`transition-opacity duration-2000 ${
            phase === 'simple' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Simple horizontal line */}
          <line
            x1="15"
            y1="50"
            x2="85"
            y2="50"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            opacity="0.9"
            filter="url(#glow)"
            className="animate-pulse-slow"
          />

          {/* Three prominent nodes along the path */}
          <circle cx="25" cy="50" r="1" fill="hsl(var(--primary))" opacity="0.9" filter="url(#glow)" className="animate-pulse-slow" />
          <circle cx="50" cy="50" r="1" fill="hsl(var(--primary))" opacity="0.9" filter="url(#glow)" className="animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
          <circle cx="75" cy="50" r="1" fill="hsl(var(--primary))" opacity="0.9" filter="url(#glow)" className="animate-pulse-slow" style={{ animationDelay: '0.6s' }} />
        </g>
      </svg>
    </div>
  )
}
