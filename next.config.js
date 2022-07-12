const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// webpack: (config, { dev, isServer }) => {
//   if (!dev && !isServer) {
//     Object.assign(config.resolve.alias, {
//       react: "preact/compat",
//       "react-dom/test-utils": "preact/test-utils",
//       "react-dom": "preact/compat",
//     });
//   }
//   return config;
// },

const nextConfig = {
  target: "experimental-serverless-trace",
  swcMinify: true,
  generateBuildId: () => "build",
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
