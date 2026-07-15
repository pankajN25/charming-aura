'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookingWidget } from '@/components/booking-widget'
import { CTASection } from '@/components/sections/cta'
import { CheckCircle2, Zap, Flame, Leaf, ArrowRight } from 'lucide-react'

export default function GutHealthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 to-background pt-40">
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
              Heal Your Gut, Transform Your Health
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Targeted nutrition protocols to fix bloating, IBS, acid reflux, and digestive discomfort — naturally, without medication dependency.
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
                { stat: '90%', label: 'See Improved Digestion in 4 Weeks' },
                { stat: '3–6 Wks', label: 'Average Bloating Reduction' },
                { stat: '150+', label: 'Gut Health Success Stories' },
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

      {/* The Challenge + Our Approach */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Understanding Gut Health & Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-primary" /> The Gut Health Challenge
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {['Chronic bloating, gas and abdominal pain', 'IBS affecting daily life and energy levels', 'Acid reflux, heartburn and GERD symptoms', 'Food intolerances and sensitivities', 'Leaky gut and poor nutrient absorption'].map(p => (
                  <li key={p} className="flex items-start gap-2"><span className="text-primary mt-1">•</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" /> Our Gut-First Solution
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {['Elimination and gut-reset nutrition protocols', 'Anti-inflammatory, gut-soothing meal plans', 'Probiotic and prebiotic food guidance', 'Food sensitivity identification and management', 'Herbal nutrition support for digestive healing'].map(p => (
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
          <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">Your Gut Healing Journey</h2>
          <div className="space-y-6">
            {[
              { phase: 'Week 1–2', title: 'Assessment & Gut Reset', points: ['Comprehensive digestive health assessment', 'Identify trigger foods and sensitivities', 'Begin elimination protocol', 'Introduce gut-healing foods'] },
              { phase: 'Week 3–6', title: 'Symptom Relief', points: ['Bloating and gas significantly reduced', 'Improved bowel regularity', 'Less acid reflux and discomfort', 'Energy levels stabilising'] },
              { phase: 'Month 2–3', title: 'Lasting Gut Health', points: ['Sustainable gut-friendly eating habits', 'Microbiome diversity improved', 'Nutrient absorption optimised', 'Symptoms 80%+ resolved'] },
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
          <BookingWidget title="Start Your Gut Healing" description="Book a free consultation and get a personalised gut health assessment" />
        </div>
      </section>

      <CTASection />
    </>
  )
}
