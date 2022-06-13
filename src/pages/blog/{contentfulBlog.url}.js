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
        <PostTemplate {...contentfulBlog} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query postQuery($id: String) {
    contentfulBlog(id: { eq: $id }) {
      title
      introduction
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            description
            __typename
          }
        }
      }
      createdAt(formatString: "DD MMMM, YYYY")
    }
  }
`

export default Blog
