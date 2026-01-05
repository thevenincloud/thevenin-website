import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { PremiumIcon } from "@/components/premium-icon";

export function FinalCTA() {
  return (
    <SectionWrapper background="default" id="cta">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-small opacity-30" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Enhanced heading with better spacing */}
        <h2 className="mb-8 md:mb-10 heading-display">
          Start building <span className="text-primary">today</span>.
        </h2>

        <p className="mb-10 md:mb-12 text-body-large max-w-2xl mx-auto">
          Join teams already deploying with confidence. Get started in minutes
          with our demo environment.
        </p>

        {/* CTA Buttons with improved mobile layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="cta"
            size="xl"
            className="w-full sm:w-auto"
            asChild
          >
            <a href="https://apps.thevenin.io/signup">
              Try Thevenin Demo
              <PremiumIcon
                icon={ArrowRight}
                size="sm"
                className="ml-2 transition-transform group-hover:translate-x-1 text-inherit"
              />
            </a>
          </Button>

          <Button
            variant="ctaSecondary"
            size="xl"
            className="w-full sm:w-auto"
          >
            <a href="/contact">Contact Sales</a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
