'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How personalized are your nutrition plans?',
    answer:
      'Every nutrition plan is 100% customized based on your metabolism, lifestyle, food preferences, health conditions, and fitness goals. We conduct comprehensive assessments before creating your personalized plan tailored specifically to you.',
  },
  {
    question: 'Do you offer online nutrition consultation?',
    answer:
      'Yes, we offer both in-person and online nutrition consultations. You can have sessions via video call from anywhere in India. Online consultations are equally effective and include the same personalized guidance.',
  },
  {
    question: 'What is your success rate?',
    answer:
      'We have a 95% client satisfaction rate with over 800 successful transformations. Most clients see measurable results within 8-12 weeks of following our personalized plans consistently.',
  },
  {
    question: 'Do you manage specific health conditions?',
    answer:
      'Yes, we specialize in managing PCOD, diabetes, thyroid disorders, IBS, and other health conditions through customized nutrition protocols developed by certified specialists.',
  },
  {
    question: 'What is the duration of the wellness program?',
    answer:
      'Our programs are flexible, ranging from 3 months (foundation) to 12 months (complete transformation). We recommend a minimum of 8-12 weeks to see significant results.',
  },
  {
    question: 'Do I need to follow strict diets?',
    answer:
      'No. We believe in sustainable, balanced nutrition that fits your lifestyle. Our approach focuses on habits, portion control, and food quality rather than restrictive diets.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Get answers to common questions about our personalized nutrition plans and wellness programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-background border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/20 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-foreground mb-4">
            Still have questions? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  )
}
