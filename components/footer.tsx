import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
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
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground">Guides</a></li>
              <li><a href="#" className="hover:text-foreground">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Thevenin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
