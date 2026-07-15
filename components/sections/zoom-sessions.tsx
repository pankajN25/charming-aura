"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Video,
  Users,
  Globe2,
  Clock,
  Sun,
  Coffee,
  Moon,
  ArrowRight,
  CheckCircle2,
  Wifi,
} from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const sessions = [
  {
    icon: Sun,
    period: "Morning",
    time: "7:00 AM – 8:00 AM",
    tag: "Start Strong",
    tagColor: "bg-amber-100 text-amber-700",
    borderColor: "border-amber-200",
    description:
      "Kickstart your metabolism with morning nutrition guidance, a mindful breakfast plan, and a motivational check-in to set the tone for your day.",
  },
  {
    icon: Coffee,
    period: "Afternoon",
    time: "1:00 PM – 2:00 PM",
    tag: "Stay on Track",
    tagColor: "bg-green-100 text-green-700",
    borderColor: "border-green-200",
    description:
      "Midday review of your meal log, hunger cues, and energy levels. Address cravings, get real-time guidance, and stay aligned with your plan.",
    highlight: true,
  },
  {
    icon: Moon,
    period: "Evening",
    time: "7:00 PM – 8:00 PM",
    tag: "Wind Down",
    tagColor: "bg-indigo-100 text-indigo-700",
    borderColor: "border-indigo-200",
    description:
      "Reflect on the day's progress, plan tomorrow's nutrition, and receive personalized coaching on sleep, digestion, and recovery habits.",
  },
]

const features = [
  {
    icon: Video,
    title: "Live on Zoom",
    desc: "Every session is live — real-time interaction with certified wellness coaches, never pre-recorded.",
  },
  {
    icon: Users,
    title: "1-on-1 or Group",
    desc: "Choose private 1-on-1 coaching or join a supportive group session — both formats run daily.",
  },
  {
    icon: Globe2,
    title: "Join from Anywhere",
    desc: "Available for clients across India, US, and Europe. All you need is a phone or laptop.",
  },
  {
    icon: Wifi,
    title: "3 Sessions Every Day",
    desc: "Morning, afternoon, and evening slots — always one that fits your schedule, no matter the timezone.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ZoomSessionsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Live Online Coaching
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            3 Live Zoom Sessions{" "}
            <span className="text-primary">Every Single Day</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Unlike pre-recorded programs, our coaches are live with you three times a day — morning, afternoon, and evening — so you always have expert support exactly when you need it.
          </p>
        </motion.div>

        {/* Session Time Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {sessions.map((session) => (
            <motion.div key={session.period} variants={itemVariants}>
              <Card
                className={`h-full border-2 ${session.highlight ? "border-primary shadow-lg shadow-primary/10" : session.borderColor} transition-shadow hover:shadow-xl`}
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  {/* Icon + Tag row */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${session.highlight ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                    >
                      <session.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${session.tagColor}`}>
                      {session.tag}
                    </span>
                  </div>

                  {/* Time info */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {session.period} Session
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-primary font-medium">{session.time}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {session.description}
                  </p>

                  {session.highlight && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Most popular slot
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Pills + CTA */}
        <div className="bg-secondary/40 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                Everything Included in Every Session
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{f.title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  Ready to Join a Live Session?
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Book your free consultation and we'll add you to the daily Zoom schedule that fits your timezone and lifestyle.
                </p>
              </div>
              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  <Link href={businessInfo.appointmentUrl} target="_blank" rel="noopener noreferrer">
                    Join Today's Session
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full border-primary/30">
                  <Link href="/contact">Book FREE Consultation First</Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Available for India · US · Europe · Worldwide
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
