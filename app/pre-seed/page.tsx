import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { FileText, TrendingUp, Users, Zap, ArrowRight } from 'lucide-react'

export default function PreSeedPage() {
  const highlights = [
    {
      icon: TrendingUp,
      label: 'Market Opportunity',
      value: '$50B+',
      description: 'Total addressable market',
    },
    {
      icon: Users,
      label: 'Beta Users',
      value: '500+',
      description: 'Active in private beta',
    },
    {
      icon: Zap,
      label: 'Growth Rate',
      value: '40% MoM',
      description: 'User growth momentum',
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Pre-Seed Round Open
            </div>
            <h1 className="font-heading text-5xl font-bold leading-tight text-balance lg:text-6xl">
              Join Us in Building the
              <span className="text-primary"> Next Generation</span> of Cloud Infrastructure
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              We&apos;re raising our pre-seed round to accelerate product development and 
              expand our go-to-market strategy. Be part of the infrastructure revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-lg border border-border/40 bg-muted/20 p-8 transition-all hover:border-border/60"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-1 text-sm text-muted-foreground">{item.label}</div>
                  <div className="mb-2 font-heading text-4xl font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">
              Why Invest in Thevenin?
            </h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border border-border/40 bg-muted/20 p-8">
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Massive Market Opportunity
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The cloud infrastructure market is projected to reach $50B+ by 2027. 
                  Developers are increasingly frustrated with vendor lock-in and complexity, 
                  creating a perfect opportunity for a vendor-neutral solution.
                </p>
              </div>

              <div className="rounded-lg border border-border/40 bg-muted/20 p-8">
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Proven Traction
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With 500+ active beta users and 40% month-over-month growth, we&apos;ve 
                  validated strong product-market fit. Our early users report 3x faster 
                  deployment times and 40% cost savings.
                </p>
              </div>

              <div className="rounded-lg border border-border/40 bg-muted/20 p-8">
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Experienced Team
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our founding team brings deep expertise from leading cloud providers and 
                  infrastructure companies, with a proven track record of building and scaling 
                  developer tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Review Our Pitch Deck
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Get the full details on our vision, product roadmap, market opportunity, 
              and financial projections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 cursor-pointer"
              >
                <a
                  href="https://docsend.com/view/k5c5ikjvh4h7zk3i"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Thevenin Pitch Deck"
                >
                  View Pitch Deck
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 cursor-pointer"
              >
                Schedule a Call
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Interested investors can reach out to{' '}
              <a href="mailto:support@thevenin.io" className="text-primary hover:underline">
                support@thevenin.io
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
