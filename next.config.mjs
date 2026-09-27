/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // https://api.abcz.workers.dev/api/fitlog
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.abcz.workers.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
