"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Video, MapPin, PhoneCall } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const highlights = [
  "Personalised plans for Weight Loss & Weight Gain",
  "Certified Nutritionists — 15+ Years of Excellence",
  "First Consultation is 100% FREE — Always",
]

const sessionTimes = [
  { time: "7:00 AM", label: "Morning" },
  { time: "1:00 PM", label: "Afternoon" },
  { time: "7:00 PM", label: "Evening" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Clean gradient background - no dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/40" />
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Live pill */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Live Zoom Sessions — 7 AM · 1 PM · 7 PM Daily
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight">
                Your Journey to{" "}
                <span className="text-primary">Complete</span>{" "}
                Wellness Starts Here
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Expert nutrition coaching tailored to your body, lifestyle, and Indian food preferences — for lasting weight loss, healthy weight gain, and total wellbeing.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2.5">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold text-base group shadow-lg shadow-primary/20"
              >
                Book FREE Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={businessInfo.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-border rounded-xl hover:bg-muted transition-colors font-semibold text-base text-foreground"
              >
                <PhoneCall className="w-4 h-4 text-primary" />
                {businessInfo.phoneDisplay}
              </a>
            </div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 pt-1 pb-2"
            >
              {/* Avatar group */}
              <div className="flex -space-x-2.5">
                {["S", "R", "P", "A"].map((l, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                    style={{ backgroundColor: `hsl(${130 + i * 20}, 45%, ${35 + i * 5}%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 text-base leading-none">
                  ★★★★★
                  <span className="text-xs text-muted-foreground ml-1 font-normal">4.8 / 5</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Trusted by <strong className="text-foreground">{businessInfo.transformedClients}</strong> clients · India, US & Europe
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Image + floating cards ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Main image */}
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-wellness.jpg"
                alt="Wellness coaching at Charming Aura"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-foreground/5 to-transparent" />

              {/* Location badge on image */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3 h-3 text-primary" />
                Thergaon, Pune
              </div>

              {/* Certified badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                ✓ Certified
              </div>
            </div>

            {/* Floating stats card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="absolute -bottom-4 -left-2 lg:-left-8 bg-card rounded-2xl shadow-2xl p-4 border border-border min-w-[160px]"
            >
              <div className="text-3xl font-bold text-primary leading-none">{businessInfo.transformedClients}</div>
              <div className="text-sm font-semibold text-foreground mt-1">Lives Transformed</div>
              <div className="text-xs text-muted-foreground mt-0.5">India · US · Europe</div>
              <div className="text-amber-400 text-sm mt-1.5 leading-none">★★★★★ <span className="text-xs text-muted-foreground">95%</span></div>
            </motion.div>

            {/* Floating sessions card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-8 -right-2 lg:-right-8 bg-card rounded-2xl shadow-2xl p-4 border border-border"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-foreground">Today's Sessions</span>
              </div>
              {sessionTimes.map((s) => (
                <div key={s.time} className="flex items-center justify-between gap-4 text-xs mt-1.5">
                  <div className="flex items-center gap-1.5">
                    <Video className="w-3 h-3 text-primary" />
                    <span className="text-foreground font-medium">{s.time}</span>
                  </div>
                  <span className="text-muted-foreground">{s.label}</span>
                </div>
              ))}
              <div className="mt-3 pt-2 border-t border-border">
                <Link href="/contact" className="text-xs text-primary font-semibold hover:underline">
                  Join FREE →
                </Link>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
