/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `altoption`,
    siteUrl: `https://www.altoption.tp`,
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "ei4hsvfk",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "ei4hsvfk",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
  ],
};
