import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: 'default' | 'muted' | 'gradient' | 'card'
  noPadding?: boolean
}

export function SectionWrapper({ 
  children, 
  className, 
  containerClassName,
  id,
  background = 'default',
  noPadding = false
}: SectionWrapperProps) {
  const bgClasses = {
    default: 'bg-background',
    muted: 'bg-muted/30',
    gradient: 'bg-gradient-to-b from-background via-muted/20 to-background',
    card: 'bg-card/30'
  }

  return (
    <section 
      id={id}
      className={cn(
        'relative w-full overflow-hidden',
        !noPadding && 'py-16 sm:py-20 md:py-24 lg:py-32',
        bgClasses[background],
        className
      )}
    >
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  )
}
