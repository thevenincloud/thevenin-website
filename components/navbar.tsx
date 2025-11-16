'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/benefits', label: 'Benefits' },
    { href: '/faq', label: 'FAQ' },
    { href: '/pre-seed', label: 'Pre-Seed' },
    { href: '/contact', label: 'Contact' },
    { href: 'https://docs.thevenin.io/', label: 'Docs' },
  ]

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-[#CDFF8C]/5' 
            : 'bg-background/80 backdrop-blur-xl border-b border-border/40'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo with link to home */}
            <a href="/" className="flex items-center gap-2 relative group" aria-label="Go to home">
              <div className="absolute" />
              <Image
                src="/logo.png"
                alt="Thevenin"
                width={140}
                height={32}
                className="h-8 w-auto relative z-10"
                priority
              />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button 
                variant="secondary"
                size="sm"
                className="font-medium"
                asChild
              >
                <a href="https://apps.thevenin.io/login">Sign In</a>
              </Button>
              <Button 
                size="sm" 
                className="bg-[#CDFF8C] text-black font-medium"
                asChild
              >
                <a href="https://apps.thevenin.io/signup">Join the Beta</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative p-2 rounded-lg hover:bg-[#CDFF8C]/10 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 text-foreground transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 text-foreground transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/80 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl shadow-[#CDFF8C]/10 overflow-hidden">
            <div className="p-6 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-foreground transition-all transform hover:translate-x-1"
                  style={{
                    animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="px-6 pb-6 pt-4 space-y-3 border-t border-border/50">
              <Button 
                variant="outline" 
                className="w-full font-medium border-border/50"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <a href="https://apps.thevenin.io/login">Sign In</a>
              </Button>
              <Button 
                className="w-full bg-[#CDFF8C] text-black font-medium"
                onClick={() => setIsOpen(false)}
                asChild
              >
                <a href="https://apps.thevenin.io/signup">Join the Beta</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
