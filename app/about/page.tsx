import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Linkedin, Mail } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Team Member 1',
      role: 'Co-Founder & CEO',
      image: '/professional-headshot-portrait-ceo-tech-startup.jpg',
    },
    {
      name: 'Team Member 2',
      role: 'Co-Founder & CTO',
      image: '/professional-headshot-portrait-cto-tech-startup.jpg',
    },
    {
      name: 'Team Member 3',
      role: 'Head of Engineering',
      image: '/professional-headshot-portrait-engineer-tech-start.jpg',
    },
  ]

  const advisors = [
    {
      name: 'Advisor 1',
      role: 'Industry Advisor',
      company: 'Former VP at Major Cloud Provider',
      image: '/professional-headshot-portrait-tech-advisor.jpg',
    },
    {
      name: 'Advisor 2',
      role: 'Technical Advisor',
      company: 'Infrastructure Architect',
      image: '/professional-headshot-portrait-technical-advisor.jpg',
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
              Building the Future of
              <span className="text-primary"> Infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              We&apos;re a team of infrastructure engineers, developers, and cloud experts on a mission 
              to simplify deployment and scaling for every developer.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 border-y border-border/40">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl font-bold">Our Mission</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To democratize cloud infrastructure by providing a vendor-neutral platform 
                  that empowers developers to deploy, scale, and manage applications without 
                  the complexity of traditional cloud providers.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold">Our Vision</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A world where infrastructure decisions are driven by performance and cost, 
                  not vendor lock-in. Where developers spend time building products, not 
                  managing servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-4xl font-bold">Meet the Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The people building Thevenin
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group relative overflow-hidden rounded-lg border border-border/40 bg-muted/20 transition-all hover:border-border/60"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-sm text-primary">{member.role}</p>
                    <div className="mt-4 flex gap-3">
                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        aria-label="Email"
                      >
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="font-heading text-4xl font-bold">Our Advisors</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Guidance from industry leaders
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              {advisors.map((advisor) => (
                <div
                  key={advisor.name}
                  className="group flex gap-6 rounded-lg border border-border/40 bg-background p-6 transition-all hover:border-border/60"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={advisor.image || "/placeholder.svg"}
                      alt={advisor.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-heading text-xl font-bold">{advisor.name}</h3>
                    <p className="mt-1 text-sm text-primary">{advisor.role}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{advisor.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
