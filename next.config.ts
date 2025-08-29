import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lp.launchatscale.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
