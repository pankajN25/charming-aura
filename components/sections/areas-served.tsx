import Link from 'next/link'
import { MapPin } from 'lucide-react'

const areas = [
  'Thergaon',
  'Wakad',
  'Dange Chowk',
  'Pimple Saudagar',
  'Ravet',
  'Punawale',
  'Tathawade',
  'Chinchwad',
  'Nigdi',
  'Aundh',
  'Baner',
  'Hinjewadi',
]

export function AreasServedSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Areas We Serve
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            A Trusted Dietitian Near You in Pimpri-Chinchwad &amp; Pune
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Charming Aura Wellness &amp; Nutrition is a certified dietitian and nutrition clinic
            located in Thergaon, Pimpri-Chinchwad (PCMC), on Aundh-Ravet BRTS Road near
            McDonald&apos;s. We provide personalized Indian diet charts for weight loss, healthy
            weight gain, PCOD, thyroid, diabetes and gut health. We also offer online diet
            consultation over Zoom for clients across India, the Middle East, Singapore, the
            United States and Europe. Your first consultation is always 100% free.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {areas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-muted/30 border border-border rounded-lg px-4 py-3"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium text-sm">
                Dietitian in {area}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-foreground mb-4">
            Visiting from any of these areas or looking for online diet consultation across India?
            Book your free first consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Book FREE Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
