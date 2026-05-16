'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookingWidget } from '@/components/booking-widget'
import { CTASection } from '@/components/sections/cta'
import { CheckCircle2, Zap, Users, TrendingDown, Clock, Shield, Heart } from 'lucide-react'
import Image from 'next/image'

export function WeightManagementClient() {
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
              Most Popular Service
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Lose Weight Without Losing Your Life
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Sustainable weight loss that actually sticks. Our personalized approach addresses your unique metabolism, lifestyle, and goals—not just calories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline">
                See Success Stories
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              {[
                { icon: TrendingDown, stat: '12-18kg', label: 'Avg Weight Loss' },
                { icon: Clock, stat: '4 Months', label: 'Average Timeline' },
                { icon: Users, stat: '600+', label: 'Success Stories' },
                { icon: Heart, stat: '98%', label: 'Would Recommend' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-background/50 border border-border/50 rounded-lg p-4"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="font-bold text-2xl text-foreground">{item.stat}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            Why Weight Loss Fails (And How We Fix It)
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                problem: 'Calorie Restriction',
                solution: 'Personalized nutrition based on your metabolism',
              },
              {
                problem: 'One-Size-Fits-All Diets',
                solution: 'Tailored plans for your lifestyle and preferences',
              },
              {
                problem: 'Lack of Support',
                solution: 'Monthly check-ins with certified nutritionists',
              },
              {
                problem: 'Quick Fixes',
                solution: 'Sustainable habits for lifetime results',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-4 border-primary pl-6 py-4"
              >
                <p className="text-red-600 font-semibold mb-2 line-through">
                  {item.problem}
                </p>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-foreground font-semibold">
                    {item.solution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            Our 4-Month Transformation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                month: 'Month 1',
                title: 'Assessment & Planning',
                steps: [
                  'Comprehensive health analysis',
                  'Metabolism testing',
                  'Custom meal plan creation',
                  'Habit tracking setup',
                ],
              },
              {
                month: 'Month 2',
                title: 'Foundation Building',
                steps: [
                  'Weight loss acceleration',
                  'Energy optimization',
                  'Cravings management',
                  'Weekly support calls',
                ],
              },
              {
                month: 'Month 3',
                title: 'Momentum & Confidence',
                steps: [
                  'Visible body changes',
                  'Clothes fitting differently',
                  'Energy boost noticeable',
                  'Habit solidification',
                ],
              },
              {
                month: 'Month 4',
                title: 'Sustainability & Beyond',
                steps: [
                  'Maintenance planning',
                  'Long-term strategy',
                  'Lifetime support access',
                  'Results locked in',
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 border-primary/20">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    {phase.month}
                  </Badge>
                  <h3 className="font-semibold text-lg text-foreground mb-4">
                    {phase.title}
                  </h3>
                  <ul className="space-y-2">
                    {phase.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            What You Get With Our Program
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: 'Personalized Meal Plans',
                description: 'Custom nutrition plans adjusted monthly based on progress',
              },
              {
                icon: Clock,
                title: 'Monthly Check-ins',
                description: 'Progress tracking, plan adjustments, and motivation calls',
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'Access to our WhatsApp support group and weekly webinars',
              },
              {
                icon: Heart,
                title: 'Lifestyle Guidance',
                description: 'Tips on exercise, sleep, stress management, and hydration',
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <Icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            Transparent Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '₹9,999',
                duration: '1 Month',
                features: [
                  'Personalized meal plan',
                  'Email support',
                  'Weekly progress tracking',
                  'Basic lifestyle tips',
                ],
              },
              {
                name: 'Popular',
                price: '₹29,999',
                duration: '3 Months',
                badge: 'Best Value',
                features: [
                  'Monthly customized plans',
                  'Biweekly video calls',
                  'WhatsApp support',
                  'Lifestyle modifications',
                  'Metabolism optimization',
                ],
              },
              {
                name: 'Complete',
                price: '₹49,999',
                duration: '4 Months',
                features: [
                  'Everything in Popular',
                  'Weekly personal calls',
                  'Fitness guidance',
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

      {/* Booking Widget */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <BookingWidget
            title="Ready to Transform?"
            description="Schedule your free consultation and get a personalized plan"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'How fast will I lose weight?',
                a: 'Most clients lose 1-2 kg per week in the first month, then 0.5-1 kg weekly. Average weight loss is 12-18kg in 4 months.',
              },
              {
                q: 'Will I feel hungry on your meal plans?',
                a: 'No. Our plans are designed to keep you satisfied while in a calorie deficit. We focus on whole foods and adequate protein.',
              },
              {
                q: 'Do I need to exercise?',
                a: 'Weight loss is 80% nutrition, 20% exercise. We recommend light activities but focus on diet for results.',
              },
              {
                q: 'What if I have dietary restrictions?',
                a: 'We create plans for vegetarian, vegan, gluten-free, and other dietary needs. Customization is our specialty.',
              },
              {
                q: 'Is there a guarantee?',
                a: 'Yes! 30-day money-back guarantee if you follow the plan and don\'t see results. Plus lifetime support access.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <details className="group border-b border-border/50 pb-4">
                  <summary className="cursor-pointer font-semibold text-foreground flex items-center justify-between py-3 hover:text-primary transition-colors">
                    {item.q}
                    <span className="group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-3 pb-3">
                    {item.a}
                  </p>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
