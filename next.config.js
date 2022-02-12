module.exports = {
  target: "experimental-serverless-trace",
  reactStrictMode: true,
  swcMinify: true,
  generateBuildId: () => 'build',
  experimental: {
    styledComponents: true,
  }
}