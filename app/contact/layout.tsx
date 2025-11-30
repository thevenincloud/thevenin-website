import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch with Thevenin',
  description: 'Contact Thevenin for demos, support, or inquiries. Our team is ready to help you with your enterprise infrastructure needs.',
  alternates: {
    canonical: 'https://thevenin.io/contact',
  },
  openGraph: {
    title: 'Contact Us - Get in Touch with Thevenin',
    description: 'Contact Thevenin for demos, support, or inquiries about enterprise infrastructure.',
    url: 'https://thevenin.io/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
