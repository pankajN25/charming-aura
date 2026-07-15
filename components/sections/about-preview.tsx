"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Video, Leaf, Users } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const pillars = [
  { icon: Leaf, label: "Herbal Nutrition", desc: "Nature-backed protocols for metabolism, gut health, and hormonal balance." },
  { icon: Video, label: "Live Zoom Coaching", desc: "3 group sessions every day — morning, afternoon, and evening." },
  { icon: MapPin, label: "Physical Centre", desc: "In-person consultations at our Thergaon, Pimpri-Chinchwad centre." },
  { icon: Users, label: "Global Reach", desc: "Serving clients across India, the US, and Europe via online coaching." },
]

export function AboutPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-2 border-primary/15" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/nutritionist.jpg"
                alt="Charming Aura Wellness expert"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    15+
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Years of Excellence</p>
                    <p className="text-sm text-muted-foreground">Transforming lives since 2009</p>
                    <p className="text-xs text-primary font-semibold mt-0.5">Thergaon, Pimpri-Chinchwad</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-7"
          >
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Charming Aura</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5 text-balance">
                Wellness From The Inside Out
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Charming Aura Wellness, we believe real transformation begins with personalised guidance — not generic diets. Based in Thergaon, Pune, we combine certified nutrition science, herbal protocols, and daily live coaching to create sustainable health for every client.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-5 py-1">
              <p className="text-foreground italic text-lg leading-relaxed">
                "Our goal is simple: build a plan that works with your life, your body, and your culture — not against them."
              </p>
              <footer className="text-sm text-muted-foreground mt-2 font-medium">— Charming Aura Wellness Team</footer>
            </blockquote>

            {/* 4 pillars */}
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted/40 rounded-xl p-4 border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5">
                    <p.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{p.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex gap-8 py-3 border-t border-border">
              {[
                { value: businessInfo.transformedClients, label: "Clients Transformed" },
                { value: "95%", label: "Satisfaction Rate" },
                { value: "3+", label: "Countries Served" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-semibold group"
            >
              Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
