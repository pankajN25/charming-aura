import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Dumbbell, HeartPulse, Target, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/sections/cta'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Weight Gain Program | Healthy Weight Gain Diet Plan | Charming Aura',
  description:
    'Healthy weight gain program with personalized diet plans, protein planning, digestion support, and expert wellness coaching from Charming Aura Wellness.',
  keywords:
    'weight gain diet plan, healthy weight gain, nutritionist for weight gain, muscle gain diet, weight gain program Pune',
}

const benefits = [
  'Personalized calorie and protein planning',
  'Meal timing support for low appetite',
  'Gut-friendly foods to improve digestion',
  'Healthy weight gain without junk-food bulking',
  'Movement guidance for strength and lean mass',
  'Regular follow-ups and plan adjustments',
]

const programPillars = [
  {
    icon: Utensils,
    title: 'Food That Fits Your Appetite',
    description:
      'We build meals around your routine, food preferences, digestion, and appetite so gaining weight feels practical.',
  },
  {
    icon: Dumbbell,
    title: 'Lean Strength Support',
    description:
      'Nutrition is paired with simple movement guidance to support strength, shape, and healthier body composition.',
  },
  {
    icon: HeartPulse,
    title: 'Gut and Energy Focus',
    description:
      'We look at bloating, skipped meals, low energy, and sleep so the plan supports your full wellness journey.',
  },
]

const processSteps = [
  'Free consultation and current diet review',
  'Body goal, appetite, and lifestyle assessment',
  'Custom weight gain meal plan with easy add-ons',
  'Weekly follow-ups to improve consistency',
  'Adjustments for digestion, energy, and progress',
]

export default function WeightGainPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Weight Gain Program
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
                Gain Healthy Weight With a Plan Built for Your Body
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Struggling to gain weight can be just as frustrating as trying to lose it. Our program supports healthy weight gain through personalized meals, protein planning, digestion support, and steady expert follow-ups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Book FREE Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/diet-plan.jpg"
                alt="Healthy nutrition plan for weight gain"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                What This Program Helps With
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {programPillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div key={pillar.title} className="border border-border rounded-lg p-6 bg-card">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              A Practical Path to Healthy Weight Gain
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="bg-background border border-border rounded-lg p-5">
                <div className="text-3xl font-bold text-primary/30 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-sm text-foreground font-medium">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-card border border-border rounded-lg p-8 text-center">
            <Target className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
              Built for Your Body, Not a Generic Chart
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every plan is adjusted around your food preferences, schedule, appetite, digestion, activity, and progress. The goal is healthy gain that feels realistic to follow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Weight Gain Journey?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join {businessInfo.transformedClients} clients who have received personalized support for better nutrition, energy, and wellness.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  )
}
