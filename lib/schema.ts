// Schema Markup Configuration for SEO
import { businessInfo } from './business-info';

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
  '@id': businessInfo.website,
  name: businessInfo.name,
  description: businessInfo.shortPromise,
  url: businessInfo.website,
  telephone: businessInfo.phoneDisplay,
  email: businessInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.streetAddress,
    addressLocality: businessInfo.locality,
    addressRegion: businessInfo.region,
    postalCode: businessInfo.postalCode,
    addressCountry: businessInfo.country,
  },
  areaServed: [
    {
      '@type': 'City',
      name: businessInfo.locality,
    },
    {
      '@type': 'State',
      name: businessInfo.region,
    },
    {
      '@type': 'Country',
      name: 'India',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Charming Aura Team',
    description: 'Certified Nutrition Specialists with 15+ years of experience',
  },
  image: 'https://charmingaurawellness.com/images/hero-wellness.jpg',
  priceRange: '$$',
  sameAs: [
    businessInfo.social.facebook,
    businessInfo.social.instagram,
    businessInfo.social.youtube,
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  knowsAbout: [
    'Nutrition Counseling',
    'Weight Loss',
    'Diet Planning',
    'PCOD Management',
    'Diabetes Nutrition',
    'Sports Nutrition',
    'Wellness Coaching',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Registered Dietitian',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified Nutrition Specialist',
    },
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HealthAndBeautyBusiness'],
  '@id': `${businessInfo.website}/#localbusiness`,
  name: businessInfo.name,
  image: 'https://charmingaurawellness.com/images/hero-wellness.jpg',
  logo: `${businessInfo.website}${businessInfo.logo.replaceAll(' ', '%20')}`,
  description: businessInfo.about,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.streetAddress,
    addressLocality: businessInfo.locality,
    addressRegion: businessInfo.region,
    postalCode: businessInfo.postalCode,
    addressCountry: businessInfo.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.6091582,
    longitude: 73.7700757,
  },
  hasMap: businessInfo.mapUrl,
  telephone: businessInfo.phoneDisplay,
  email: businessInfo.email,
  url: businessInfo.website,
  priceRange: '$$',
  currenciesAccepted: 'INR',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
  areaServed: businessInfo.serviceAreas.map((area) => ({
    '@type': 'Place',
    name: area,
  })),
  sameAs: [
    businessInfo.social.facebook,
    businessInfo.social.instagram,
    businessInfo.social.youtube,
  ],
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How personalized are your nutrition plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every nutrition plan is 100% customized based on your metabolism, lifestyle, food preferences, health conditions, and fitness goals. We conduct comprehensive assessments before creating your personalized plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer online nutrition consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer both in-person and online nutrition consultations. You can have sessions via video call from anywhere in India.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your success rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We have a 95% client satisfaction rate with over 800 successful transformations. Most clients see measurable results within 8-12 weeks of following our personalized plans consistently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage specific health conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in managing PCOD, diabetes, thyroid disorders, IBS, and other health conditions through customized nutrition protocols developed by certified specialists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the duration of the wellness program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our programs are flexible, ranging from 3 months (foundation) to 12 months (complete transformation). We recommend a minimum of 8-12 weeks to see significant results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to follow strict diets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We believe in sustainable, balanced nutrition that fits your lifestyle. Our approach focuses on habits, portion control, and food quality rather than restrictive diets.',
      },
    },
  ],
};

export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: businessInfo.name,
  url: businessInfo.website,
  logo: `${businessInfo.website}${businessInfo.logo.replaceAll(' ', '%20')}`,
  description: 'Premium wellness center specializing in personalized nutrition and health coaching.',
  foundingDate: '2009',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: businessInfo.phoneDisplay,
    email: businessInfo.email,
    availableLanguage: ['en', 'hi'],
  },
  sameAs: [
    businessInfo.social.facebook,
    businessInfo.social.instagram,
    businessInfo.social.youtube,
  ],
};

export const contactFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I expect during my first consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your first consultation includes a comprehensive health assessment, discussion of your goals, and an overview of our recommended approach for your situation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long before I see results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results vary by individual, but most clients start noticing positive changes within 2-4 weeks of following their personalized plan consistently.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer online consultations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer both in-person consultations at our Thergaon clinic and online Zoom video consultations, so clients across India and abroad can get the same personalized guidance from home.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is your clinic located and which areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Our clinic is in Thergaon, Pimpri-Chinchwad, on Aundh-Ravet BRTS Road near McDonald's. We serve clients from Thergaon, Wakad, Pimple Saudagar, Ravet, Chinchwad, Aundh, Baner, Hinjewadi and across PCMC, plus online consultations across India.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with specific health conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely. We provide personalized diet plans that support weight loss, weight gain, PCOD, diabetes, thyroid, hypertension, and gut health. Our nutrition guidance supports, but does not replace, your doctor's medical treatment.",
      },
    },
  ],
};

export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${businessInfo.name}`,
  description: `Contact ${businessInfo.legalName} in Thergaon, Pimpri-Chinchwad. Book a free diet consultation in person or online.`,
  url: `${businessInfo.website}/contact`,
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': `${businessInfo.website}/#localbusiness`,
    name: businessInfo.name,
    telephone: businessInfo.phoneDisplay,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.streetAddress,
      addressLocality: businessInfo.locality,
      addressRegion: businessInfo.region,
      postalCode: businessInfo.postalCode,
      addressCountry: businessInfo.country,
    },
  },
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${businessInfo.website}${item.url}`,
  })),
});
