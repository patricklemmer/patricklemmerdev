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
  query blogPostQuery {
    contentfulBlog {
      title
      createdAt(formatString: "DD MM YYYY")
      content {
        raw
      }
    }
  }
`

export default Blog
