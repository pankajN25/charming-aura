'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle } from 'lucide-react'

interface InquiryFormProps {
  title?: string
  subtitle?: string
  onSuccess?: () => void
}

export function InquiryForm({ title = "Book Your Free Consultation", subtitle = "Tell us about your wellness goals", onSuccess }: InquiryFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    health_goal: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '4d1945b1-64d2-40bc-88fc-0ded3d893398',
          subject: 'New Free Consultation Request — Charming Aura Wellness',
          from_name: 'Charming Aura Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          health_goal: formData.health_goal,
          message: formData.message,
          source: 'contact-form',
          timestamp: new Date().toISOString(),
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit form')
      }

      setIsSubmitted(true)
      onSuccess?.()

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          health_goal: '',
          message: '',
        })
      }, 2000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      console.error('[v0] Form submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            {title && <h3 className="text-xl font-bold mb-1">{title}</h3>}
            {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <select
            name="health_goal"
            value={formData.health_goal}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select Your Health Goal</option>
            <option value="weight_loss">Weight Loss</option>
            <option value="weight_gain">Weight Gain</option>
            <option value="muscle_building">Muscle Building</option>
            <option value="disease_management">Disease Management (PCOD/Diabetes)</option>
            <option value="sports_nutrition">Sports Nutrition</option>
            <option value="general_wellness">General Wellness</option>
            <option value="dietary_guidance">Dietary Guidance</option>
            <option value="other">Other</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your current health situation and goals (optional)"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />

          {error && (
            <div className="flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-lg text-sm animate-shake">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-all hover:shadow-lg disabled:opacity-70"
          >
            {isLoading ? 'Submitting...' : 'Schedule Free Consultation'}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. Your information is secure with us.
          </p>
        </form>
      ) : (
        <div className="py-12 text-center">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-foreground mb-2">
            Thank You!
          </h3>
          <p className="text-muted-foreground mb-4">
            We&apos;ve received your inquiry. Our wellness coach will contact you within 24 hours.
          </p>

          <div className="bg-primary/10 rounded-lg p-4 text-center">
            <p className="text-sm text-primary font-semibold">
              📧 Confirmation sent to<br />
              <span className="text-foreground">{formData.email}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
