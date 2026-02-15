/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true,
  allowedDevOrigins: ['127.0.0.1'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.shopify.com' }]
  }
};

export default nextConfig;
