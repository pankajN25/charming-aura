import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadPopup } from '@/components/lead-popup'
import { AnnouncementBar } from '@/components/announcement-bar'
import { BusinessSchema, LocalBusinessSchema, OrganisationSchema } from '@/components/schema-markup'
import { businessInfo } from '@/lib/business-info'

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: 'Charming Aura Wellness | Premium Nutrition & Wellness Coaching',
  description: `${businessInfo.shortPromise} ${businessInfo.transformedClients} clients guided with sustainable habits and wellness coaching.`,
  keywords: 'nutrition coaching, wellness center, personalized diet plans, weight management, health coaching, Thergaon, Pimpri-Chinchwad, Pune, holistic wellness',
  icons: {
    icon: [{ url: '/images/Website Logo.png', type: 'image/png' }],
    apple: [{ url: '/images/Website Logo.png', type: 'image/png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <BusinessSchema />
        <LocalBusinessSchema />
        <OrganisationSchema />
      </head>
      <body className="font-sans antialiased bg-background">
        {/* Unregister stale service workers and clear Cache API in dev */}
        {process.env.NODE_ENV === 'development' && (
          <script dangerouslySetInnerHTML={{ __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(function(regs) {
                regs.forEach(function(r) { r.unregister(); });
              });
            }
            if ('caches' in window) {
              caches.keys().then(function(names) {
                names.forEach(function(n) { caches.delete(n); });
              });
            }
          `}} />
        )}
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadPopup />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
