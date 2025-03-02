/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.risloo.ir'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.risloo.ir',
        port: '',
        pathname: '/storage/public/**',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
