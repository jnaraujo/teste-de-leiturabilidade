module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "testzin",
  },
  flags:{
    DEV_SSR: false
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap"
  ],
};
