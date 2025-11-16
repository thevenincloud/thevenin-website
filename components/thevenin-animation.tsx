'use client'

import { useEffect, useState } from 'react'

export function TheveninAnimation() {
  const [phase, setPhase] = useState<'complex' | 'transform' | 'simple'>('complex')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const cyclePhases = () => {
      setPhase('complex')
      setTimeout(() => setPhase('transform'), 4000)
      setTimeout(() => setPhase('simple'), 8000)
    }

    cyclePhases()
    const interval = setInterval(cyclePhases, 12000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 -z-10 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="energyFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0">
              <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1">
              <animate attributeName="stop-opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0">
              <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        <g 
          className="transition-all duration-2000"
          style={{ 
            opacity: phase === 'complex' ? 1 : 0,
            transform: phase === 'complex' ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          {mounted && Array.from({ length: 40 }).map((_, i) => {
            const angle = (i / 40) * Math.PI * 2
            const radius = 200 + Math.sin(i * 0.5) * 80
            const x = 600 + Math.cos(angle) * radius
            const y = 400 + Math.sin(angle) * radius * 0.6
            
            return (
              <g key={`complex-${i}`}>
                <circle cx={x} cy={y} r="4" fill="hsl(var(--primary))" opacity="0.4" filter="url(#glow)">
                  <animate attributeName="r" values="3;5;3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
                </circle>
                {i < 38 && (
                  <line
                    x1={x} y1={y}
                    x2={600 + Math.cos((i + 2) / 40 * Math.PI * 2) * (200 + Math.sin((i + 2) * 0.5) * 80)}
                    y2={400 + Math.sin((i + 2) / 40 * Math.PI * 2) * (200 + Math.sin((i + 2) * 0.5) * 80) * 0.6}
                    stroke="url(#connectionGradient)" strokeWidth="1" opacity="0.3"
                  />
                )}
              </g>
            )
          })}
          <circle cx="600" cy="400" r="120" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.2" strokeDasharray="5,5">
            <animateTransform attributeName="transform" type="rotate" from="0 600 400" to="360 600 400" dur="20s" repeatCount="indefinite" />
          </circle>
        </g>

        <g className="transition-all duration-2000" style={{ opacity: phase === 'transform' ? 1 : 0 }}>
          <g transform="translate(600, 400)">
            <circle cx="0" cy="0" r="60" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.8" filter="url(#glow)">
              <animate attributeName="r" values="60;70;60" dur="3s" repeatCount="indefinite" />
            </circle>
            <text x="-45" y="8" fontSize="24" fill="hsl(var(--primary))" fontWeight="bold" opacity="0.9">+</text>
            <text x="35" y="8" fontSize="24" fill="hsl(var(--primary))" fontWeight="bold" opacity="0.9">-</text>
            <rect x="80" y="-15" width="80" height="30" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.8" rx="4" />
            <path d="M 90 0 L 110 -10 L 130 10 L 150 -10" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" opacity="0.9" />
            <line x1="60" y1="0" x2="80" y2="0" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.8" />
            <line x1="160" y1="0" x2="200" y2="0" stroke="url(#energyFlow)" strokeWidth="3" />
            <circle cx="0" cy="0" r="5" fill="hsl(var(--primary))" opacity="0.8">
              <animate attributeName="cx" values="60;200" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            {mounted && Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2
              return (
                <circle key={`orbit-${i}`} cx={Math.cos(angle) * 100} cy={Math.sin(angle) * 100} r="3" fill="hsl(var(--primary))" opacity="0.5" filter="url(#glow)">
                  <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite" />
                </circle>
              )
            })}
          </g>
        </g>

        <g className="transition-all duration-2000" style={{ opacity: phase === 'simple' ? 1 : 0, transform: phase === 'simple' ? 'scale(1)' : 'scale(1.05)' }}>
          <line x1="200" y1="400" x2="1000" y2="400" stroke="hsl(var(--primary))" strokeWidth="6" opacity="0.6" strokeLinecap="round" filter="url(#glow)" />
          {[300, 600, 900].map((x, i) => (
            <g key={`service-${i}`}>
              <circle cx={x} cy="400" r="25" fill="hsl(var(--primary))" opacity="0.8" filter="url(#glow)">
                <animate attributeName="r" values="25;30;25" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy="400" r="15" fill="hsl(var(--background))" opacity="0.9" />
              <text x={x} y="460" textAnchor="middle" fontSize="14" fill="hsl(var(--primary))" opacity="0.7" fontWeight="600">
                {['Deploy', 'Scale', 'Monitor'][i]}
              </text>
            </g>
          ))}
          {Array.from({ length: 3 }).map((_, i) => (
            <circle key={`flow-${i}`} cx="200" cy="400" r="8" fill="hsl(var(--primary))" opacity="0.8">
              <animate attributeName="cx" values="200;1000;200" dur="4s" begin={`${i * 1.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.8;0" dur="4s" begin={`${i * 1.3}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <line x1="300" y1="370" x2="300" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
          <line x1="600" y1="370" x2="600" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
          <line x1="900" y1="370" x2="900" y2="300" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
        </g>

        <text x="600" y="700" textAnchor="middle" fontSize="16" fill="hsl(var(--primary))" opacity="0.4" fontWeight="500" letterSpacing="2">
          {phase === 'complex' && 'COMPLEX INFRASTRUCTURE'}
          {phase === 'transform' && 'THÉVENIN TRANSFORMATION'}
          {phase === 'simple' && 'SIMPLIFIED DEPLOYMENT'}
        </text>
      </svg>
    </div>
  )
}
