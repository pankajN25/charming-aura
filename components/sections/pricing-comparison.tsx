'use client'

import { Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Basic',
    price: '₹4,999',
    period: 'per month',
    description: '3-month foundation program',
    features: [
      { text: 'Personalized Nutrition Plan', included: true },
      { text: 'Monthly consultations (2)', included: true },
      { text: 'WhatsApp support', included: true },
      { text: 'Diet tracking app access', included: false },
      { text: 'Fitness coaching', included: false },
      { text: '24/7 priority support', included: false },
      { text: 'Progress analytics', included: false },
    ],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '₹8,999',
    period: 'per month',
    description: '6-month comprehensive program',
    features: [
      { text: 'Personalized Nutrition Plan', included: true },
      { text: 'Weekly consultations (4)', included: true },
      { text: 'WhatsApp + Email support', included: true },
      { text: 'Diet tracking app access', included: true },
      { text: 'Fitness guidance', included: true },
      { text: 'Priority support', included: true },
      { text: 'Progress analytics', included: false },
    ],
    highlight: true,
  },
  {
    name: 'VIP',
    price: '₹14,999',
    period: 'per month',
    description: '12-month transformation program',
    features: [
      { text: 'Personalized Nutrition Plan', included: true },
      { text: 'Bi-weekly consultations (8)', included: true },
      { text: '24/7 WhatsApp support', included: true },
      { text: 'Diet tracking app access', included: true },
      { text: 'Complete fitness coaching', included: true },
      { text: '24/7 priority support', included: true },
      { text: 'Detailed progress analytics', included: true },
    ],
    highlight: false,
  },
]

export function PricingComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Affordable Plans for Every Budget
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your goals and budget. All plans include our personalized approach and expert guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-transform hover:scale-105 ${
                plan.highlight
                  ? 'bg-primary text-primary-foreground ring-2 ring-primary/50 scale-105 shadow-2xl'
                  : 'bg-card border border-border'
              }`}
            >
              {/* Plan Header */}
              <div className={`p-6 ${plan.highlight ? 'bg-primary' : 'bg-muted/50'}`}>
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="p-6 border-b border-border/30">
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <div className={plan.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}>
                  {plan.period}
                </div>
              </div>

              {/* Features */}
              <div className="p-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-primary-foreground' : 'text-primary'}`} />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-6 border-t border-border/30">
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlight ? 'default' : 'outline'}
                >
                  <a href="/contact">Get Started</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Message */}
        <div className="text-center p-8 bg-background rounded-lg border border-border">
          <p className="text-foreground mb-2">
            Not sure which plan is right for you?
          </p>
          <a href="/contact" className="text-primary font-semibold hover:text-primary/80">
            Schedule a free 15-minute consultation with our specialists
          </a>
        </div>
      </div>
    </section>
  )
}
