import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/pangasinan-heritage-tourism",
  assetPrefix: "/pangasinan-heritage-tourism/",
};

export default nextConfig;