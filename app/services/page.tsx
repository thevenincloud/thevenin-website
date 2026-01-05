import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Cloud, Wrench, ShieldCheck, ArrowRight, Workflow } from "lucide-react";
import { PremiumIcon, PremiumIconBadge } from "@/components/premium-icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional services to deploy Thevenin in your cloud, run your operations, and get audit-ready for ISO 27001 and SOC 2.",
  alternates: {
    canonical: "https://thevenin.io/services",
  },
  openGraph: {
    title: "Services | Thevenin",
    description:
      "Deploy Thevenin in your cloud, get DevOps/Operations support, and prepare for ISO 27001 & SOC 2.",
    url: "https://thevenin.io/services",
  },
};

export default function ServicesPage() {
  const offerings = [
    {
      icon: Cloud,
      title: "Customer Cloud Deployment (Data Sovereignty)",
      description:
        "We can deploy Thevenin in your own cloud or on‑prem so you keep full control of your data, networking, and security boundaries.",
      bullets: [
        "Private deployment in your AWS/GCP/Azure or on‑prem",
        "Enterprise setup: networking, identity, and segmentation",
        "Operational handover and enablement for your team",
      ],
      gradient: "from-primary/10 via-transparent to-transparent",
    },
    {
      icon: Wrench,
      title: "DevOps & Operations (Product Optional)",
      description:
        "Prefer to keep your current stack? We provide DevOps/SRE-style services to reduce risk and improve reliability without requiring Thevenin installation.",
      bullets: [
        "Kubernetes & cloud operations, upgrades, and incident response",
        "Observability, alerting, runbooks, and on-call readiness",
        "Security hardening and delivery pipelines (DevSecOps)",
      ],
      gradient: "from-primary/10 via-transparent to-transparent",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Readiness (ISO 27001 / SOC 2)",
      description:
        "We help you build the controls, evidence, and processes to become audit-ready, pragmatically and with clear ownership.",
      bullets: [
        "Gap assessment and prioritized implementation roadmap",
        "Policies, procedures, and evidence collection workflow",
        "Support through internal audit, readiness, and remediation",
      ],
      gradient: "from-primary/10 via-transparent to-transparent",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <SectionWrapper background="gradient" className="pt-28">
        <SectionHeader
          badge="Professional Services"
          badgeIcon={Workflow}
          title={
            <>
              Services that help you{" "}
              <span className="text-primary">operate</span> and{" "}
              <span className="text-primary">stay compliant</span>
            </>
          }
          description="Thevenin is a product-first PaaS, and we also deliver expert services for customer-cloud deployments, ongoing operations, and compliance programs."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="cta"
            size="xl"
            className="w-full sm:w-auto"
            asChild
          >
            <a href="/contact">
              Talk to us
              <PremiumIcon
                icon={ArrowRight}
                size="sm"
                className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
              />
            </a>
          </Button>
        </div>
      </SectionWrapper>

      {/* Offerings */}
      <SectionWrapper background="default">
        <div className="grid gap-6 lg:grid-cols-3">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${o.gradient} opacity-60`}
              />
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-5">
                  <PremiumIconBadge
                    icon={o.icon}
                    className="group-hover:border-primary/30 group-hover:bg-primary/10"
                    iconClassName="group-hover:text-primary"
                  />
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {o.title}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                  {o.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {o.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-muted-foreground">
          <p className="text-base md:text-lg">
            Not sure what you need? Tell us your goals and constraints, we’ll
            recommend the shortest path.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="cta"
              size="xl"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="/contact">
                Contact Sales
                <PremiumIcon
                  icon={ArrowRight}
                  size="sm"
                  className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
                />
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
