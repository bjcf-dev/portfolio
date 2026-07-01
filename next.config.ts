import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
