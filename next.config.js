const withPWA = require("next-pwa");

const TerserPlugin = require("terser-webpack-plugin");

const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

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
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));
