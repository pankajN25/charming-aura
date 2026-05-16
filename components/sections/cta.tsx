"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Begin Your Health Transformation Today
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10">
            Your personalized wellness journey starts with a single step. Schedule a free consultation with our certified experts and discover your path to lasting health.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
            >
              <Link href="/contact">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={businessInfo.phoneHref}>
                <Phone className="mr-2 w-5 h-5" />
                Call: {businessInfo.phoneDisplay}
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>Free Initial Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>No Commitment Required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-foreground rounded-full" />
              <span>100% Personalized Plans</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
