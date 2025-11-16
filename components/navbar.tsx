import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Thevenin"
            width={140}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Home
          </a>
          <a href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            About
          </a>
          <a href="/pre-seed" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pre-Seed
          </a>
          <a href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </a>
          <a href="#docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Docs
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join the Beta
          </Button>
        </div>
      </div>
    </nav>
  )
}
