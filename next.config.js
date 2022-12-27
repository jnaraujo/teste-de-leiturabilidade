/* eslint-disable import/no-extraneous-dependencies */
const TerserPlugin = require("terser-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: String(process.env.ANALYZE).trim() === "true",
});

function resolveModule(moduleName) {
  return path.resolve(__dirname, "node_modules", moduleName);
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // eslint-disable-next-line no-param-reassign
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new TerserPlugin({ parallel: true }));
      config.plugins.push(new DuplicatePackageCheckerPlugin());

      const moduleList = [
        "@emotion/is-prop-valid",
        "@emotion/memoize",
        "@emotion/sheet",
        "@emotion/unitless",
        "@emotion/weak-memoize",
        "prosemirror-state",
        "react-is",
      ];

      moduleList.forEach((moduleName) => {
        config.resolve.alias[moduleName] = resolveModule(moduleName);
      });
    }
    return config;
  },
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    legacyBrowsers: false,
    optimizeCss: true,
  },
  compress: false,
};

module.exports = withBundleAnalyzer(nextConfig);
