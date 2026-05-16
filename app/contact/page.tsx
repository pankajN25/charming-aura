"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { InquiryForm } from "@/components/inquiry-form"
import { BookingWidget } from "@/components/booking-widget"
import { businessInfo } from "@/lib/business-info"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
  Globe2
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: [businessInfo.phoneDisplay],
    action: businessInfo.phoneHref,
  },
  {
    icon: Mail,
    title: "Email",
    details: [businessInfo.email],
    action: `mailto:${businessInfo.email}`,
  },
  {
    icon: MapPin,
    title: "Address",
    details: businessInfo.addressLines,
    action: businessInfo.mapUrl,
  },
  {
    icon: Clock,
    title: "Consultation Support",
    details: ["In-person consultations in Thergaon", "Online coaching available for India and global clients"],
    action: null,
  },
]

const socialLinks = [
  { icon: Facebook, href: businessInfo.social.facebook, label: "Facebook" },
  { icon: Instagram, href: businessInfo.social.instagram, label: "Instagram" },
  { icon: Youtube, href: businessInfo.social.youtube, label: "YouTube" },
  { icon: Calendar, href: businessInfo.appointmentUrl, label: "Book Appointment" },
  { icon: Globe2, href: businessInfo.website, label: "Original Website" },
]

const faqs = [
  {
    question: "What should I expect during my first consultation?",
    answer: "Your first consultation includes a comprehensive health assessment, discussion of your goals, and an overview of our recommended approach for your situation.",
  },
  {
    question: "How long before I see results?",
    answer: "Results vary by individual, but most clients start noticing positive changes within 2-4 weeks of following their personalized plan consistently.",
  },
  {
    question: "Do you offer online consultations?",
    answer: "Yes! We offer both in-person and online video consultations to accommodate your schedule and location preferences.",
  },
  {
    question: "Can you help with specific health conditions?",
    answer: "Absolutely. We specialize in nutrition plans for diabetes, PCOS, thyroid disorders, hypertension, and other chronic conditions.",
  },
]

export default function ContactPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
              Connect With Our Wellness Experts
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to start your health transformation? Contact us at our Thergaon wellness center or connect online for personalized nutrition, coaching, and habit support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-border/50 shadow-lg">
                <CardContent className="p-8">
                  <InquiryForm
                    title="Book Your Free Consultation"
                    subtitle="Fill out the form below and our wellness team will contact you soon"
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-6">
                  Boost health with functional nutrition. Have questions or need more information? Contact us to start your path to a healthy, balanced life.
                </p>
                <div className="grid gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          info.action ? (
                            <a
                              key={i}
                              href={info.action}
                              className="block text-muted-foreground hover:text-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={i} className="text-muted-foreground">{detail}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-secondary/30 border border-border/50">
                <iframe
                  src={businessInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
              Schedule Your Free Consultation
            </h2>
            <BookingWidget />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
