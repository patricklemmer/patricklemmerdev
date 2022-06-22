import React from "react"
import { graphql } from "gatsby"
import BlogTemplate from "../../templates/blog-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Blog = ({ data: { contentfulBlog } }) => {
  return (
    <>
      <Seo title={contentfulBlog.title} />
      <Layout>
        <BlogTemplate {...contentfulBlog} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query contentfulBlog {
    allContentfulBlog {
      nodes {
        slug
        title
        publishedDate(formatString: "DD MM YYYY")
        gatsbyPath(filePath: "/blog/{contentfulBlog.slug}")
        introduction {
          id
        }
        content {
          raw
        }
      }
    }
  }
`

export default Blog
