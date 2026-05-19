/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allow HMR websocket connections from the local LAN IP during development
  allowedDevOrigins: ["192.168.11.154"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
