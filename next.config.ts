import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Update with your correct hostname if needed
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
