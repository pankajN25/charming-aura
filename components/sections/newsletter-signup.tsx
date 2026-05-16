'use client'

import { useState } from 'react'
import { Gift, CheckCircle2 } from 'lucide-react'

export function NewsletterSignupSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would integrate with an email service like Mailchimp, SendGrid, etc.
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Get Free Wellness Resources
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              Join our community and get exclusive access to:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>7-Day Balanced Meal Plan for Weight Loss (PDF)</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Complete PCOD Nutrition Guide</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Weekly nutrition tips & wellness insights</span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Exclusive offers for newsletter subscribers</span>
              </li>
            </ul>

            <p className="text-sm text-primary-foreground/60">
              ✓ No spam • Unsubscribe anytime • Your privacy is protected
            </p>
          </div>

          {/* Form */}
          <div className="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                >
                  Get Free Resources
                </button>

                <p className="text-xs text-primary-foreground/60 text-center">
                  We respect your privacy and never share your email.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-primary-foreground/80">
                  Check your email for your free resources. Welcome to our wellness community!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
