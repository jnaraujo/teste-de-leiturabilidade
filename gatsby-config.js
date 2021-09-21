module.exports = {
  siteMetadata: {
    siteUrl: "https://leiturabilidade.vercel.app",
    title: "Teste de Leiturabilidade",
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
