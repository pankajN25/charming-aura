'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { CalendarDays, CheckCircle2, Droplets, Video } from 'lucide-react'

const inclusions = [
  'Personalized diet plan',
  'Detox and liquid day guidance',
  'Zoom support and follow-ups',
  'Habit reset for energy, gut health, and routine',
]

export function FeaturedProgramSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch"
        >
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-foreground/10 rounded-full" />
            <div className="relative">
              <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-semibold mb-6">
                Featured Program
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-5 text-balance">
                21-Day Wellness Challenge
              </h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed mb-8 max-w-2xl">
                A focused three-week reset with diet planning, detox support, liquid day structure, Zoom guidance, and follow-ups to help clients build momentum quickly.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {inclusions.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Link href="/programs/21-day-challenge">View Challenge Details</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="/contact">Enroll With Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              {
                icon: CalendarDays,
                label: '21 Days',
                text: 'Three structured weeks to reset food habits and routine.',
              },
              {
                icon: Droplets,
                label: 'Detox + Liquid Day',
                text: 'Guided protocol with practical food and hydration support.',
              },
              {
                icon: Video,
                label: 'Zoom Support',
                text: 'Live coaching touchpoints and progress follow-ups.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="bg-card border border-border rounded-2xl p-6">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {item.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
