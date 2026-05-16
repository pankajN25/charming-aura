'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, Mail, Phone, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface BookingWidgetProps {
  title?: string
  description?: string
}

export function BookingWidget({ 
  title = "Book Your Free Consultation", 
  description = "Choose a time that works best for you"
}: BookingWidgetProps) {
  const [step, setStep] = useState<'info' | 'calendar'>('info')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleBooking = () => {
    if (formData.name && formData.email && formData.phone) {
      // Open Calendly in popup or redirect
      const calendlyUrl = `https://calendly.com/wellness-charming-aura?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone=${encodeURIComponent(formData.phone)}`
      window.open(calendlyUrl, 'calendly', 'width=800,height=700')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
    >
      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6">
        {description}
      </p>

      {step === 'info' ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Health Goal
            </label>
            <select
              name="goal"
              value={formData.goal}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select your goal</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="pcod">PCOD Management</option>
              <option value="diabetes">Diabetes Control</option>
              <option value="fitness">Fitness & Strength</option>
              <option value="post-pregnancy">Post-Pregnancy Recovery</option>
              <option value="sports">Sports Nutrition</option>
            </select>
          </div>

          <Button
            onClick={handleBooking}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Continue to Booking
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            45-minute free consultation • No credit card required
          </p>
        </div>
      ) : null}
    </motion.div>
  )
}
