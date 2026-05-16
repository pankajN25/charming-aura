"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, Salad, Scale, Heart, Sparkles, Apple, Dumbbell } from "lucide-react"
import { CTASection } from "@/components/sections/cta"

const services = [
  {
    icon: Salad,
    title: "Personalized Diet Plans",
    description: "Custom nutrition plans tailored to your unique body type, lifestyle, health goals, and food preferences. Our plans are designed for sustainability and long-term success.",
    image: "/images/diet-plan.jpg",
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
    title: "Weight Management",
    description: "Achieve and maintain your ideal weight with science-backed strategies. Whether you want to lose weight, gain muscle, or maintain a healthy weight, we have solutions for you.",
    image: "/images/weight-management.jpg",
    features: [
      "Body composition analysis",
      "Calorie and macro planning",
      "Progress tracking",
      "Behavioral coaching",
      "Sustainable strategies",
    ],
  },
  {
    icon: Heart,
    title: "Wellness Coaching",
    description: "Holistic guidance that addresses mind, body, and spirit. Our wellness coaching goes beyond diet to encompass all aspects of your health and well-being.",
    image: "/images/wellness-coaching.jpg",
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
    description: "Transform your daily habits with sustainable lifestyle changes. We help you build healthy routines that fit seamlessly into your busy life.",
    image: "/images/nutrition-consultation.jpg",
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
    title: "Disease Management",
    description: "Specialized nutrition plans for managing chronic conditions like diabetes, hypertension, thyroid disorders, and PCOS through dietary intervention.",
    image: "/images/diet-plan.jpg",
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
    description: "Optimize your athletic performance with tailored nutrition strategies. Perfect for athletes, fitness enthusiasts, and anyone with active lifestyle goals.",
    image: "/images/sports-nutrition.jpg",
    features: [
      "Performance optimization",
      "Pre/post workout nutrition",
      "Supplement guidance",
      "Recovery nutrition",
      "Competition preparation",
    ],
  },
]

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "We start with a comprehensive assessment of your health history, lifestyle, goals, and preferences.",
  },
  {
    step: "02",
    title: "Personalized Plan",
    description: "Based on your assessment, we create a customized nutrition and wellness plan just for you.",
  },
  {
    step: "03",
    title: "Implementation",
    description: "We guide you through implementing your plan with practical tips, recipes, and ongoing support.",
  },
  {
    step: "04",
    title: "Monitor & Adjust",
    description: "Regular check-ins to track your progress and adjust your plan for optimal results.",
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Premium Wellness Services for Your Health Goals
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Expert-guided nutrition plans, personalized wellness coaching, and specialized programs tailored to your unique needs. Transform your health with Charming Aura.
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
                        <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
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
              How We Work With You
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our proven four-step process ensures you get personalized care and achieve lasting results.
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
              Flexible Plans for Every Need
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We offer customized packages based on your specific needs and goals. 
              Contact us for a personalized quote.
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
                description: "Perfect for getting started",
                features: ["Initial consultation", "Basic diet plan", "Email support", "Monthly check-in"],
              },
              {
                name: "Standard",
                description: "Most popular choice",
                features: ["Everything in Basic", "Detailed meal plans", "Weekly check-ins", "Recipe suggestions", "Progress tracking"],
                featured: true,
              },
              {
                name: "Premium",
                description: "Complete transformation",
                features: ["Everything in Standard", "Unlimited support", "Bi-weekly consultations", "Lifestyle coaching", "Family nutrition"],
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
                    <Link href="/contact">Get Started</Link>
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
                Contact for Custom Pricing
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
