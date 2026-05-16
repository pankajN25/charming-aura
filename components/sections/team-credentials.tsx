'use client'

import Image from 'next/image'
import { Award, BadgeCheck, Users } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'

const credentials = [
  {
    icon: BadgeCheck,
    title: 'Certified Professionals',
    description: 'Our team includes Registered Dietitians and Certified Nutrition Specialists with advanced degrees.',
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    description: `Combined expertise guiding ${businessInfo.transformedClients} clients with proven results and sustainable habits.`,
  },
  {
    icon: Users,
    title: '95% Client Satisfaction',
    description: 'Trusted by clients across Pimpri-Chinchwad, Pune, India, and online for personalized wellness programs.',
  },
]

const teamMembers = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Chief Nutritionist & Founder',
    credentials: 'M.Sc. Nutrition, RD, CSSD',
    bio: '15+ years of experience in clinical nutrition and wellness coaching. Specialized in weight management and PCOD nutrition.',
  },
  {
    name: 'Raj Kumar',
    role: 'Senior Nutrition Coach',
    credentials: 'M.Sc. Dietetics, Certified Health Coach',
    bio: 'Expert in sports nutrition and fitness integration. Has coached 200+ clients to achieve fitness goals.',
  },
  {
    name: 'Dr. Neha Patel',
    role: 'Wellness Coach',
    credentials: 'B.Sc. Nutrition, ISSA Certified',
    bio: 'Specializes in lifestyle modification and sustainable habit formation for long-term health.',
  },
]

export function TeamCredentialsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Credentials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our certified professionals are dedicated to helping you achieve your wellness goals with personalized,
              evidence-based guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Placeholder for member image */}
                <div className="h-48 bg-gradient-to-b from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground font-medium mb-4 uppercase tracking-wider">
                    {member.credentials}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Affiliations */}
        <div className="mt-16 p-8 bg-background border border-border rounded-lg">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
            Professional Certifications & Affiliations
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Certifications</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Registered Dietitian (RD) - Indian Dietetics Association</li>
                <li>✓ Certified Nutrition Specialist (CNS) - ICMR Guidelines</li>
                <li>✓ Sports Nutrition Certification (CSSD)</li>
                <li>✓ Diabetes Education & Management Certification</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Affiliations</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Member - Indian Dietetics Association</li>
                <li>✓ Member - Nutrition Society of India</li>
                <li>✓ Partner - Apollo Healthcare</li>
                <li>✓ Listed - Government Health Directory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
