const TerserPlugin = require("terser-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // eslint-disable-next-line no-param-reassign
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new TerserPlugin({ parallel: true }));
    }
    return config;
  },
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
