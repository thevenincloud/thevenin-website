import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Linkedin } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Gabriel Olivieri',
      role: 'CEO, Founder',
      description: '8 years of experience in Platform/DevOps Engineering',
      credentials: [
        'Executive MBA Candidate',
        'Certified Kubernetes and AWS Engineer',
        'Thorough experience developing cloud infrastructure and internal development platforms in a wide range of industries and scales'
      ],
      image: '/teams/gabriel.png',
      linkedin: 'https://www.linkedin.com/in/gabriel-olivieri-cervilla/',
    },
    {
      name: 'Tomás González',
      role: 'CXO, Co-Founder',
      description: '11 years of experience in Software Development',
      credentials: [
        'Specialized in Frontend Development and User Experiences',
        'Thorough experience with developing and managing B2B SaaS products under compliance standards'
      ],
      image: '/teams/tomas.png',
      linkedin: 'https://www.linkedin.com/in/tomas-gonzalez-silva',
    },
    {
      name: 'Gabriela Pérez',
      role: 'PR & Brand Designer',
      description: 'Founder of Ghala Studio',
      credentials: [
        'Specialized in brand strategy, communication, and visual identity systems',
        'Experienced in creative and art direction and developing brand experiences across different media'
      ],
      image: '/teams/gabriela.png',
      linkedin: 'https://www.linkedin.com/in/gabypvisual/',
    },
  ]

  const advisors = [
    {
      name: 'Keith Camilleri',
      role: 'Mentor',
      description: '10 years creating and Scaling Companies',
      credentials: [
        'Has been CEO, CTO and COO of multiple different enterprises',
        'Serial Founder and owner of 20+ companies in the fintech and compliance market'
      ],
      linkedin: 'https://www.linkedin.com/in/keithcamilleri/',
    },
    {
      name: 'María Antonia Cervilla',
      role: 'Mentor',
      description: 'PhD in Innovation and Business Development',
      credentials: [
        'Has mentored multiple Startups in IESA EmprendeTech Program',
        'ex Vice President of PTS Tech Park'
      ],
      linkedin: 'https://www.linkedin.com/in/mar%C3%ADa-antonia-cervilla-ruano-02862394/',
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
                  <div className="aspect-square overflow-hidden bg-black">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-sm text-primary font-medium">{member.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{member.description}</p>
                    <ul className="mt-3 space-y-1">
                      {member.credentials.map((credential, index) => (
                        <li key={index} className="text-xs text-muted-foreground">
                          • {credential}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
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
                  className="group rounded-lg border border-border/40 bg-background p-8 transition-all hover:border-border/60"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-2xl font-bold">{advisor.name}</h3>
                      <p className="mt-2 text-base text-primary font-medium">{advisor.role}</p>
                    </div>
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{advisor.description}</p>
                  <ul className="mt-4 space-y-2">
                    {advisor.credentials.map((credential, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {credential}
                      </li>
                    ))}
                  </ul>
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
