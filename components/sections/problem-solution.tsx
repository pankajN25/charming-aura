'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingDown, TrendingUp, ArrowRight, X, Check } from 'lucide-react'

const journeys = {
  loss: {
    label: 'Lose Weight',
    icon: TrendingDown,
    intro: "Stuck despite dieting? You're not alone. Here's exactly what we fix.",
    problems: [
      "Weight won't budge despite months of dieting",
      "Constant fatigue and low energy all day",
      "PCOD, diabetes, or cravings keep derailing progress",
    ],
    solutions: [
      "Personalised plan built around your metabolism, not a template",
      "Nutrient-dense Indian meals that sustain your energy all day",
      "Condition-aware protocols with monthly follow-ups & adjustments",
    ],
    href: '/services/weight-loss',
    cta: 'See Weight Loss Program',
  },
  gain: {
    label: 'Gain Weight',
    icon: TrendingUp,
    intro: "Eating more but not gaining? The problem isn't effort — it's the plan.",
    problems: [
      "Eating more food but still not gaining healthy weight",
      "Low appetite, poor digestion, or skipping meals",
      "Gaining fat from junk food instead of lean muscle",
    ],
    solutions: [
      "Calorie-smart Indian meals with the right protein & macro split",
      "Meal timing, gut-friendly foods, and easy calorie add-ons",
      "Lean weight gain plan with nutrition + movement guidance",
    ],
    href: '/services/weight-gain',
    cta: 'See Weight Gain Program',
  },
}

type JourneyKey = keyof typeof journeys

export function ProblemSolutionSection() {
  const [active, setActive] = useState<JourneyKey>('loss')
  const journey = journeys[active]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Your Goal</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Your Challenges, Our Proven Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell us your goal — we'll show exactly how we solve it.
          </p>
        </motion.div>

        {/* Toggle pills */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-muted rounded-xl gap-1">
            {(Object.keys(journeys) as JourneyKey[]).map((key) => {
              const J = journeys[key]
              const Icon = J.icon
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    active === key
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  I Want to {J.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Intro line */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`${active}-intro`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-center text-foreground font-semibold text-base md:text-lg mb-8"
          >
            {journey.intro}
          </motion.p>
        </AnimatePresence>

        {/* Two-column comparison */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {/* Column headers */}
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="flex items-center gap-2 px-5">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <X className="w-3.5 h-3.5 text-red-500" />
                </div>
                <span className="text-sm font-bold text-red-600 uppercase tracking-wide">The Problem</span>
              </div>
              <div className="flex items-center gap-2 px-5">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-sm font-bold text-primary uppercase tracking-wide">Our Solution</span>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-3">
              {journey.problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {/* Problem */}
                  <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-5 py-4">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm font-medium leading-snug">{problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-xl px-5 py-4">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-sm font-medium leading-snug">{journey.solutions[i]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href={journey.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold group"
          >
            {journey.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
