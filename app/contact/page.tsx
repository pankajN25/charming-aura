import type { Metadata } from 'next'
import { businessInfo } from '@/lib/business-info'
import { ContactPageSchema } from '@/components/schema-markup'
import { ContactClient } from './contact-client'

export const metadata: Metadata = {
  title: 'Contact Our Dietitian in Thergaon, PCMC | Charming Aura',
  description:
    'Visit our diet clinic in Thergaon, Pimpri-Chinchwad on Aundh-Ravet BRTS Road, or book an online Zoom consultation. Call +91 844641 8611. First session FREE.',
  keywords:
    'dietitian near me Thergaon, diet clinic address Pimpri-Chinchwad, book dietitian appointment Pune, nutritionist contact number Pune, free diet consultation Thergaon, online diet consultation booking India',
  alternates: {
    canonical: `${businessInfo.website}/contact`,
  },
  openGraph: {
    type: 'website',
    url: `${businessInfo.website}/contact`,
    title: 'Contact Our Dietitian in Thergaon, PCMC | Charming Aura',
    description:
      'Visit our diet clinic in Thergaon, Pimpri-Chinchwad, or book a free online Zoom consultation. Call +91 844641 8611.',
    siteName: 'Charming Aura Wellness',
    locale: 'en_IN',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Charming Aura Wellness' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Our Dietitian in Thergaon, PCMC | Charming Aura',
    description:
      'Visit our diet clinic in Thergaon, Pimpri-Chinchwad, or book a free online Zoom consultation.',
    images: ['/og-image.jpg'],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <ContactClient />
    </>
  )
}
