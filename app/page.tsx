import { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero"
import { TrustBadgesSection } from "@/components/sections/trust-badges"
import { ProblemSolutionSection } from "@/components/sections/problem-solution"
import { ServicesPreviewSection } from "@/components/sections/services-preview"
import { FeaturedProgramSection } from "@/components/sections/featured-program"
import { ZoomSessionsSection } from "@/components/sections/zoom-sessions"
import { ExerciseProgramsSection } from "@/components/sections/exercise-programs"
import { AboutPreviewSection } from "@/components/sections/about-preview"
import { MethodologySection } from "@/components/sections/methodology"
import { VideoTestimonialsSection } from "@/components/sections/video-testimonials"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CaseStudiesSection } from "@/components/sections/case-studies"
import { GuaranteeSection } from "@/components/sections/guarantee"
import { NewsletterSignupSection } from "@/components/sections/newsletter-signup"
import { AreasServedSection } from "@/components/sections/areas-served"
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
      <ZoomSessionsSection />
      <ExerciseProgramsSection />
      <AboutPreviewSection />
      <MethodologySection />
      <VideoTestimonialsSection />
      <CaseStudiesSection />
      <GuaranteeSection />
      <NewsletterSignupSection />
      <AreasServedSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
