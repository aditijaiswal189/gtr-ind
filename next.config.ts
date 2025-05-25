import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  optimizeFonts: false,

  typescript: {
    // WARNING: this will allow _all_ type errors in your project to slip past
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // ← disables the Google-Font optimizer so no Turbopack paths get injected
  },
};

export default nextConfig;
