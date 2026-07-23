"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Mail, ChevronDown, Scale, TrendingUp, Heart, Droplets, Activity, Salad, Dumbbell, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { businessInfo } from "@/lib/business-info"

const serviceLinks = [
  { href: "/services/weight-loss", label: "Weight Loss", icon: Scale, desc: "Sustainable fat loss plans" },
  { href: "/services/weight-gain", label: "Weight Gain", icon: TrendingUp, desc: "Healthy weight building" },
  { href: "/services/pcod-management", label: "PCOD Management", icon: Heart, desc: "Hormonal balance support" },
  { href: "/services/diabetes-nutrition", label: "Diabetes Nutrition", icon: Droplets, desc: "Blood sugar control" },
  { href: "/services/thyroid-management", label: "Thyroid Management", icon: Activity, desc: "Metabolism support" },
  { href: "/services/gut-health", label: "Gut Health", icon: Salad, desc: "Digestion & immunity" },
  { href: "/services/sports-nutrition", label: "Sports Nutrition", icon: Dumbbell, desc: "Performance fuelling" },
  { href: "/services/weight-management", label: "Weight Management", icon: Sparkles, desc: "Long-term maintenance" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: serviceLinks },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Open/close with a small delay so the pointer can travel to the panel
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  // Close on Escape and on outside click
  useEffect(() => {
    if (!servicesOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false)
    }
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("mousedown", onClickOutside)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("mousedown", onClickOutside)
    }
  }, [servicesOpen])

  const closeMobile = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href={businessInfo.phoneHref} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{businessInfo.phoneDisplay}</span>
            </a>
            <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{businessInfo.email}</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm font-medium">
            ✦ FREE Initial Consultation — No Hidden Fees, No Commitment
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-background ring-1 ring-border">
              <Image
                src={businessInfo.logo}
                alt={`${businessInfo.name} logo`}
                fill
                sizes="48px"
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold text-foreground leading-tight">Charming Aura</span>
              <span className="text-xs text-muted-foreground tracking-widest uppercase">Wellness</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onFocus={openDropdown}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </Link>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-4"
                      >
                        <div className="w-[560px] bg-background rounded-2xl border border-border shadow-xl p-3">
                          <div className="grid grid-cols-2 gap-1">
                            {link.dropdown.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setServicesOpen(false)}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/60 transition-colors group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <service.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                    {service.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground leading-snug">{service.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>

                          <div className="mt-2 pt-3 border-t border-border px-3 pb-1">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="text-sm font-medium text-primary hover:underline"
                            >
                              View all services →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">Book FREE Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden max-h-[70vh] overflow-y-auto"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="text-foreground/80 hover:text-primary transition-colors font-medium py-2.5 flex-1"
                        onClick={closeMobile}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-2.5"
                        aria-label="Toggle services submenu"
                        aria-expanded={mobileServicesOpen}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 border-l-2 border-border ml-1 flex flex-col">
                            {link.dropdown.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={closeMobile}
                                className="flex items-center gap-3 py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors"
                              >
                                <service.icon className="w-4 h-4 text-primary shrink-0" />
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium py-2.5"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                )
              )}

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                <Link href="/contact" onClick={closeMobile}>Book FREE Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
