"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dumbbell,
  Home,
  Bike,
  PersonStanding,
  Salad,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

const exerciseTypes = [
  {
    icon: Home,
    title: "Home Workouts",
    description:
      "Structured daily routines you can do at home with zero equipment — designed around your fitness level and time availability.",
    tags: ["No Equipment", "15–30 min/day", "All Levels"],
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Coach-guided resistance plans for muscle building, toning, and metabolism boost — integrated with your nutrition for best results.",
    tags: ["Muscle Tone", "Fat Loss", "Metabolism"],
  },
  {
    icon: Bike,
    title: "Cardio & Movement",
    description:
      "Low-impact to high-intensity cardio options: walking plans, cycling, HIIT, and more — matched to your health condition and goals.",
    tags: ["Heart Health", "Fat Burn", "Energy"],
  },
  {
    icon: PersonStanding,
    title: "Flexibility & Recovery",
    description:
      "Stretching, yoga-inspired routines, and active recovery to reduce soreness, improve posture, and support long-term consistency.",
    tags: ["Posture", "Stress Relief", "Recovery"],
  },
]

const nutritionPoints = [
  "Meal plan synced to workout intensity",
  "Pre & post-workout nutrition guidance",
  "Protein & macro targets aligned with exercise load",
  "Hydration and supplement recommendations",
]

const exercisePoints = [
  "Workouts scaled to your fitness level",
  "Progressive plans that grow with you",
  "Rest days and recovery built in",
  "Adjustments every 3–4 weeks",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ExerciseProgramsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Exercise &amp; Movement
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Complete Wellness Means{" "}
            <span className="text-primary">Moving Right Too</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our approach combines nutrition and exercise into one integrated plan — because real transformation happens when what you eat and how you move work together.
          </p>
        </motion.div>

        {/* 80/20 Methodology Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm">
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground">Our 80 / 20 Methodology</h3>
                  <p className="text-muted-foreground text-sm">The science-backed ratio behind every client's transformation</p>
                </div>
              </div>

              {/* Bar Visual */}
              <div className="mb-8">
                <div className="flex rounded-2xl overflow-hidden h-14 shadow-inner">
                  <div className="bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg w-4/5">
                    80% Nutrition
                  </div>
                  <div className="bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm w-1/5">
                    20% Exercise
                  </div>
                </div>
                <div className="flex mt-2 text-xs text-muted-foreground">
                  <span className="w-4/5 text-center">What you eat drives your results</span>
                  <span className="w-1/5 text-center">Movement seals them</span>
                </div>
              </div>

              {/* Two column detail */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Nutrition column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <h4 className="font-semibold text-foreground">80% — Nutrition Focus</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    What you put in your body determines 80% of your outcome. Personalized meal plans, macro tracking, herbal support, and mindful eating habits form the foundation of every program.
                  </p>
                  <ul className="space-y-2">
                    {nutritionPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exercise column */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <h4 className="font-semibold text-foreground">20% — Movement &amp; Exercise</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Exercise amplifies your nutrition results — improving metabolism, building strength, reducing stress, and accelerating fat loss or healthy weight gain.
                  </p>
                  <ul className="space-y-2">
                    {exercisePoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom accent */}
            <div className="bg-primary/5 px-10 py-4 border-t border-border/50">
              <p className="text-center text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Both plans are created together</span> — your exercise routine is never separate from your nutrition plan.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Exercise Type Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {exerciseTypes.map((ex) => (
            <motion.div key={ex.title} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 group">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors">
                    <ex.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {ex.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{ex.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ex.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Salad className="w-4 h-4" />
            Nutrition + Exercise plans always come together
          </div>
          <div className="block mb-6" />
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            <Link href="/contact">
              Get My Combined Plan — FREE
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
