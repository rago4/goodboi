/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: ["dogs"],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
