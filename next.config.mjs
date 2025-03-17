/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'your-domain.com'],  // Add your allowed domains here
  },
}
  export default  nextConfig;