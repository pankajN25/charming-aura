"use client"

import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Salad, Dumbbell } from "lucide-react"

const nutritionPillars = [
  "Personalised macro & micronutrient targets",
  "Meal timing and food sequencing strategies",
  "Gut health and anti-inflammatory protocols",
  "Herbal and natural supplement guidance",
  "Mindful eating and hunger signal awareness",
]

const exercisePillars = [
  "Movement plans matched to your fitness level",
  "Resistance, cardio and flexibility balance",
  "Progressive overload built into weekly plans",
  "Active recovery and rest day protocols",
  "Exercise synced with your nutrition schedule",
]

const stats = [
  { value: "1000+", label: "Clients who achieved goals using this method" },
  { value: "8–12 Wks", label: "Average time to see measurable results" },
  { value: "95%", label: "Client satisfaction rate" },
]

export function MethodologySection() {
  const circumference = 2 * Math.PI * 45 // ≈ 282.74
  const eighty = circumference * 0.8      // ≈ 226.2
  const twenty = circumference * 0.2      // ≈ 56.5

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Proven Method
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            The Science Behind{" "}
            <span className="text-primary">Every Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            After 15+ years and 1,000+ client transformations, one truth stands above all: the ratio of nutrition to exercise is the single biggest predictor of results.
          </p>
        </motion.div>

        {/* Main Content: Donut + Two Columns */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-center mb-16">
          {/* Nutrition Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                <Salad className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-4xl font-bold text-primary leading-none">80%</p>
                <p className="text-sm text-muted-foreground font-medium mt-0.5">Nutrition</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              What you eat is the primary driver of every body transformation. No exercise routine can out-train a poor diet. We obsess over getting your nutrition absolutely right.
            </p>
            <ul className="space-y-2.5">
              {nutritionPillars.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Donut Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="relative">
              <svg
                viewBox="0 0 100 100"
                className="w-52 h-52 drop-shadow-xl"
                style={{ transform: "rotate(-90deg)" }}
              >
                {/* Track */}
                <circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="10"
                />
                {/* 80% arc — primary */}
                <circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="10"
                  strokeDasharray={`${eighty.toFixed(1)} ${circumference.toFixed(1)}`}
                  strokeLinecap="round"
                  className="text-primary"
                />
                {/* 20% arc — accent, positioned right after the 80% */}
                <circle
                  cx="50" cy="50" r="45"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="10"
                  strokeDasharray={`${(twenty - 4).toFixed(1)} ${circumference.toFixed(1)}`}
                  strokeDashoffset={`-${(eighty + 2).toFixed(1)}`}
                  strokeLinecap="round"
                />
              </svg>
              {/* Centre text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <TrendingUp className="w-6 h-6 text-primary mb-1" />
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider leading-tight">
                  Proven
                  <br />
                  Formula
                </p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary block" />
                <span className="text-foreground font-medium">Nutrition 80%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent block" />
                <span className="text-foreground font-medium">Exercise 20%</span>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-center text-sm text-muted-foreground italic max-w-xs leading-relaxed border-t border-border/50 pt-4">
              "You can't exercise your way out of a bad diet — but with the right nutrition, even moderate movement creates dramatic results."
              <footer className="mt-2 text-xs font-semibold text-primary not-italic">
                — Charming Aura Wellness Team
              </footer>
            </blockquote>
          </motion.div>

          {/* Exercise Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-4xl font-bold text-accent leading-none">20%</p>
                <p className="text-sm text-muted-foreground font-medium mt-0.5">Exercise</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Exercise amplifies the results your nutrition creates. We build movement plans that enhance metabolism, preserve muscle, and make your body respond faster.
            </p>
            <ul className="space-y-2.5">
              {exercisePillars.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{pt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-foreground rounded-3xl px-6 py-8 grid sm:grid-cols-3 gap-6 text-center"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
              <p className="text-background/70 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
