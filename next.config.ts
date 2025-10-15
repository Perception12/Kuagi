import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.kuagi.ng',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
