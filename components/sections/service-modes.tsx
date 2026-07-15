"use client"

import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Video,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Building2,
  Globe2,
  Users,
  Clock,
  Wifi,
  Car,
} from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const inPersonFeatures = [
  "Face-to-face consultation with our wellness experts",
  "Body composition & measurement assessments",
  "Physical check of posture, movement, and lifestyle",
  "Walk-in or booked appointments welcome",
  "Collect herbal nutrition products in person",
  "Thergaon center — easy access from Pune & PCMC",
]

const onlineFeatures = [
  "3 live Zoom sessions daily — join any slot",
  "1-on-1 or group coaching formats",
  "Available India, US, Europe & worldwide",
  "Diet plans, exercise guidance via digital delivery",
  "Daily follow-up support over WhatsApp or email",
  "No travel needed — consult from home or office",
]

const faqs = [
  {
    q: "Can I switch between in-person and online?",
    a: "Absolutely. Many clients start online and come in-person for progress reviews, or vice versa. We accommodate whichever format works best for your schedule.",
  },
  {
    q: "Is the free consultation available for both modes?",
    a: "Yes — your first consultation is FREE whether you visit our Thergaon center or join us on Zoom. No charges, no commitment required.",
  },
  {
    q: "I'm abroad — can I still join the Zoom sessions?",
    a: "Yes. We serve clients in India, the US, and Europe. All Zoom sessions run at timings that accommodate IST, EST, and CET timezones.",
  },
  {
    q: "What equipment do I need for online sessions?",
    a: "Just a smartphone or laptop with a stable internet connection. We use Zoom — no special software required.",
  },
]

export function ServiceModesSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            How We Work Together
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Visit Us or Join{" "}
            <span className="text-primary">From Anywhere</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you prefer a face-to-face session at our Thergaon wellness center or a live Zoom call from the comfort of your home — we've got you covered.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* In-Person Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border-2 border-primary/20 bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          >
            {/* Top gradient banner */}
            <div className="bg-gradient-to-br from-primary to-primary/70 px-8 pt-8 pb-12">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">In-Person</h3>
                  <p className="text-white/80 text-sm">Visit our wellness center</p>
                </div>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  Thergaon, Pune
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-8 -mt-4">
              {/* Address pill */}
              <div className="bg-background rounded-2xl p-4 mb-6 border border-border/50 flex items-start gap-3 shadow-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Our Wellness Center</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {businessInfo.addressLines[0]}, {businessInfo.addressLines[1]}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {inPersonFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Car, label: "Easy Parking" },
                  { icon: Clock, label: "Flexible Hours" },
                  { icon: Users, label: "Walk-ins Welcome" },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                    <b.icon className="w-3.5 h-3.5" />
                    {b.label}
                  </span>
                ))}
              </div>

              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn">
                <Link href={businessInfo.mapUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Online Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border-2 border-accent/30 bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
          >
            {/* Top gradient banner */}
            <div className="bg-gradient-to-br from-foreground to-foreground/80 px-8 pt-8 pb-12">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">Online via Zoom</h3>
                  <p className="text-white/80 text-sm">Join from anywhere in the world</p>
                </div>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  3 Sessions / Day
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 pb-8 -mt-4">
              {/* Region pill */}
              <div className="bg-background rounded-2xl p-4 mb-6 border border-border/50 flex items-start gap-3 shadow-sm">
                <Globe2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Available Worldwide</p>
                  <p className="text-xs text-muted-foreground mt-0.5">India · United States · Europe · Global</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {onlineFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: Wifi, label: "Just a Phone/Laptop" },
                  { icon: Clock, label: "IST · EST · CET" },
                  { icon: Video, label: "Live, Not Recorded" },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-full">
                    <b.icon className="w-3.5 h-3.5" />
                    {b.label}
                  </span>
                ))}
              </div>

              <Button asChild size="lg" className="w-full bg-foreground hover:bg-foreground/90 text-background group/btn">
                <Link href={businessInfo.appointmentUrl} target="_blank" rel="noopener noreferrer">
                  Join Today's Session
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Which is right for me? Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
            Which is right for me?
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border/60 rounded-2xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-medium text-foreground text-sm md:text-base">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/40 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              Still not sure? Book your free consultation and we'll recommend the best format for you.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Link href="/contact">
                Book FREE Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
