'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, RotateCcw, Heart, Award } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

export function GuaranteeSection() {
  return (
    <section className="py-16 px-6 bg-primary/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Commitment
          </Badge>
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4 text-balance">
            We're So Confident in Our Results, We Guarantee Them
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your health transformation is our mission. If you follow our personalized plan and don't see results, we'll refund you completely.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: RotateCcw,
              title: '30-Day Money-Back Guarantee',
              description: 'Follow your personalized plan for 30 days. If you don\'t see measurable progress, we refund 100% of your investment.',
            },
            {
              icon: Heart,
              title: 'Zero Risk Guarantee',
              description: 'No hidden fees, no contracts, no surprises. Cancel anytime if you\'re not satisfied with your results or experience.',
            },
            {
              icon: Award,
              title: 'Results-Focused Guarantee',
              description: '95% of our clients see results within 4-6 weeks. If you don\'t, we\'ll work with you for free until you do.',
            },
          ].map((guarantee, i) => {
            const Icon = guarantee.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 border-primary/20 h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {guarantee.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background border border-primary/20 rounded-xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 md:gap-6">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-3">
                Why We Can Guarantee Results
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>15+ years of proven success with {businessInfo.transformedClients} clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Certified nutritionists with specialized training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Science-backed methodology, not fad diets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Personalized plans, not generic meal templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Continuous support and plan adjustments</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>95% client satisfaction rate</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8"
        >
          <p className="text-foreground italic text-lg leading-relaxed mb-4">
            "I was skeptical at first, but the money-back guarantee took all the risk away. Within 3 weeks, I could see visible changes. Now, 4 months later, I've lost 14kg and feel incredible. The best investment I made for myself!"
          </p>
          <p className="font-semibold text-foreground">
            - Priya Sharma, Pimpri-Chinchwad
          </p>
          <p className="text-sm text-muted-foreground">
            Weight Loss Program, 14kg transformation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
