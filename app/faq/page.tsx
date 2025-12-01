import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { 
  HelpCircle,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Shield,
  Cloud,
  Settings,
  Code,
  Building2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Find answers to common questions about Thevenin platform, pricing, security, compliance, and more. Learn how Thevenin can help your business.',
  alternates: {
    canonical: 'https://thevenin.io/faq',
  },
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | Thevenin',
    description: 'Find answers to common questions about Thevenin platform, pricing, security, and compliance.',
    url: 'https://thevenin.io/faq',
  },
}

export default function FAQPage() {
  const faqs = [
    {
      category: 'About Thevenin',
      icon: Sparkles,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      questions: [
        {
          question: 'What is Thevenin?',
          answer: 'Thevenin is a PaaS (Platform as a Service) solution designed especially for multi-tiered architectures. It provides a streamlined platform to deploy, manage, and scale applications (especially microservices) without the burden of infrastructure complexity.'
        },
        {
          question: 'What pain points or challenges does Thevenin aim to solve?',
          answer: (
            <div className="space-y-3">
              <p>According to softwareone, 95% of organizations have been negatively impacted by lack of cloud skills.</p>
              <p>We are addressing this ops skill gap by creating an Intuitive Platform as a Service that can meet any software project use case.</p>
              <p className="font-semibold text-foreground">Our mission is to make infra easy for everyone.</p>
            </div>
          )
        },
      ]
    },
    {
      category: 'Use Cases & Tiers',
      icon: Building2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      questions: [
        {
          question: 'What are the use cases for Thevenin and its tiers?',
          answer: (
            <div className="space-y-4">
              <p>Thevenin consists of three tiers related to the stage in the lifecycle of any software project and company:</p>
              
              <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-4">
                <h4 className="font-semibold text-foreground mb-2">Thevenin Dev Tier</h4>
                <p>An Internal Development Platform to be used for developing MVPs or iterating existing products. It is ideal for companies ranging from pre-revenue Startups to Enterprises.</p>
              </div>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                <h4 className="font-semibold text-foreground mb-2">Thevenin Prod Tier</h4>
                <p>A Fault tolerant Platform with guaranteed Service Levels Agreements, for hosting software that is used by many users. It is ideal for companies ranging from Post-Revenue Startups to Enterprise.</p>
              </div>

              <div className="rounded-lg border border-purple-500/30 bg-purple-500/5 p-4">
                <h4 className="font-semibold text-foreground mb-2">Thevenin Enterprise Tier</h4>
                <p>A White Labeled Dashboard with Customized Services to integrate with existing deployments. It is ideal for big Enterprises wanting to develop new projects that integrate with their existing services.</p>
              </div>
            </div>
          )
        },
      ]
    },
    {
      category: 'Features & Capabilities',
      icon: Settings,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      questions: [
        {
          question: 'What can I currently do with Thevenin?',
          answer: (
            <div className="space-y-3">
              <p>Currently only the dev tier is available and with it you can deploy Applications with Docker Containers and attach volumes, files and environment variables. You can also expose your app to the internet with HTTP or GRPC.</p>
              <p className="font-semibold text-foreground">We are working on features such as:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                <li>CI/CD</li>
                <li>Databases</li>
                <li>Queues</li>
                <li>Functions</li>
                <li>AI Assistant</li>
                <li>Infrastructure as Code</li>
                <li>Git Hooks</li>
                <li>And more!</li>
              </ul>
            </div>
          )
        },
      ]
    },
    {
      category: 'Technology',
      icon: Code,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      questions: [
        {
          question: 'What technologies make Thevenin possible?',
          answer: (
            <div className="space-y-3">
              <p className="font-semibold text-foreground">Thevenin is running with Kubernetes and its ecosystem under the hood.</p>
              <p>While traditional PaaS still rely on scripts and buttons to orchestrate their services; in Thevenin all our operations are automated with Kubernetes Operators, which continuously reconcile applications state without any manual effort.</p>
              <p>We keep up to date with the state of the art technologies and concepts such as eBPF, Service Mesh, GitOps, Chaos Engineering and DevSecOps.</p>
              <p>At the same time we only use enterprise-grade, widely adopted and battle tested solutions since the stability of our system is what is most important to us.</p>
            </div>
          )
        },
      ]
    },
    {
      category: 'Deployment Options',
      icon: Cloud,
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
      questions: [
        {
          question: 'Can I host Thevenin in my own cloud?',
          answer: (
            <div className="space-y-3">
              <p className="font-semibold text-foreground">Yes, absolutely!</p>
              <p>Contact us at <a href="mailto:sales@thevenin.io" className="text-primary hover:underline">sales@thevenin.io</a> and we will work on deploying the solution in your cloud.</p>
              <p className="text-muted-foreground">This BYOC (Bring Your Own Cloud) option gives you complete control over your infrastructure while benefiting from Thevenin&apos;s powerful platform capabilities.</p>
            </div>
          )
        },
      ]
    },
    {
      category: 'Legal & Company',
      icon: Shield,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      questions: [
        {
          question: 'Where is Thevenin legally registered?',
          answer: (
            <div className="space-y-2">
              <p>Thevenin OÜ is registered in Estonia.</p>
              <p className="text-sm text-muted-foreground">Registration Number: EE102770885</p>
            </div>
          )
        },
      ]
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[64px_64px]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <HelpCircle className="h-4 w-4" />
              Frequently Asked Questions
            </div>
            
            <h1 className="mb-6 font-krona text-4xl tracking-tight text-balance md:text-5xl lg:text-6xl">
              Everything You Need to Know{' '}
              <span className="text-primary">About Thevenin</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Find answers to common questions about our platform, features, pricing, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={category.category} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className={`inline-flex rounded-lg ${category.bgColor} p-2`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => (
                    <details
                      key={qIndex}
                      className="group rounded-xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <summary className="flex cursor-pointer items-center justify-between p-6 text-left font-semibold text-foreground list-none">
                        <span className="flex-1 pr-4">{faq.question}</span>
                        <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-border/30 px-6 pb-6 pt-4">
                        <div className="text-muted-foreground leading-relaxed">
                          {typeof faq.answer === 'string' ? (
                            <p>{faq.answer}</p>
                          ) : (
                            faq.answer
                          )}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-24 md:py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <HelpCircle className="mx-auto h-16 w-16 text-primary mb-6" />
            <h2 className="mb-6 font-krona text-3xl tracking-tight text-balance md:text-5xl">
              Still Have{' '}
              <span className="text-primary">Questions?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our team is here to help. Get in touch and we&apos;ll answer any questions you have about Thevenin.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90 text-base font-medium px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
                asChild
              >
                <a href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-base font-medium px-8"
                asChild
              >
                <a href="https://docs.thevenin.io" target="_blank" rel="noopener noreferrer">
                  Read Documentation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
