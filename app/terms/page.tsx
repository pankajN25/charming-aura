import type { Metadata } from 'next'
import Link from 'next/link'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Terms of Service | Charming Aura Wellness',
  description: 'Terms of service for Charming Aura Wellness & Nutrition.',
}

export default function TermsOfServicePage() {
  return (
    <section className="pt-40 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
          Terms of Service
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Website and Consultation Terms
        </h1>
        <p className="text-muted-foreground mb-10">
          Last updated: May 16, 2026
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Use of This Website
            </h2>
            <p>
              By using this website, you agree to use it for lawful purposes and to provide accurate information when submitting forms or booking a consultation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Wellness Information
            </h2>
            <p>
              Content on this website is for general wellness education and does not replace medical diagnosis, treatment, or advice from a qualified medical professional.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Consultations and Results
            </h2>
            <p>
              Nutrition and wellness results vary by person and depend on health status, consistency, lifestyle, and other individual factors. We do not guarantee specific results.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Bookings and Communication
            </h2>
            <p>
              Consultation bookings may be managed through our booking provider. By booking or submitting a form, you allow us to contact you about your inquiry or appointment.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Contact Us
            </h2>
            <p>
              For questions about these terms, contact us at{' '}
              <a href={`mailto:${businessInfo.email}`} className="text-primary hover:underline">
                {businessInfo.email}
              </a>
              {' '}or call{' '}
              <a href={businessInfo.phoneHref} className="text-primary hover:underline">
                {businessInfo.phoneDisplay}
              </a>
              .
            </p>
          </div>

          <Link href="/contact" className="inline-flex text-primary font-semibold hover:underline">
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
