'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  User,
  Mail,
  Phone,
  ChevronRight,
  CheckCircle2,
  Gift,
  Video,
  Building2,
  Clock,
  ShieldCheck,
  Heart,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { businessInfo } from '@/lib/business-info'

interface BookingWidgetProps {
  title?: string
  description?: string
}

const consultationSteps = [
  {
    icon: Heart,
    step: '01',
    label: 'Introduction',
    duration: '5 min',
    desc: 'We learn about you — your lifestyle, current challenges, and health history.',
  },
  {
    icon: User,
    step: '02',
    label: 'Health Assessment',
    duration: '5 min',
    desc: 'A quick assessment of your goals, metabolism, and specific conditions.',
  },
  {
    icon: CheckCircle2,
    step: '03',
    label: 'Your Action Plan',
    duration: '5 min',
    desc: 'We walk you through the exact program and next steps — zero pressure.',
  },
]

const trustBadges = [
  { icon: Gift, label: '100% Free', sub: 'No hidden charges ever' },
  { icon: ShieldCheck, label: 'No Commitment', sub: 'Walk away anytime' },
  { icon: Clock, label: '15 Minutes', sub: 'Quick & focused' },
]

const modeOptions = [
  { icon: Building2, label: 'In-Person', sub: 'Thergaon, Pimpri-Chinchwad' },
  { icon: Video, label: 'Online via Zoom', sub: 'India · US · Europe' },
]

export function BookingWidget({
  title = 'Book Your Free Consultation',
  description = 'A quick 15-minute call to understand your health goals and map out your plan.',
}: BookingWidgetProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', goal: '', mode: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBooking = () => {
    if (formData.name && formData.email && formData.phone) {
      const bookingUrl = new URL(businessInfo.appointmentUrl)
      bookingUrl.searchParams.set('name', formData.name)
      bookingUrl.searchParams.set('email', formData.email)
      bookingUrl.searchParams.set('phone', formData.phone)
      if (formData.goal) bookingUrl.searchParams.set('goal', formData.goal)
      if (formData.mode) bookingUrl.searchParams.set('mode', formData.mode)
      window.open(bookingUrl.toString(), 'setmore-booking', 'width=900,height=720')
      setSubmitted(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl overflow-hidden border border-border/60 shadow-xl bg-card"
    >
      {/* ── Header banner ── */}
      <div className="bg-gradient-to-br from-primary to-primary/80 px-6 py-6 text-primary-foreground">
        <div className="flex items-start justify-between flex-wrap gap-3">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-white/20 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              <Gift className="w-3.5 h-3.5" /> 100% FREE — No Charges, No Commitment
            </span>
            <h3 className="font-serif text-2xl font-bold leading-tight">{title}</h3>
            <p className="text-primary-foreground/80 text-sm mt-1 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* ── What to expect ── */}
      <div className="px-6 py-6 border-b border-border/50 bg-secondary/30">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          What happens in your FREE consultation
        </p>
        <div className="space-y-3">
          {consultationSteps.map((s) => (
            <div key={s.step} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground text-sm">{s.label}</span>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full">{s.duration}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="grid grid-cols-3 gap-2 mt-5">
          {trustBadges.map((b) => (
            <div key={b.label} className="text-center bg-card rounded-xl p-2.5 border border-border/50">
              <b.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <p className="text-xs font-semibold text-foreground leading-tight">{b.label}</p>
              <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{b.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Form ── */}
      <div className="px-6 py-6 space-y-4">
        {/* Mode selector */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            How would you like to meet?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {modeOptions.map((m) => (
              <button
                key={m.label}
                type="button"
                onClick={() => setFormData({ ...formData, mode: m.label })}
                className={`flex items-center gap-2.5 p-3 rounded-xl border-2 text-left transition-all ${
                  formData.mode === m.label
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/40'
                }`}
              >
                <m.icon className={`w-4 h-4 shrink-0 ${formData.mode === m.label ? 'text-primary' : 'text-muted-foreground'}`} />
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">{m.label}</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">{m.sub}</p>
                </div>
                {formData.mode === m.label && (
                  <CheckCircle2 className="w-4 h-4 text-primary ml-auto shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            <User className="w-4 h-4 inline mr-1.5 text-muted-foreground" />Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
          />
        </div>

        {/* Email + Phone side by side on larger screens */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              <Mail className="w-4 h-4 inline mr-1.5 text-muted-foreground" />Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              <Phone className="w-4 h-4 inline mr-1.5 text-muted-foreground" />Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
            />
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Health Goal
          </label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
          >
            <option value="">Select your primary goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Healthy Weight Gain</option>
            <option value="pcod">PCOD / Hormonal Balance</option>
            <option value="diabetes">Diabetes Management</option>
            <option value="thyroid">Thyroid Support</option>
            <option value="gut-health">Gut Health & Digestion</option>
            <option value="sports">Sports & Athletic Performance</option>
            <option value="general-wellness">General Wellness & Energy</option>
            <option value="post-pregnancy">Post-Pregnancy Recovery</option>
          </select>
        </div>

        {/* CTA */}
        <Button
          onClick={handleBooking}
          disabled={!formData.name || !formData.email || !formData.phone}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base rounded-xl mt-2 disabled:opacity-50"
        >
          <Calendar className="w-5 h-5 mr-2" />
          {submitted ? 'Booking Window Opened ✓' : 'Continue to Book FREE Slot'}
          {!submitted && <ChevronRight className="w-5 h-5 ml-2" />}
        </Button>

        <p className="text-xs text-muted-foreground text-center pt-1">
          You'll be redirected to our scheduler to pick your preferred time slot.
        </p>
      </div>
    </motion.div>
  )
}
