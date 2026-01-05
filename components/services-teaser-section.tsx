"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Cloud, ShieldCheck, Wrench, ArrowRight } from "lucide-react";
import { PremiumIconBadge, PremiumIcon } from "@/components/premium-icon";

export function ServicesTeaserSection() {
  const items = [
    {
      icon: Cloud,
      title: "Customer Cloud Deployment",
      description:
        "Install Thevenin in your own cloud for full data sovereignty and control.",
      gradient: "from-primary/10 via-transparent to-transparent",
    },
    {
      icon: Wrench,
      title: "DevOps & Operations",
      description:
        "Operate, secure, and scale your platform with or without installing Thevenin.",
      gradient: "from-primary/10 via-transparent to-transparent",
    },
    {
      icon: ShieldCheck,
      title: "Compliance Readiness",
      description:
        "Get audit-ready for ISO 27001 and SOC 2 with practical guidance and execution.",
      gradient: "from-primary/10 via-transparent to-transparent",
    },
  ];

  return (
    <SectionWrapper background="default" id="services">
      <SectionHeader
        badge="Professional Services"
        title={
          <>
            We also deliver <span className="text-primary">services</span>
          </>
        }
        description="Whether you want Thevenin deployed in your environment or need help running your existing stack, we can help you ship safely and stay compliant."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 md:p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-60`}
            />
            <div className="relative z-10">
              <div className="mb-5">
                <PremiumIconBadge
                  icon={item.icon}
                  className="group-hover:border-primary/30 group-hover:bg-primary/10"
                  iconClassName="group-hover:text-primary"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="cta"
          size="xl"
          className="w-full sm:w-auto"
          asChild
        >
          <a href="/services">
            Explore Services
            <PremiumIcon
              icon={ArrowRight}
              size="sm"
              className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
            />
          </a>
        </Button>
      </div>
    </SectionWrapper>
  );
}
