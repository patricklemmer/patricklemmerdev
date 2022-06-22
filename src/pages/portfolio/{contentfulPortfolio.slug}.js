// import React from "react"
// import { graphql } from "gatsby"
// import PortfolioTemplate from "../../templates/portfolio-template"
// import Seo from "../../components/SEO"
// import Layout from "../../components/Layout"

// const PortfolioTemplate = ({ data: { contentfulPortfolio } }) => {
//   return (
//     <>
//       <Seo title={contentfulPortfolio.title} />
//       <Layout>
//         <BlogTemplate {...contentfulPortfolio} />
//       </Layout>
//     </>
//   )
// }

// export const data = graphql`
//   query contentfulBlog {
//     allContentfulBlog {
//       nodes {
//         slug
//         title
//         publishedDate(formatString: "DD MM YYYY")
//         gatsbyPath(filePath: "/blog/{contentfulBlog.slug}")
//         introduction {
//           id
//         }
//         content {
//           raw
//         }
//       }
//     }
//   }
// `

// export default PortfolioTemplate
