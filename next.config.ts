import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lean, self-contained server build for containers (Cloud Run).
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
