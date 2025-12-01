'use client'

import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'
import { useState, useRef } from 'react'
import Image from 'next/image'
import { SectionWrapper } from './section-wrapper'
import { SectionHeader } from './section-header'

export function DemoVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  return (
    <SectionWrapper background="gradient" className="border-y border-border/40" id="demo">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <SectionHeader
          title="See Thevenin in Action"
          description="Watch how you can deploy and scale your infrastructure in seconds"
        />

        {/* Video Container */}
        <div 
          className="group relative aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted/20 shadow-2xl shadow-primary/10 transition-all hover:border-primary/50 hover:shadow-primary/20"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(isPlaying ? false : true)}
        >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="h-full w-full object-cover cursor-pointer bg-background"
              onClick={handleVideoClick}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/thevenin-demo.mp4" type="video/mp4" />
              <track
                kind="captions"
                src="/videos/thevenin-demo-captions.vtt"
                srcLang="en"
                label="English"
                default
              />
              Your browser does not support the video tag.
            </video>



            {/* Play/Pause Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0C10] gap-8">
                {/* Logo */}
                <Image 
                  src="/logo.webp" 
                  alt="Thevenin Logo" 
                  width={894}
                  height={178}
                  className="w-1/2 max-w-md"
                  loading="lazy"
                />
                {/* Play Button */}
                <button
                  onClick={togglePlay}
                  className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-background/80 transition-all hover:scale-110 hover:bg-background hover:shadow-lg hover:shadow-primary/25"
                  aria-label="Play demo video"
                >
                  <Play className="ml-1 h-8 w-8 fill-primary text-primary" />
                </button>
              </div>
            )}

            {/* Custom Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 bg-linear-to-t from-background/90 via-background/60 to-transparent p-4 transition-all duration-300 ${
                showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:scale-110"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 fill-primary" />
                  ) : (
                    <Play className="ml-0.5 h-5 w-5 fill-primary" />
                  )}
                </button>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Volume Button */}
                <button
                  onClick={toggleMute}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:scale-110"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:scale-110"
                  aria-label="Fullscreen"
                >
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </div>


          </div>
      </div>
    </SectionWrapper>
  )
}
