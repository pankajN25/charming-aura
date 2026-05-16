import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { TrustBadgesSection } from "@/components/sections/trust-badges"
import { ProblemSolutionSection } from "@/components/sections/problem-solution"
import { ServicesPreviewSection } from "@/components/sections/services-preview"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { NewsletterSignupSection } from "@/components/sections/newsletter-signup"
import { FAQSection } from "@/components/sections/faq"
import { CTASection } from "@/components/sections/cta"
import { FAQSchema } from "@/components/schema-markup"
import { generateMetadata as generatePageMetadata } from "@/lib/seo-config"

export const metadata: Metadata = generatePageMetadata('home')

export default function HomePage() {
  return (
    <>
      <FAQSchema />
      <HeroSection />
      <TrustBadgesSection />
      <ProblemSolutionSection />
      <ServicesPreviewSection />
      <AboutPreviewSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <GuaranteeSection />
      <NewsletterSignupSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
