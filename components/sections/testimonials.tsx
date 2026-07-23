"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Lost 15 kg in 6 months",
    content: "The personalized approach at Charming Aura Wellness changed my life. The diet plan was easy to follow and the results were amazing. I feel more energetic and confident than ever!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Diabetes Management",
    content: "After years of inconsistent eating habits, the wellness coaching here helped me build a routine that finally works. I feel more energetic than I have in years!",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Weight Management",
    content: "What I love most is that this is not a crash diet - it is a sustainable lifestyle change. The team understands that everyone is different and creates plans accordingly.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Athletic Performance",
    content: "As an athlete, I needed specific nutrition guidance. The team created a perfect plan that improved my performance and recovery time significantly.",
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-primary" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Client Stories</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Real Transformations, Real Results
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Discover how our clients have achieved their health goals and transformed their lives through personalized wellness coaching.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="h-full bg-card border-border/50 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
