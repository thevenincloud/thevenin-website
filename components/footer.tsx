import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 py-12" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div>
            <Image
              src="/logo.webp"
              alt="Thevenin"
              width={894}
              height={178}
              className="mb-4 h-7 w-auto"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Build like a Startup<br />
              Ship like an Enterprise
            </p>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-base">Product</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="/benefits" className="hover:text-foreground">Benefits</Link></li>
              {/* <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li> */}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-base">Resources</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://docs.thevenin.io" className="hover:text-foreground">Documentation</a></li>
              <li><a href="https://docs.thevenin.io" className="hover:text-foreground">API Reference</a></li>
              <li><a href="https://apps.thevenin.io/support" className="hover:text-foreground">Support</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-base">Company</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><a href="https://docs.thevenin.io/blog" className="hover:text-foreground">Blog</a></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-semibold text-base">Legal</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy-policy" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="/eula" className="hover:text-foreground">EULA</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Thevenin. All rights reserved.</p>
          <p className="mt-4 text-xs">
            Thevenin OÜ, a company registered in Estonia under Registration Number: EE102770885 and with Registered Address at Harju maakond, Tallinn, Põhja-Tallinna linnaosa, Tööstuse tn 75-71, 10416, Estonia.
          </p>
        </div>
      </div>
    </footer>
  )
}
