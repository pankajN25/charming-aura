'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BookingWidget } from '@/components/booking-widget'
import { CTASection } from '@/components/sections/cta'
import { CheckCircle2, Zap, Activity, Heart, ArrowRight } from 'lucide-react'

export default function DiabetesNutritionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-40">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Specialized Program</Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Control Diabetes Through Smart Nutrition
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Evidence-based nutritional strategies to stabilise blood sugar, reduce HbA1c, and regain your energy — without crash diets or medication dependency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">All Services <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { stat: '1.2%', label: 'Average HbA1c Reduction' },
                { stat: '8–12 Wks', label: 'To See Glucose Control' },
                { stat: '100+', label: 'Diabetes Clients Helped' },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-background/50 border border-border/50 rounded-lg p-4">
                  <p className="font-bold text-2xl text-foreground">{item.stat}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Understanding Diabetes & Our Nutrition Approach</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" /> The Diabetes Challenge
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {['Unpredictable blood sugar spikes and crashes', 'Constant fatigue and low energy levels', 'Risk of complications from poorly managed glucose', 'Weight gain from insulin resistance', 'Overwhelming conflicting diet advice'].map(p => (
                  <li key={p} className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" /> Our Nutrition Solution
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {['Low glycaemic index and glycaemic load planning', 'Smart carbohydrate management and portioning', 'Balanced macronutrient distribution for glucose stability', 'Fibre-first meal sequencing to blunt sugar spikes', 'Herbal and micronutrient support for insulin sensitivity'].map(p => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 mt-0 flex-shrink-0" /><span>{p}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Your 3-Month Glucose Control Journey</h2>
          <div className="space-y-6">
            {[
              { phase: 'Week 1–2', title: 'Assessment & Baseline', points: ['Understand your current eating pattern', 'Set realistic personal wellness goals', 'Begin low-GI meal plan', 'Reduce high-spike trigger foods'] },
              { phase: 'Week 3–8', title: 'Glucose Stabilisation', points: ['Fasting and post-meal glucose improving', 'Energy crashes significantly reduced', 'Cravings for refined carbs diminishing', 'Weight beginning to normalise'] },
              { phase: 'Month 2–3', title: 'Sustained Habits', points: ['Balanced everyday eating routine', 'Consistent energy throughout the day', 'Better portion and carb awareness', 'Lifestyle habits locked in for the long term'] },
            ].map((phase, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border-l-4 border-primary pl-6 py-4">
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">{phase.phase}</Badge>
                <h3 className="font-semibold text-lg text-foreground mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.points.map(pt => (
                    <li key={pt} className="flex items-start gap-2 text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <BookingWidget title="Take Control of Your Diabetes" description="Book a free consultation for a personalised glucose management nutrition plan" />
        </div>
      </section>

      <CTASection />
    </>
  )
}
