import type { Metadata } from 'next'
import Link from 'next/link'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Privacy Policy | Charming Aura Wellness',
  description: 'Privacy policy for Charming Aura Wellness & Nutrition.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="pt-40 pb-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
          Privacy Policy
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          How We Protect Your Information
        </h1>
        <p className="text-muted-foreground mb-10">
          Last updated: May 16, 2026
        </p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Information We Collect
            </h2>
            <p>
              When you contact us, book a consultation, or submit a wellness inquiry, we may collect your name, email address, phone number, age, health goal, and any message you choose to share.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              How We Use Your Information
            </h2>
            <p>
              We use your information to respond to inquiries, schedule consultations, understand your wellness goals, provide nutrition and wellness support, and improve our services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Sharing Your Information
            </h2>
            <p>
              We do not sell your personal information. We may share limited details only with trusted service providers when needed to manage bookings, communication, or website operations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Health Information
            </h2>
            <p>
              Any health details you share are used only to guide your consultation and wellness planning. Please do not submit emergency medical information through website forms.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
              Contact Us
            </h2>
            <p>
              For privacy questions, contact us at{' '}
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
            Contact Charming Aura Wellness
          </Link>
        </div>
      </div>
    </section>
  )
}
