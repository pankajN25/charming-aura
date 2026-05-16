// Schema Markup Configuration for SEO
import { businessInfo } from './business-info';

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
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
  '@type': 'LocalBusiness',
  name: businessInfo.name,
  image: 'https://charmingaurawellness.com/images/hero-wellness.jpg',
  description: businessInfo.about,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.streetAddress,
    addressLocality: businessInfo.locality,
    addressRegion: businessInfo.region,
    postalCode: businessInfo.postalCode,
    addressCountry: businessInfo.country,
  },
  telephone: businessInfo.phoneDisplay,
  url: businessInfo.website,
  priceRange: '$$',
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
        text: `We have guided ${businessInfo.transformedClients} clients toward better wellbeing with personalized nutrition and sustainable habits. Most clients see measurable changes within 8-12 weeks.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you manage specific health conditions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we specialize in PCOD, diabetes, thyroid, IBS, and other health conditions through customized nutrition protocols.',
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
