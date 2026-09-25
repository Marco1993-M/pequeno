import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/recent",
        destination: "/projects",
        permanent: true,
      },
      { source: "/resources", destination: "/articles", permanent: true },
      { source: "/our-system", destination: "/lightweight-steel-frame-homes-south-africa", permanent: true },
      { source: "/prefab-homes-south-africa", destination: "/lightweight-steel-frame-homes-south-africa", permanent: true },
      { source: "/modular-homes-south-africa", destination: "/lightweight-steel-frame-homes-south-africa", permanent: true },
      { source: "/prefab-home-prices-south-africa", destination: "/articles/lightweight-steel-frame-home-cost-south-africa", permanent: true },
      { source: "/modular-homes-prices-south-africa", destination: "/articles/lightweight-steel-frame-home-cost-south-africa", permanent: true },
    ];
  },
};

export default nextConfig;
