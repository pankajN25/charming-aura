'use client'

import { Award, Shield, Users, Star } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

const trustElements = [
  {
    icon: Award,
    title: '15+ Years Excellence',
    description: 'Trusted wellness partner since 2009',
  },
  {
    icon: Users,
    title: `${businessInfo.transformedClients} Transformations`,
    description: 'Real clients, real results',
  },
  {
    icon: Star,
    title: '95% Satisfaction',
    description: '4.8/5 rating from verified clients',
  },
  {
    icon: Shield,
    title: '30-Day Guarantee',
    description: 'Unsatisfied? Full refund, no questions',
  },
]

export function TrustBadgesSection() {
  return (
    <section className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{element.title}</h3>
                <p className="text-background/70 text-sm">{element.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
