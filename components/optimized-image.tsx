import Image, { ImageProps } from 'next/image'

type OptimizedImageProps = ImageProps & {
  priority?: boolean
}

export function OptimizedImage({ 
  priority = false,
  loading,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      loading={priority ? undefined : (loading || 'lazy')}
      priority={priority}
      quality={85}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
  )
}
