/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['production-ultimate-assets.ratecity.com.au'],
  },
}

module.exports = nextConfig
