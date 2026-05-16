import { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2, Zap, Target, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PricingComparisonSection } from '@/components/sections/pricing-comparison'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Weight Loss Diet Plans | Certified Nutritionist in Pune | Charming Aura',
  description:
    `Transform your body with personalized weight loss diet plans from certified experts. Science-based nutrition, real results. ${businessInfo.transformedClients} client journeys guided. Book free consultation.`,
  keywords:
    'weight loss diet plan, nutritionist, weight loss program, lose weight naturally, diet consultation, healthy weight loss',
}

const benefits = [
  'Sustainable weight loss without crash diets',
  'Personalized nutrition plans for your body type',
  'Monthly progress tracking and adjustments',
  'Expert guidance every step of the way',
  'Lifetime maintenance support',
  'Science-backed, proven approach',
]

const processSteps = [
  {
    step: 1,
    title: 'Initial Assessment',
    description: 'Complete health analysis, food preferences, lifestyle evaluation',
  },
  {
    step: 2,
    title: 'Personalized Plan',
    description: 'Custom nutrition plan designed specifically for your metabolism',
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Start your plan with weekly support and guidance',
  },
  {
    step: 4,
    title: 'Progress & Adjust',
    description: 'Monthly reviews, plan adjustments, continuous optimization',
  },
  {
    step: 5,
    title: 'Maintenance',
    description: 'Long-term support to maintain your results permanently',
  },
]

const results = [
  {
    metric: 'Average Weight Loss',
    value: '8-12 kg',
    period: '3 months',
  },
  {
    metric: 'Client Success Rate',
    value: '95%',
    period: 'achieve goals',
  },
  {
    metric: 'Results Maintained',
    value: '88%',
    period: 'after 1 year',
  },
]

export default function WeightLossPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-foreground text-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Personalized Weight Loss Diet Plans
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              Transform your body without restrictive diets. Science-based nutrition plans tailored to your unique metabolism and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Sustainable Weight Loss, Real Results
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Forget calorie counting and strict diets. Our science-based approach focuses on understanding your body, optimizing nutrition, and building sustainable habits that last a lifetime.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
                <Link href="/contact">Start Your Weight Loss Journey</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/weight-management.jpg"
                  alt="Weight management and fitness"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Proven Results
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {results.map((result, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{result.value}</div>
                <p className="font-semibold text-foreground mb-2">{result.metric}</p>
                <p className="text-sm text-muted-foreground">{result.period}</p>
              </div>
            ))}
          </div>

          <div className="bg-background border border-border rounded-lg p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Why Generic Diets Fail
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>One-size-fits-all approach ignores your unique metabolism</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Restrictive diets lead to yo-yo weight cycling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>No personalized support or adjustments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Results don't last because habits don't change</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Proven Weight Loss Process
          </h2>

          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingComparisonSection />

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Body?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join {businessInfo.transformedClients} clients who have worked toward better wellbeing with personalized nutrition and sustainable habits. Your journey starts with a single consultation.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
