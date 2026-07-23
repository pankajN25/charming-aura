'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, TrendingDown, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { businessInfo } from '@/lib/business-info'

const caseStudies = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 32,
    location: 'Pimpri-Chinchwad',
    goal: 'Weight Loss',
    duration: '4 months',
    results: {
      weightLost: '12 kg',
      bodyfat: '8%',
      energy: '95%',
    },
    quote: 'I lost 12kg without feeling deprived. The personalized meal plans and support made it sustainable. Now I maintain effortlessly!',
    image: '/images/happy-client.jpg',
    beforeAfter: '/images/case-study-before-after.jpg',
    category: 'Weight Loss Success',
  },
  {
    id: 2,
    name: 'Anjali Desai',
    age: 28,
    location: 'Pune',
    goal: 'PCOD-Friendly Diet',
    duration: '3 months',
    results: {
      routine: 'Consistent',
      energy: '85%',
      wellbeing: 'Improved',
    },
    quote: 'The PCOD-friendly diet plan fit my routine easily. I have more energy and feel much better day to day. Best decision for my health!',
    image: '/images/happy-client.jpg',
    beforeAfter: '/images/case-study-before-after.jpg',
    category: 'PCOD Transformation',
  },
  {
    id: 3,
    name: 'Rahul Gupta',
    age: 45,
    location: 'Delhi',
    goal: 'Balanced Diet Plan',
    duration: '5 months',
    results: {
      energy: 'Much better',
      routine: 'Consistent',
      habits: 'Sustainable',
    },
    quote: 'My energy levels are steady through the day and my eating routine finally feels sustainable. Feeling healthier than ever!',
    image: '/images/happy-client.jpg',
    beforeAfter: '/images/case-study-before-after.jpg',
    category: 'Diabetes Control',
  },
  {
    id: 4,
    name: 'Meera Singh',
    age: 26,
    location: 'Bangalore',
    goal: 'Post-Pregnancy Recovery',
    duration: '6 months',
    results: {
      weightLost: '18 kg',
      strength: 'Restored',
      confidence: '100%',
    },
    quote: 'I regained my body and confidence after pregnancy. The nutrition plan was safe while breastfeeding. Highly recommended!',
    image: '/images/happy-client.jpg',
    beforeAfter: '/images/case-study-before-after.jpg',
    category: 'Post-Pregnancy',
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Real Results
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Client Success Stories That Inspire
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real people achieving real results with our personalized wellness approach. These transformations are from our verified clients.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src={study.beforeAfter}
                    alt={`${study.name} transformation`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {study.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Client Info */}
                  <div className="mb-4 pb-4 border-b border-border/50">
                    <h3 className="font-semibold text-foreground text-lg">
                      {study.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {study.age} years, {study.location}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="bg-primary/5 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground capitalize mb-1">
                          {key}
                        </p>
                        <p className="font-semibold text-primary text-sm">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Transformation: {study.duration}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground italic flex-grow mb-4">
                    "{study.quote}"
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Goal: {study.goal}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/50"
        >
          {[
            { icon: Users, value: businessInfo.transformedClients, label: 'Transformed Lives' },
            { icon: Award, value: '95%', label: 'Satisfaction Rate' },
            { icon: TrendingDown, value: '12-18kg', label: 'Avg Weight Loss' },
            { icon: Award, value: '4.9/5', label: 'Rating' },
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-bold text-2xl text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
