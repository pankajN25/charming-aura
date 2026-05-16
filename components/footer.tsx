import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Calendar, Globe2, Facebook, Instagram, Youtube } from "lucide-react"
import { businessInfo } from "@/lib/business-info"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { icon: Facebook, href: businessInfo.social.facebook, label: "Facebook" },
  { icon: Instagram, href: businessInfo.social.instagram, label: "Instagram" },
  { icon: Youtube, href: businessInfo.social.youtube, label: "YouTube" },
  { icon: Calendar, href: businessInfo.appointmentUrl, label: "Book Appointment" },
  { icon: Globe2, href: businessInfo.website, label: "Original Website" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-background">
                <Image
                  src={businessInfo.logo}
                  alt={`${businessInfo.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-tight">Charming Aura</span>
                <span className="text-xs tracking-widest uppercase opacity-70">Wellness</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed">
              {businessInfo.about}
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {businessInfo.services.slice(0, 5).map((service) => (
                <li key={service}>
                  <span className="text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <a href={businessInfo.mapUrl} className="text-background/70 hover:text-primary transition-colors">
                  {businessInfo.addressLines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.phoneHref}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Charming Aura Wellness. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
