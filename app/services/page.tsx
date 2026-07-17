"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CalendarDays, Check, Salad, Scale, Heart, Sparkles, Apple, Dumbbell, TrendingUp } from "lucide-react"
import { CTASection } from "@/components/sections/cta"

const services = [
  {
    icon: Salad,
    title: "Personalized Diet Plans",
    description: "Personalized diet plans for weight loss, weight gain, PCOD, thyroid, diabetes, and healthy living. Every plan is customized based on your health goals and lifestyle.",
    image: "/images/diet-plan.jpg",
    href: "/services",
    features: [
      "Comprehensive health assessment",
      "Customized meal plans",
      "Grocery shopping guides",
      "Recipe suggestions",
      "Regular plan adjustments",
    ],
  },
  {
    icon: Scale,
    title: "Weight Loss Diet Plans",
    description:"Healthy weight loss diet plans with personalized Indian meal plans, expert guidance, and long-term lifestyle changes for sustainable results.",
    image: "/images/weight-management.jpg",
    href: "/services/weight-loss",
    features: [
      "Body composition analysis",
      "Calorie and macro planning",
      "Progress tracking",
      "Behavioral coaching",
      "Sustainable strategies",
    ],
  },
  {
    icon: TrendingUp,
    title: "Healthy Weight Gain Programs",
    description: "Healthy weight gain programs with balanced nutrition, protein-rich meal plans, and personalized guidance to build strength and improve overall health.",
    image: "/images/diet-plan.jpg",
    href: "/services/weight-gain",
    features: [
      "Healthy calorie surplus planning",
      "Protein and meal timing guidance",
      "Gut-friendly food structure",
      "Strength and movement support",
      "Regular progress adjustments",
    ],
  },
  {
    icon: Heart,
    title: "Wellness Coaching",
    description: "Wellness coaching to improve your eating habits, lifestyle, stress management, and overall health with expert guidance.",
    image: "/images/wellness-coaching.jpg",
    href: "/services",
    features: [
      "Stress management",
      "Sleep optimization",
      "Mindful eating practices",
      "Lifestyle assessment",
      "Mental wellness support",
    ],
  },
  {
    icon: Sparkles,
    title: "Lifestyle Modification",
    description: "Build healthy daily habits with personalized lifestyle changes that support long-term fitness, nutrition, and overall wellness.",
    image: "/images/wellness-coaching.jpg",
    href: "/services",
    features: [
      "Habit formation coaching",
      "Time management for health",
      "Work-life balance",
      "Healthy cooking guidance",
      "Activity integration",
    ],
  },
  {
    icon: Apple,
    title:  "PCOD, Thyroid & Diabetes Diet Management",
    description: "Personalized diet plans for PCOD, thyroid, diabetes, hypertension, and other health conditions to support better health through nutrition.",
    image: "/images/diet-plan.jpg",
    href: "/services/pcod-management",
    features: [
      "Condition-specific plans",
      "Blood sugar management",
      "Heart-healthy nutrition",
      "Hormonal balance support",
      "Medical coordination",
    ],
  },
  {
    icon: Dumbbell,
    title: "Sports Nutrition",
    description: "Sports nutrition plans for athletes and fitness enthusiasts to improve performance, recovery, muscle growth, and energy levels.",
     image: "/images/weight-management.jpg",
    href: "/services/sports-nutrition",
    features: [ "Performance optimization", "Pre/post workout nutrition", "Supplement guidance", "Recovery nutrition","Competition preparation",
    ],
  },
  {
    icon: CalendarDays,
    title: "21-Day Wellness Challenge",
    description: "Join our 21-Day Wellness Challenge with personalized diet plans, detox guidance, Zoom coaching, and daily support for healthy lifestyle changes.",
    image: "/images/wellness-coaching.jpg",
    href: "/programs/21-day-challenge",
    features: [
      "Week-by-week program structure",
      "Detox and liquid day guidance",
      "Personalized diet plan",
      "Zoom support",
      "Progress follow-ups",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Initial Diet Consultation",
    description:  "We understand your health condition, food habits, lifestyle, and health goals before creating your personalized diet plan."
  },
  {
    step: "02",
    title:  "Personalized Diet Plan",
    description:  "We create a personalized Indian diet plan based on your health goals and daily routine.",
  },
  {
    step: "03",
    title: "Start Your Nutrition Journey",
    description:  "Start your customized diet plan with expert guidance, healthy meal suggestions, and continuous support.",
  },
  {
    step: "04",
    title:  "Progress Review & Follow-up",
    description:  "We regularly review your progress and update your diet plan for better long-term health results.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Diet & Nutrition Services</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
             Diet & Nutrition Services in Thergaon, Pimpri-Chinchwad
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We provide personalized diet consultation and nutrition services in Thergaon and Pimpri-Chinchwad. Our experts help with weight loss, weight gain, PCOD, thyroid, diabetes, gut health and sports nutrition using customized Indian diet plans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Card className="h-full overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      {/* Image */}
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 to-transparent md:bg-gradient-to-t" />
                        <div className="absolute bottom-4 left-4 md:bottom-auto md:top-4">
                          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <Link href={service.href} className="inline-block">
                          <h3 className="font-serif text-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                              <Check className="w-4 h-4 text-primary shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-5 hover:gap-3 transition-all"
                        >
                          View Service
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Our Diet Consultation Process
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
             Our simple four-step diet consultation process helps you achieve your health goals with personalized nutrition guidance.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-primary/20 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Diet Consultation Fees — First Session FREE
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Choose the right diet consultation plan based on your health goals.
              Book a FREE consultation to get a personalized diet plan and pricing details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Basic",
                description:  "Best for your first diet consultation",
                features: [ "Initial diet consultation", "Personalized diet plan", "Email support", "One follow-up session"],
              },
              {
                name: "Standard",
                description:  "Most popular personalized diet plan",
                features: ["Everything in Basic","Detailed personalized meal plan","Weekly follow-up","Healthy recipe suggestions","Progress tracking"],
                featured: true,
              },
              {
                name: "Premium",
                description: "Complete health and lifestyle transformation",
                features: ["Everything in Standard", "Unlimited support", "Regular consultations", "Lifestyle coaching", "Family nutrition guidance"],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden border-border/50 ${plan.featured ? "border-primary shadow-xl scale-105" : ""}`}
              >
                {plan.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${plan.featured ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"}`}
                  >
                    <Link href="/contact">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary hover:text-primary-foreground group">
              <Link href="/contact">
               Book a FREE Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
