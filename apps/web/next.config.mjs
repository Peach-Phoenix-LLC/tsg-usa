/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.shopify.com' }]
  }
};

export default nextConfig;
