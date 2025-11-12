import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.kuagi.ng",
        pathname: "/storage/images/**",
      },
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
