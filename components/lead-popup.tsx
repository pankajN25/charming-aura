'use client'

import { useState, useEffect } from 'react'
import { X, Check, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  useEffect(() => {
    const submitted = localStorage.getItem('popupSubmitted')
    const dismissed = sessionStorage.getItem('popupDismissed')

    if (submitted || dismissed) {
      return
    }

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      // Send to form handler
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'popup',
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Success - show confirmation
      setIsSubmitted(true)
      localStorage.setItem('popupSubmitted', 'true')
      sessionStorage.removeItem('popupDismissed')
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsOpen(false)
      }, 3000)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('[v0] Form submission error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    setIsOpen(false)
    if (!isSubmitted) {
      sessionStorage.setItem('popupDismissed', 'true')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
      {/* Modal with smooth slide-in animation */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close wellness assessment form"
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-all duration-200 hover:scale-110 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Content */}
            <div className="p-8 text-center">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                <div className="w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              </div>
              
              <h2 className="font-serif text-2xl font-bold mb-2 text-foreground">
                Free Wellness Assessment
              </h2>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Get a personalized nutrition plan in 2 minutes. No credit card needed.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 focus:scale-[1.02]"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 focus:scale-[1.02]"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 focus:scale-[1.02]"
                  required
                />

                {error && (
                  <div className="flex items-center gap-2 bg-red-50 text-red-600 p-3 rounded-lg text-sm animate-shake">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 transition-all duration-200 hover:shadow-lg disabled:opacity-70"
                >
                  {isLoading ? 'Processing...' : 'Get Free Assessment'}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleClose}
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  Close
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Your data is safe with us.
              </p>
            </div>

          </>
        ) : (
          /* Success Message */
          <div className="p-12 text-center">
            <div className="mb-4 inline-block p-3 bg-green-100 rounded-full animate-bounce">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            
            <h2 className="font-serif text-2xl font-bold mb-2 text-foreground">
              Thank You!
            </h2>
            <p className="text-muted-foreground mb-4">
              Check your email for your personalized wellness assessment and exclusive offer.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-4 mb-6">
              <p className="text-sm text-primary font-semibold">
                Confirmation email sent to: <br /> {formData.email}
              </p>
            </div>

            <p className="text-xs text-muted-foreground">
              Our wellness coach will contact you soon with your personalized plan.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
