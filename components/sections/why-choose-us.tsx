"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PhoneCall, ClipboardList, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"

const steps = [
  {
    step: "01",
    icon: PhoneCall,
    title: "Book Your FREE Call",
    description: "A 15-minute conversation with our certified coach. No fees, no forms — just a real talk about your goals, challenges, and lifestyle.",
    bullets: ["100% free, no commitment", "Available online & in-person", "15 minutes is all it takes"],
    accent: false,
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Get Your Personalised Plan",
    description: "We build a custom nutrition plan around your body, Indian food preferences, and health conditions — delivered within 48 hours.",
    bullets: ["Tailored to your metabolism", "Real Indian foods you love", "Includes herbal nutrition"],
    accent: true,
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Transform With Daily Support",
    description: "Join live Zoom sessions every day, track your progress, and get real-time guidance from your coach at every step of the journey.",
    bullets: ["3 live sessions per day", "WhatsApp coach access", "Monthly plan reviews"],
    accent: false,
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Start Your Transformation in{" "}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From your very first free call to lasting results — here's exactly how we work together.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-[calc(33.33%+1.5rem)] right-[calc(33.33%+1.5rem)] h-px bg-gradient-to-r from-border via-primary/30 to-border z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative z-10 rounded-2xl p-7 border transition-all duration-300 ${
                step.accent
                  ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 md:-translate-y-3"
                  : "bg-card border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Step number + icon */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
                    step.accent ? "bg-primary-foreground/15" : "bg-primary/10"
                  }`}
                >
                  <step.icon className={`w-7 h-7 ${step.accent ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <span
                  className={`text-6xl font-bold font-serif leading-none select-none ${
                    step.accent ? "text-primary-foreground/15" : "text-foreground/8"
                  }`}
                >
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <h3
                className={`font-serif text-xl font-bold mb-3 ${
                  step.accent ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-5 ${
                  step.accent ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {step.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {step.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 ${
                        step.accent ? "text-primary-foreground/70" : "text-primary"
                      }`}
                    />
                    <span className={step.accent ? "text-primary-foreground/90" : "text-foreground"}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {step.accent && (
                <div className="mt-5 pt-4 border-t border-primary-foreground/20">
                  <span className="text-xs text-primary-foreground/70 font-medium">⭐ Most clients start here</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold text-lg group shadow-lg shadow-primary/20"
          >
            Begin Step 1 — Book FREE Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-muted-foreground text-sm mt-4">
            No credit card · No commitment · 15 minutes · Completely free
          </p>
        </motion.div>
      </div>
    </section>
  )
}
