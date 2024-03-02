/* eslint-disable import/no-extraneous-dependencies */
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
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: false,
};

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withBundleAnalyzer(
  withSentryConfig(
    nextConfig,
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: "no-org-mb",
      project: "leiturabilidade",
    },
    {
      // For all available options, see:
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

      // Upload a larger set of source maps for prettier stack traces (increases build time)
      widenClientFileUpload: true,

      // Transpiles SDK to be compatible with IE11 (increases bundle size)
      transpileClientSDK: true,

      // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
      tunnelRoute: "/monitoring",

      // Hides source maps from generated client bundles
      hideSourceMaps: true,

      // Automatically tree-shake Sentry logger statements to reduce bundle size
      disableLogger: true,

      // Enables automatic instrumentation of Vercel Cron Monitors.
      // See the following for more information:
      // https://docs.sentry.io/product/crons/
      // https://vercel.com/docs/cron-jobs
      automaticVercelMonitors: true,
    },
  ),
);
