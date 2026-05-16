"use client"

import { motion } from "framer-motion"
import { Leaf, Shield, HeartHandshake, Lightbulb, Clock, Award } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const features = [
  {
    icon: Shield,
    title: "Certified Experts",
    description: "Our nutritionists and wellness coaches are certified professionals with extensive training and credentials.",
  },
  {
    icon: Leaf,
    title: "Evidence-Based",
    description: "All recommendations grounded in latest nutritional science and proven wellness methodologies.",
  },
  {
    icon: HeartHandshake,
    title: "100% Personalized",
    description: "Every nutrition plan tailored to your unique metabolism, goals, preferences, and lifestyle.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: `${businessInfo.transformedClients} client journeys guided with personalized plans, follow-ups, and lasting habit change.`,
  },
  {
    icon: Lightbulb,
    title: "Holistic Approach",
    description: "We integrate nutrition, exercise guidance, stress management, and mindfulness for complete wellness.",
  },
  {
    icon: Clock,
    title: "Lifetime Support",
    description: "Continuous guidance, monthly follow-ups, and adjustments throughout your wellness transformation.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            The Charming Aura Difference
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Premium wellness guidance from certified experts. Science-backed nutrition plans, personalized coaching, and lasting results that transform your health and life.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
