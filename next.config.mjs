/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // Compression and minification for better Core Web Vitals
  compress: true,
  poweredByHeader: false,
  // Optimize bundles
  experimental: {
    scrollRestoration: true,
  },
  // Headers for performance
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=86400, s-maxage=604800',
        },
      ],
    },
    {
      source: '/api/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=300',
        },
      ],
    },
  ],
  // Redirects for SEO
  redirects: async () => [
    {
      source: '/nutrition-counseling',
      destination: '/services',
      permanent: true,
    },
  ],
}

export default nextConfig
