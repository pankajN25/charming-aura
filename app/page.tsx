import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { TrustBadgesSection } from "@/components/sections/trust-badges"
import { ProblemSolutionSection } from "@/components/sections/problem-solution"
import { ServicesPreviewSection } from "@/components/sections/services-preview"
import { FeaturedProgramSection } from "@/components/sections/featured-program"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { TestimonialsSection } from "@/components/sections/testimonials"
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
      <FeaturedProgramSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
