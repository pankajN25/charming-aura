import { businessInfo } from './business-info'

export const SEO_CONFIG = {
  site: {
    name: 'Charming Aura Wellness',
    description: `${businessInfo.shortPromise} ${businessInfo.transformedClients} clients guided toward better wellbeing.`,
    url: businessInfo.website,
    domain: 'charmingaurawellness.com',
    image: '/og-image.jpg',
    locale: 'en_IN',
  },
  contact: {
    phone: businessInfo.phoneDisplay,
    email: businessInfo.email,
    address: businessInfo.addressLines.join(', '),
  },
  business: {
    name: 'Charming Aura Wellness',
    type: 'HealthAndBeautyBusiness',
    founded: 2009,
    yearsInBusiness: 15,
    servicesArea: businessInfo.serviceAreas,
  },
  links: {
    appointment: businessInfo.appointmentUrl,
    website: businessInfo.website,
    facebook: businessInfo.social.facebook,
    instagram: businessInfo.social.instagram,
    youtube: businessInfo.social.youtube,
  },
  keywords: {
    primary: [
      'nutritionist in Pune',
      'nutritionist in Pimpri-Chinchwad',
      'diet counselor',
      'weight loss consultant',
      'wellness coaching',
      'nutrition plans',
      'personalized diet',
      'health coaching India',
      'certified nutritionist',
    ],
    secondary: [
      'PCOD diet plan',
      'diabetes nutrition',
      'weight management',
      'lifestyle coaching',
      'health transformation',
      'fitness nutrition',
      'nutrition counseling',
      'wellness consultant',
    ],
  },
  pages: {
    home: {
      title: 'Charming Aura Wellness | Premium Nutrition & Wellness Coaching',
      description: 'Transform your health with certified nutrition experts. Personalized diet plans, weight management, and holistic wellness coaching.',
      keywords: ['nutrition coaching', 'wellness center', 'diet plans', 'health coaching'],
    },
    about: {
      title: 'About Us | Charming Aura Wellness',
      description: 'Meet the Charming Aura Wellness & Nutrition team behind personalized diet plans, coaching, follow-ups, and sustainable habit transformation.',
      keywords: ['about wellness', 'certified nutritionists', 'health experts', 'wellness team'],
    },
    services: {
      title: 'Services | Personalized Nutrition & Wellness Plans',
      description: 'Comprehensive wellness services: weight loss, PCOD management, disease nutrition, sports nutrition, and lifestyle coaching.',
      keywords: ['nutrition services', 'wellness programs', 'diet plans', 'health services'],
    },
    contact: {
      title: 'Contact Us | Charming Aura Wellness',
      description: `Contact Charming Aura Wellness & Nutrition at ${businessInfo.phoneDisplay} or ${businessInfo.email}. Visit our Thergaon wellness center or book online coaching.`,
      keywords: ['contact wellness', 'book consultation', 'wellness appointment'],
    },
    blog: {
      title: 'Wellness Blog | Nutrition Tips & Health Insights',
      description: 'Evidence-based nutrition articles, wellness tips, and health insights from certified nutrition experts.',
      keywords: ['wellness blog', 'nutrition tips', 'health articles', 'diet advice'],
    },
  },
}

export const generateMetadata = (page: keyof typeof SEO_CONFIG.pages) => {
  const pageConfig = SEO_CONFIG.pages[page]
  const siteConfig = SEO_CONFIG.site

  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords.join(', '),
    authors: [{ name: 'Charming Aura Wellness' }],
    creator: 'Charming Aura Wellness',
    openGraph: {
      type: 'website',
      url: siteConfig.url,
      title: pageConfig.title,
      description: pageConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.image,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: siteConfig.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageConfig.title,
      description: pageConfig.description,
      images: [siteConfig.image],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  }
}
