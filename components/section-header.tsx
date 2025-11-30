import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface SectionHeaderProps {
  badge?: string
  badgeIcon?: LucideIcon
  title: string | ReactNode
  description?: string | ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({ 
  badge, 
  badgeIcon: BadgeIcon,
  title, 
  description, 
  align = 'center',
  className 
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center'
  }

  return (
    <div className={cn(
      'flex flex-col gap-4 mb-12 md:mb-16 lg:mb-20',
      alignClasses[align],
      align === 'center' && 'mx-auto max-w-4xl',
      className
    )}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 w-fit">
          {BadgeIcon && <BadgeIcon className="h-4 w-4" />}
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
