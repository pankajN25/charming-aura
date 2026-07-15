/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    scrollRestoration: true,
  },
  headers: async () => {
    const isDev = process.env.NODE_ENV === 'development'

    if (isDev) {
      // In dev: never cache — let Next.js handle invalidation properly
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
            { key: 'Pragma', value: 'no-cache' },
            { key: 'Expires', value: '0' },
          ],
        },
      ]
    }

    // Production: cache JS/CSS chunks forever (they have content hashes),
    // and cache pages for a short time
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=3600' },
        ],
      },
    ]
  },
  redirects: async () => [
    {
      source: '/nutrition-counseling',
      destination: '/services',
      permanent: true,
    },
  ],
}

export default nextConfig
