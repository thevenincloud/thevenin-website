import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Flexible Plans for Every Team Size',
  description: 'Explore Thevenin pricing plans: Dev, Prod, and Enterprise tiers. Pay only for what you use with transparent, consumption-based pricing starting at €25/vCPU.',
  alternates: {
    canonical: 'https://thevenin.io/pricing',
  },
  openGraph: {
    title: 'Pricing - Flexible Plans for Every Team Size | Thevenin',
    description: 'Transparent, consumption-based pricing. Dev, Prod, and Enterprise tiers starting at €25/vCPU.',
    url: 'https://thevenin.io/pricing',
  },
  keywords: [
    'thevenin pricing',
    'cloud platform pricing',
    'consumption-based pricing',
    'pay as you go infrastructure',
    'enterprise platform cost',
    'devops platform pricing',
  ],
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
