'use client'

import { useState, useEffect } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    companySize: '',
    location: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Handle client-side mounting to prevent hydration errors
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          companyName: '',
          email: '',
          companySize: '',
          location: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Contact Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-start">
              {/* Left side - Contact Info */}
              <div className="space-y-6">
                <h1 className="font-heading text-5xl font-bold leading-tight lg:text-6xl">
                  <span className="text-primary">Contact Us</span>
                </h1>
                
                <div className="space-y-4 text-lg">
                  <p className="font-semibold text-foreground">
                    Ready to take control of your platform?
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Talk to us to see how Thevenin can help you ship faster, reduce operational risk, and keep full control of your infrastructure.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Ask for a demo, give us feedback or let&apos;s talk about Thevenin to see if it fits your company.
                  </p>
                </div>
              </div>

              {/* Right side - Contact Form */}
              <div className="bg-linear-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/60 rounded-3xl p-10 shadow-2xl">
                {!mounted ? (
                  <div className="space-y-6" aria-hidden>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-32 bg-muted/50" />
                      <Skeleton className="h-12 w-full rounded-xl bg-muted/40 border border-border/40" />
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-20 bg-muted/50" />
                      <Skeleton className="h-12 w-full rounded-xl bg-muted/40 border border-border/40" />
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-28 bg-muted/50" />
                      <Skeleton className="h-12 w-full rounded-xl bg-muted/40 border border-border/40" />
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-24 bg-muted/50" />
                      <Skeleton className="h-12 w-full rounded-xl bg-muted/40 border border-border/40" />
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-4 w-24 bg-muted/50" />
                      <Skeleton className="h-32 w-full rounded-xl bg-muted/40 border border-border/40" />
                    </div>
                    <Skeleton className="h-12 w-full rounded-xl bg-muted/40 border border-border/40" />
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="companyName" className="text-base font-medium text-foreground block">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      placeholder=""
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="h-12 bg-background/60 border-border/40 rounded-xl text-base placeholder:text-muted-foreground/40 focus-visible:ring-primary/20 focus-visible:border-primary/40 transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-base font-medium text-foreground block">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder=""
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 bg-background/60 border-border/40 rounded-xl text-base placeholder:text-muted-foreground/40 focus-visible:ring-primary/20 focus-visible:border-primary/40 transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="companySize" className="text-base font-medium text-foreground block">
                      Company Size
                    </label>
                    <Select
                      value={formData.companySize}
                      onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                      required
                    >
                      <SelectTrigger className="w-full h-12 bg-background/60 border-border/40 rounded-xl text-base focus:ring-primary/20 focus:border-primary/40 transition-all">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background/95 backdrop-blur-lg border-border/60">
                        <SelectItem value="startup" className="text-base">Startup</SelectItem>
                        <SelectItem value="scaleup" className="text-base">Scale Up</SelectItem>
                        <SelectItem value="enterprise" className="text-base">Enterprise</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="location" className="text-base font-medium text-foreground block">
                      Location
                    </label>
                    <Input
                      id="location"
                      placeholder=""
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="h-12 bg-background/60 border-border/40 rounded-xl text-base placeholder:text-muted-foreground/40 focus-visible:ring-primary/20 focus-visible:border-primary/40 transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-base font-medium text-foreground block">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder=""
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="resize-none bg-background/60 border-border/40 rounded-xl text-base placeholder:text-muted-foreground/40 focus-visible:ring-primary/20 focus-visible:border-primary/40 transition-all"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl text-primary text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                      ✓ Thank you! We&apos;ll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm font-medium animate-in fade-in slide-in-from-top-2 duration-300">
                      ✗ Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : 'Submit'}
                  </Button>
                </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
