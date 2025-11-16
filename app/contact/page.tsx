'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Building2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('[v0] Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Our team will respond within 24 hours',
      contact: 'hello@thevenin.io',
      href: 'mailto:hello@thevenin.io',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available Monday to Friday, 9am-6pm PST',
      contact: 'Start a conversation',
      href: '#',
    },
    {
      icon: Building2,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      contact: 'San Francisco, CA',
      href: '#',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-5xl font-bold leading-tight text-balance lg:text-6xl">
              Let&apos;s Build Something
              <span className="text-primary"> Together</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Have questions about Thevenin? Want to discuss partnerships or investment opportunities? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group relative overflow-hidden rounded-lg border border-border/40 bg-muted/20 p-6 transition-all hover:border-border/60"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm text-primary font-medium">{method.contact}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="font-heading text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By submitting this form, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
