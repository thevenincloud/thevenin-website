import * as React from 'react'
import type { LucideIcon, LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

type PremiumIconTone = 'default' | 'muted' | 'primary'
type PremiumIconSize = 'xs' | 'sm' | 'md' | 'lg'

const sizeClasses: Record<PremiumIconSize, string> = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
}

function toneClassName(tone: PremiumIconTone) {
  switch (tone) {
    case 'primary':
      return 'text-primary'
    case 'muted':
      return 'text-muted-foreground'
    default:
      return 'text-foreground/80'
  }
}

export type PremiumIconProps = Omit<LucideProps, 'size'> & {
  icon: LucideIcon
  size?: PremiumIconSize | number
  tone?: PremiumIconTone
}

export function PremiumIcon({
  icon: Icon,
  size = 'sm',
  tone = 'default',
  className,
  strokeWidth,
  style,
  ...props
}: PremiumIconProps) {
  const classNames =
    typeof size === 'number'
      ? cn('shrink-0', toneClassName(tone), className)
      : cn('shrink-0', sizeClasses[size], toneClassName(tone), className)

  const mergedStyle = typeof size === 'number' ? { width: size, height: size, ...style } : style

  return (
    <Icon
      aria-hidden
      focusable={false}
      className={classNames}
      strokeWidth={strokeWidth ?? 1.75}
      style={mergedStyle}
      {...props}
    />
  )
}

type PremiumIconBadgeTone = 'neutral' | 'primary'

type PremiumIconBadgeProps = {
  icon: LucideIcon
  size?: PremiumIconSize
  tone?: PremiumIconBadgeTone
  className?: string
  iconClassName?: string
}

export function PremiumIconBadge({
  icon,
  size = 'md',
  tone = 'neutral',
  className,
  iconClassName,
}: PremiumIconBadgeProps) {
  const containerTone =
    tone === 'primary'
      ? 'border-primary/20 bg-primary/10 text-primary'
      : 'border-border/60 bg-muted/40 text-foreground/80'

  const padding = size === 'xs' ? 'p-2' : size === 'sm' ? 'p-2.5' : size === 'md' ? 'p-3' : 'p-3.5'

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl border backdrop-blur-sm transition-colors',
        containerTone,
        padding,
        className
      )}
    >
      <PremiumIcon icon={icon} size={size} className={cn('text-inherit', iconClassName)} />
    </span>
  )
}
