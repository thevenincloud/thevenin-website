import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div>
            <Image
              src="/logo.png"
              alt="Thevenin"
              width={120}
              height={28}
              className="mb-4 h-7 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Build like a Startup. Ship like an Enterprise.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://docs.thevenin.io" className="hover:text-foreground">Documentation</a></li>
              <li><a href="https://docs.thevenin.io" className="hover:text-foreground">API Reference</a></li>
              <li><a href="https://apps.thevenin.io/support" className="hover:text-foreground">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><a href="https://docs.thevenin.io/blog" className="hover:text-foreground">Blog</a></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy-policy" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Thevenin. All rights reserved. • Simplifying complex infrastructure.</p>
        </div>
      </div>
    </footer>
  )
}
