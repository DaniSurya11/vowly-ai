import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gunakan IP spesifik TANPA PORT sesuai saran error message
  allowedDevOrigins: ["192.168.1.3", "localhost"],
  serverExternalPackages: [],
};

export default nextConfig;