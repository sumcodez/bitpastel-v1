/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // ✅ Helps catch hydration issues in dev
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript-related mismatches during development
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(jsx|tsx)$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: '@dhiwise/component-tagger/nextLoader',
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
