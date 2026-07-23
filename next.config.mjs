/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  experimental: {
    scrollRestoration: true,
  },
}

export default nextConfig
