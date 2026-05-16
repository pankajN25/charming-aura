'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingDown, Zap, Target } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    problem: "Weight won't budge despite dieting",
    solution: 'Personalized plans that work with your metabolism',
  },
  {
    icon: Zap,
    problem: 'No energy or constant fatigue',
    solution: 'Nutrient-dense nutrition balanced for your needs',
  },
  {
    icon: Target,
    problem: 'PCOD, diabetes affecting quality of life',
    solution: 'Specialized nutrition protocols for health management',
  },
]

export function ProblemSolutionSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Your Health Challenges, Our Proven Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We understand the frustration. Most generic diet plans fail because they ignore YOUR unique body and
            lifestyle.
          </p>
        </div>

        <div className="space-y-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Problem Side */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <Icon className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">The Problem</h3>
                      <p className="text-muted-foreground mt-2">{item.problem}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center md:justify-end">
                  <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                </div>

                {/* Solution Side */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                  className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:col-start-2"
                >
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground text-lg">Our Solution</h3>
                      <p className="text-muted-foreground mt-2">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Schedule Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
}
