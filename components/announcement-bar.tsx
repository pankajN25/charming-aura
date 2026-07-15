"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const messages = [
  {
    text: "✦ FREE Initial Consultation — No Hidden Fees, No Commitment",
    cta: "Book Now",
    href: "/contact",
  },
  {
    text: "✦ 3 Live Zoom Sessions Daily — Morning, Afternoon & Evening",
    cta: "Join Today",
    href: "/contact",
  },
  {
    text: "✦ Serving Clients in India · US · Europe — Online & In-Person",
    cta: "Learn More",
    href: "/contact",
  },
]

const STORAGE_KEY = "ca_announcement_dismissed"

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  useEffect(() => {
    if (!visible) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [visible])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }

  const prev = () => setCurrent((c) => (c - 1 + messages.length) % messages.length)
  const next = () => setCurrent((c) => (c + 1) % messages.length)

  if (!visible) return null

  return (
    <div className="relative z-[60] bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Prev arrow (desktop) */}
        <button
          onClick={prev}
          className="hidden sm:flex w-6 h-6 items-center justify-center text-background/60 hover:text-background transition-colors shrink-0"
          aria-label="Previous message"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Message */}
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-3 text-sm text-center"
            >
              <span className="text-background/90 font-medium">
                {messages[current].text}
              </span>
              <Link
                href={messages[current].href}
                className="shrink-0 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full hover:bg-primary/90 transition-colors"
              >
                {messages[current].cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next arrow + dot indicators + dismiss */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={next}
            className="w-6 h-6 flex items-center justify-center text-background/60 hover:text-background transition-colors"
            aria-label="Next message"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="flex gap-1">
            {messages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-background/30"}`}
                aria-label={`Go to message ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={dismiss}
          className="w-6 h-6 flex items-center justify-center text-background/60 hover:text-background transition-colors shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
