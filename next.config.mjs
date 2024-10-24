/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  // Add this block
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;