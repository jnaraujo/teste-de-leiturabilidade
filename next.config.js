const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material', // If @mui/icons-material is being used
]);

module.exports = {
  target: "experimental-serverless-trace",
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: () => 'build',
  experimental: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
    return config;
  }
}