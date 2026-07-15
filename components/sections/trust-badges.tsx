'use client'

import { Award, Shield, Users, Star, Globe2, Stethoscope, Video, Leaf, PhoneCall, Heart, Clock, CheckCircle2 } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

const trustItems = [
  { icon: Award, text: '15+ Years of Excellence' },
  { icon: Users, text: `${businessInfo.transformedClients} Lives Transformed` },
  { icon: Star, text: '4.8 / 5 Client Rating' },
  { icon: Globe2, text: 'India · US · Europe' },
  { icon: Stethoscope, text: '8+ Health Conditions' },
  { icon: Video, text: '3 Live Zoom Sessions Daily' },
  { icon: Shield, text: '30-Day Results Guarantee' },
  { icon: Leaf, text: 'Herbal Nutrition Protocols' },
  { icon: PhoneCall, text: 'FREE First Consultation' },
  { icon: Heart, text: '95% Success Rate' },
  { icon: Clock, text: 'Plans in 48 Hours' },
  { icon: CheckCircle2, text: 'Certified Nutritionists' },
]

// Duplicate for seamless infinite loop
const doubled = [...trustItems, ...trustItems]

export function TrustBadgesSection() {
  return (
    <section className="py-5 bg-foreground text-background overflow-hidden">
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-foreground to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-foreground to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 px-6 py-3 border-r border-background/10 last:border-0 whitespace-nowrap flex-shrink-0"
              >
                <div className="w-7 h-7 rounded-lg bg-primary/25 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-sm font-medium text-background/90">{item.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
