/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Patrick Lemmer",
    description: "A super-fast site using GatsbyJS",
    author: "Patrick Lemmer",
    twitterUsername: "patrick_lemmer",
    githubUsername: "patricklemmer",
    youtubeUsername: "patricklemmer",
    facebookUsername: "barcadia",
    instagramUsername: "patrick_lemmer",
    linkedinUsername: "patricklemmer",
    image: "/gras.jpg",
    siteUrl: "https://barcadia.netlify.com",
    developerName: "Patrick Lemmer",
    developerUrl: "https://morganbaker.dev",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
  ],
}
