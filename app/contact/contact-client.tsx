"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { InquiryForm } from "@/components/inquiry-form"
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
  Globe2,
  Gift,
  ShieldCheck,
  Heart,
  Sparkles,
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
    title: "Clinic Address",
    details: businessInfo.addressLines,
    action: businessInfo.mapUrl,
  },
  {
    icon: Clock,
    title: "Clinic Timings",
    details: [
      "Monday to Saturday: 9:00 AM – 8:00 PM",
      "Sunday: Closed",
      "Online Zoom sessions daily at 7 AM, 1 PM & 7 PM",
    ],
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
    answer: "Yes! We offer both in-person consultations at our Thergaon clinic and online Zoom video consultations, so clients across India and abroad can get the same personalized guidance from home.",
  },
  {
    question: "Where is your clinic located and which areas do you serve?",
    answer: "Our clinic is in Thergaon, Pimpri-Chinchwad, on Aundh-Ravet BRTS Road near McDonald's. We serve clients from Thergaon, Wakad, Pimple Saudagar, Ravet, Chinchwad, Aundh, Baner, Hinjewadi and across PCMC, plus online consultations across India.",
  },
  {
    question: "Can you help with specific health conditions?",
    answer: "Absolutely. We provide personalized diet plans that support weight loss, weight gain, PCOD, diabetes, thyroid, hypertension, and gut health. Our nutrition guidance supports, but does not replace, your doctor's medical treatment.",
  },
]

export function ContactClient() {

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
              Contact Our Dietitian Clinic in Thergaon, Pimpri-Chinchwad
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to start your health transformation? Visit our diet and nutrition clinic in Thergaon, Pimpri-Chinchwad (PCMC) on Aundh-Ravet BRTS Road, or book an online Zoom consultation from anywhere in India. Your first consultation is 100% free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FREE Consultation Banner */}
      <section className="py-6 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground text-center"
          >
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 shrink-0" />
              <span className="text-lg font-bold tracking-wide">Your First Consultation is 100% FREE</span>
            </div>
            <span className="hidden sm:inline text-primary-foreground/50">—</span>
            <span className="text-primary-foreground/90 text-sm">No hidden charges · No pressure · No commitment required</span>
          </motion.div>
        </div>
      </section>

      {/* Why Is It Free */}
      <section className="py-16 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Philosophy</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-3 mb-3">
              Why Is the First Consultation Free?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe every person deserves to understand their health before spending a single rupee. The first session is about you — we listen, assess, and show you exactly how we can help.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Heart,
                title: "Trust First",
                desc: "We want you to feel confident in us before you invest. The free session lets you meet our team and see our approach first-hand.",
              },
              {
                icon: ShieldCheck,
                title: "No Pressure",
                desc: "You'll never be pushed into a plan or package. We assess your goals honestly and recommend only what genuinely fits your needs.",
              },
              {
                icon: Sparkles,
                title: "Real Value",
                desc: "In just the first session you'll receive a preliminary health assessment, goal setting, and a clear picture of your wellness path.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center gap-3 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
                  <div className="mb-2">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                      <Gift className="w-3.5 h-3.5" /> 100% Free — No Charges
                    </span>
                  </div>
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
                  Visit Our Clinic in Thergaon, Pimpri-Chinchwad
                </h2>
                <p className="text-muted-foreground mb-6">
                  Have questions or want to book a diet consultation? Call, email, or visit our nutrition clinic in Thergaon, Pimpri-Chinchwad. We welcome clients from Wakad, Pimple Saudagar, Ravet, Chinchwad, Aundh and across PCMC, plus online consultations across India.
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
              <div>
                <h3 className="font-semibold text-foreground mb-4">Clinic Address &amp; Google Maps Directions</h3>
                <div className="rounded-2xl overflow-hidden h-64 bg-secondary/30 border border-border/50">
                  <iframe
                    src={businessInfo.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Charming Aura Wellness clinic location in Thergaon, Pimpri-Chinchwad"
                  />
                </div>
              </div>
            </motion.div>
          </div>
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
