import type { NextConfig } from "next";

// Fully static build: `next build` writes plain HTML/CSS/JS to ./out,
// which Netlify (or any static host) serves directly.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    // Images are pre-optimised to WebP in public/images, so no runtime optimiser is needed.
    unoptimized: true,
  },
};

export default nextConfig;
