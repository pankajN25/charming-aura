import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Calendar, Users, TrendingDown, Flame, Heart, Clock, PhoneCall } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  title: 'Weight Loss Diet Plans | Certified Nutritionist in Pune | Charming Aura',
  description: `Transform your body with personalized weight loss diet plans from certified experts. Science-based nutrition, real results. ${businessInfo.transformedClients} client journeys guided. Book free consultation.`,
  keywords: 'weight loss diet plan, nutritionist Pune, weight loss program, lose weight naturally, diet consultation, healthy weight loss Thergaon',
}

const benefits = [
  'Sustainable weight loss without crash diets',
  'Personalized nutrition plan for your body type',
  'Monthly progress tracking and adjustments',
  'Herbal nutrition integrated into your plan',
  'Live Zoom coaching — 3 sessions daily',
  'Science-backed, proven approach',
]

const processSteps = [
  {
    step: 1,
    icon: PhoneCall,
    title: 'FREE Initial Consultation',
    description: 'A 15-minute conversation to understand your health history, current lifestyle, goals, and preferences. Zero cost, zero commitment.',
  },
  {
    step: 2,
    icon: Heart,
    title: 'Full Health Assessment',
    description: 'Detailed analysis of your body composition, metabolism, dietary habits, and any underlying conditions like thyroid or PCOD.',
  },
  {
    step: 3,
    icon: Calendar,
    title: 'Your Personalised Plan',
    description: 'A custom nutrition plan built around Indian foods you already enjoy — no bland salads, no starvation. Delivered within 48 hours.',
  },
  {
    step: 4,
    icon: Users,
    title: 'Live Zoom Coaching',
    description: 'Join our daily group sessions (7am / 1pm / 7pm) for real-time guidance, meal reviews, and craving management.',
  },
  {
    step: 5,
    icon: TrendingDown,
    title: 'Progress & Refinement',
    description: 'Monthly check-ins and plan adjustments to keep your results moving. We adapt as your body adapts.',
  },
]

const results = [
  { value: '8–12 kg', label: 'Average Loss', sub: 'in 3 months' },
  { value: '95%', label: 'Client Success Rate', sub: 'achieve their goal' },
  { value: '88%', label: 'Results Maintained', sub: 'after 1 year' },
  { value: '500+', label: 'Clients Transformed', sub: 'across India & abroad' },
]

const included = [
  { icon: Calendar, title: 'Personalised Diet Plan', desc: 'Built around your body, food preferences, and schedule — updated monthly.' },
  { icon: Users, title: 'Live Group Zoom Sessions', desc: '3 sessions every day — morning, afternoon, evening. Join as often as you need.' },
  { icon: Flame, title: 'Herbal Nutrition Protocol', desc: 'Natural herbs like Triphala, Amla, and Turmeric integrated to boost your metabolism.' },
  { icon: Heart, title: 'WhatsApp Support', desc: 'Direct access to your coach between sessions for quick questions and accountability.' },
  { icon: TrendingDown, title: 'Monthly Progress Reviews', desc: 'Track weight, measurements, energy levels, and adjust the plan accordingly.' },
  { icon: Clock, title: 'FREE First Consultation', desc: 'Your first session is completely free. No fees, no pressure — just a real conversation.' },
]

export default function WeightLossPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-foreground text-background py-16 md:py-20 pt-36">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Weight Loss
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Personalized Weight Loss Diet Plans
              </h1>
              <p className="text-lg text-background/80 leading-relaxed mb-8">
                Transform your body without restrictive diets. Science-based nutrition plans tailored to your unique metabolism, lifestyle, and Indian food preferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Book FREE Consultation
                </Link>
                <a
                  href={businessInfo.phoneHref}
                  className="inline-block px-7 py-3.5 border border-background/40 text-background rounded-lg hover:bg-background/10 transition-colors font-medium"
                >
                  {businessInfo.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/weight-management.jpg"
                alt="Weight loss nutrition coaching"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4">
                <p className="text-foreground text-sm font-semibold">First consultation is completely FREE</p>
                <p className="text-muted-foreground text-xs mt-0.5">No hidden fees · No commitment required</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {results.map((r, i) => (
              <div key={i}>
                <div className="text-3xl font-bold">{r.value}</div>
                <div className="text-sm font-semibold mt-1">{r.label}</div>
                <div className="text-xs text-primary-foreground/70 mt-0.5">{r.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/nutritionist.jpg"
                alt="Certified nutritionist Pune"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Our Approach Works
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Most diets fail because they ignore your biology, your culture, and your life. We build plans around Indian foods you already love — dal, roti, sabzi — while fixing the root causes of weight gain, not just the symptoms.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Everything Included in Your Program
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              No hidden tiers. No upsells. Every client gets full access to our complete weight loss system.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Generic Diets Fail */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Why Generic Diets Fail
              </h2>
              <div className="space-y-4">
                {[
                  'One-size-fits-all ignores your unique metabolism',
                  'Restrictive diets lead to yo-yo weight cycling',
                  'No personalised support or mid-course adjustments',
                  'Results don\'t last because habits don\'t change',
                  'Indian food preferences are completely ignored',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                What We Do Differently
              </h2>
              <div className="space-y-4">
                {[
                  'Plan built around your metabolism, not a template',
                  'Sustainable habits — no starvation, no crash diets',
                  'Live coaching sessions keep you accountable daily',
                  'Plan evolves with your body every month',
                  'Indian foods you love, optimised for fat loss',
                ].map((point, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Your Journey With Us
            </h2>
            <p className="text-muted-foreground">From your first free call to long-term results — here's how it works.</p>
          </div>
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <div key={i} className="flex gap-5 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                    {step.step}
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-6 last:pb-0">
                  <div className="flex items-center gap-2 mb-1">
                    <step.icon className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
            First Session FREE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-background/80 text-lg mb-8 leading-relaxed">
            Join {businessInfo.transformedClients} clients who have transformed their health with personalised nutrition. Your first consultation is completely free — no fees, no commitment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
            >
              Book FREE Consultation
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="inline-block px-8 py-4 border border-background/30 text-background rounded-lg hover:bg-background/10 transition-colors font-medium text-lg"
            >
              {businessInfo.phoneDisplay}
            </a>
          </div>
          <p className="text-background/50 text-sm mt-6">Available online (Zoom) and in-person at Thergaon, Pimpri-Chinchwad</p>
        </div>
      </section>
    </>
  )
}
