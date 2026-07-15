import { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays, CheckCircle2, Droplets, Leaf, RefreshCcw, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: '21-Day Wellness Challenge | Charming Aura Wellness',
  description:
    'Join the 21-Day Wellness Challenge with personalized diet planning, detox protocol, liquid day guidance, Zoom support, and expert follow-ups.',
  keywords:
    '21 day wellness challenge, detox diet plan, liquid day diet, wellness challenge India, nutrition challenge Pune',
}

const weeklyPlan = [
  {
    week: 'Week 1',
    title: 'Reset and Prepare',
    description:
      'We begin with a food routine reset, hydration focus, digestive support, and a simple personalized plan you can follow consistently.',
  },
  {
    week: 'Week 2',
    title: 'Detox and Metabolism Support',
    description:
      'The plan introduces guided detox support, lighter food structure, and coaching to reduce bloating, cravings, and energy crashes.',
  },
  {
    week: 'Week 3',
    title: 'Stabilize and Build Habits',
    description:
      'The final week focuses on sustainable meal timing, practical follow-ups, and habits that can continue after the challenge.',
  },
]

const inclusions = [
  'Personalized diet plan based on your goal',
  'Detox protocol explained step by step',
  'Liquid day structure with timing guidance',
  'Zoom support for accountability and questions',
  'Regular follow-ups and progress checks',
  'Practical habit coaching for food, sleep, energy, and routine',
]

const outcomes = [
  'Improved food discipline and routine',
  'Better hydration and lighter digestion',
  'Reduced bloating and cravings for many clients',
  'More energy through structured nutrition',
  'A clearer path for weight loss, weight gain, or wellness goals',
]

export default function TwentyOneDayChallengePage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold mb-6">
              Flagship Program
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
              21-Day Wellness Challenge
            </h1>
            <p className="text-primary-foreground/85 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
              A focused three-week program designed to reset nutrition habits, support detox, improve routine, and give you expert accountability through diet planning, Zoom support, and follow-ups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/contact">Enroll With Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Program Breakdown
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4">
              What Happens Each Week
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {weeklyPlan.map((week) => (
              <div key={week.week} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-primary">{week.week}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {week.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {week.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-background border border-border rounded-2xl p-8">
              <Leaf className="w-10 h-10 text-primary mb-5" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Detox Protocol Details
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The detox phase is guided under expert supervision and focuses on lighter food choices, hydration, digestion support, and reducing common triggers that create heaviness, cravings, or bloating.
              </p>
              <ul className="space-y-3">
                {['Simple food structure', 'Hydration reminders', 'Digestive comfort focus', 'Follow-up based adjustments'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <Droplets className="w-10 h-10 text-primary mb-5" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                Liquid Day Structure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Liquid day guidance gives clients a clear structure for timing, hydration, and approved liquid options. The plan is explained in advance so clients know exactly what to do.
              </p>
              <ul className="space-y-3">
                {['Morning hydration plan', 'Approved liquids and timing', 'Energy and hunger check-ins', 'Return-to-meals guidance'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                What's Included
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Diet Plan, Zoom Support, and Follow-Ups
              </h2>
              <div className="space-y-3">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <Video className="w-10 h-10 text-primary mb-5" />
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Live Accountability
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Zoom support helps clients ask questions, stay motivated, and stay consistent throughout the challenge. Follow-ups help adjust the plan to your response and routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <RefreshCcw className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Expected Outcomes
          </h2>
          <div className="grid md:grid-cols-5 gap-4 mb-10">
            {outcomes.map((outcome) => (
              <div key={outcome} className="bg-background border border-border rounded-lg p-5">
                <p className="text-sm font-medium text-foreground">{outcome}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Individual results vary by health condition, consistency, lifestyle, and personal goals. Your consultation helps the team recommend the right version of the challenge for you.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  )
}
