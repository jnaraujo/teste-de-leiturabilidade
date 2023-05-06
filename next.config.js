// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require("@sentry/nextjs");

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
  sassOptions: {
    prependData: `
      @import "./src/styles/variables.scss";
    `,
  },
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
        "prosemirror-view",
        "@babel/runtime",
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
    optimizeCss: true,
    legacyBrowsers: false,
  },
  compress: false,
};

module.exports = withBundleAnalyzer(
  withSentryConfig(
    nextConfig,
    {
      silent: true,
    },
    {
      hideSourcemaps: true,
    }
  )
);
