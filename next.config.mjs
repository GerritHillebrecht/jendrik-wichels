/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "territory.de",
        protocol: "https",
      },
      {
        hostname: "www.innovation-group.parts",
        protocol: "https",
      },
      {
        hostname: "cdn.iconscout.com",
        protocol: "https",
      }
    ],
  },
};

export default nextConfig;
