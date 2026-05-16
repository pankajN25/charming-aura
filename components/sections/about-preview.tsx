"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Clock, Target } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const stats = [
  { icon: Users, value: businessInfo.transformedClients, label: "Transformed Lives" },
  { icon: Award, value: "15+", label: "Years Excellence" },
  { icon: Clock, value: "100%", label: "Personalized Plans" },
  { icon: Target, value: "95%", label: "Client Satisfaction" },
]

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/nutritionist.jpg"
                alt="Our Wellness Expert"
                fill
                className="object-cover"
              />
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <span className="text-4xl font-bold">15+</span>
                <p className="text-sm mt-1 opacity-90">Years Excellence</p>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 rounded-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                Transforming Lives Through Personalized Wellness
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Charming Aura Wellness, we combine science-based nutrition with holistic wellness coaching. Our certified professionals create personalized plans tailored to your body, lifestyle, and goals for sustainable, lasting transformation.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              With 15+ years transforming lives, we&apos;ve perfected a holistic approach that goes beyond diet. We address nutrition, lifestyle modifications, mind-body connection, and sustainable habits that create lasting wellness for our clients.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 py-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
