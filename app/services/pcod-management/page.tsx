'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookingWidget } from '@/components/booking-widget'
import { CTASection } from '@/components/sections/cta'
import { CheckCircle2, Zap, Users, Heart, Brain, Activity } from 'lucide-react'

export default function PCODManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Specialized Program
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Take Control of Your PCOD
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Science-backed nutrition strategies to balance hormones, reduce symptoms, and improve your quality of life naturally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { stat: '85%', label: 'See Symptom Improvement' },
                { stat: '3 Months', label: 'To See Hormonal Balance' },
                { stat: '200+', label: 'PCOD Success Stories' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background/50 border border-border/50 rounded-lg p-4"
                >
                  <p className="font-bold text-2xl text-foreground">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Understanding PCOD */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            Understanding PCOD & Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                The PCOD Challenge
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Insulin resistance affecting 70% of PCOD women</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hormonal imbalance causing irregular cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Weight gain and difficulty losing weight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fertility concerns and emotional stress</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Our Solution
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0 flex-shrink-0" />
                  <span>Low glycemic index nutrition plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0 flex-shrink-0" />
                  <span>Targeted micronutrient supplementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0 flex-shrink-0" />
                  <span>Stress management and sleep optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0 flex-shrink-0" />
                  <span>Fertility optimization when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            What to Expect: 3-Month Transformation
          </h2>

          <div className="space-y-6">
            {[
              {
                month: 'Week 1-2',
                title: 'Foundation & Adjustment',
                points: [
                  'Comprehensive health assessment',
                  'Customized low-GI meal plan',
                  'Energy levels stabilize',
                ],
              },
              {
                month: 'Week 3-6',
                title: 'Initial Changes',
                points: [
                  'Reduced bloating and inflammation',
                  'Better energy and mood',
                  'Improved digestion',
                  'Weight loss begins',
                ],
              },
              {
                month: 'Month 2-3',
                title: 'Significant Improvements',
                points: [
                  'Hormonal balance improving',
                  'Regular menstrual cycles',
                  'Visible skin improvement',
                  '4-8 kg weight loss',
                  'Reduced PCOD symptoms by 70%',
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                  {phase.month}
                </Badge>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            Investment in Your Health
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Core Program',
                price: '₹19,999',
                duration: '3 Months',
                features: [
                  'Personalized low-GI meal plans',
                  'Monthly nutrition consultations',
                  'Supplement guidance',
                  'WhatsApp support',
                  'Progress tracking',
                ],
              },
              {
                name: 'Premium Program',
                price: '₹34,999',
                duration: '3 Months',
                badge: 'Most Popular',
                features: [
                  'Everything in Core',
                  'Fortnightly video consultations',
                  'Lab report analysis',
                  'Fertility optimization (if needed)',
                  'Lifetime support access',
                  'Money-back guarantee',
                ],
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`p-8 h-full flex flex-col ${i === 1 ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}`}>
                  {plan.badge && (
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 w-fit">
                      {plan.badge}
                    </Badge>
                  )}
                  <h3 className="font-semibold text-2xl text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {plan.duration}
                  </p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={i === 1 ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <BookingWidget
            title="Ready for Change?"
            description="Schedule your free PCOD assessment and get a personalized action plan"
          />
        </div>
      </section>

      <CTASection />
    </>
  )
}
