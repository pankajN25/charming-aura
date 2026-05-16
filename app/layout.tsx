import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadPopup } from '@/components/lead-popup'
import { BusinessSchema, LocalBusinessSchema, OrganisationSchema } from '@/components/schema-markup'
import { businessInfo } from '@/lib/business-info'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.website),
  title: 'Charming Aura Wellness | Premium Nutrition & Wellness Coaching',
  description: `${businessInfo.shortPromise} ${businessInfo.transformedClients} clients guided with sustainable habits and wellness coaching.`,
  keywords: 'nutrition coaching, wellness center, personalized diet plans, weight management, health coaching, Thergaon, Pimpri-Chinchwad, Pune, holistic wellness',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <head>
        <BusinessSchema />
        <LocalBusinessSchema />
        <OrganisationSchema />
      </head>
      <body className="font-sans antialiased bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadPopup />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
