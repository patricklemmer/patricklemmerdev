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
    description: "Patrick Lemmer - Web Development Portfolio",
    author: "Patrick Lemmer",
    twitterUsername: "patrick_lemmer",
    githubUsername: "patricklemmer",
    youtubeUsername: "patricklemmer",
    facebookUsername: "barcadia",
    instagramUsername: "patrick_lemmer",
    linkedinUsername: "patricklemmer",
    image: "/haze.jpg",
    siteUrl: "https://patricklemmer.dev",
    developerName: "Patrick Lemmer",
    developerUrl: "https://patricklemmer.dev",
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
