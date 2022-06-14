import { graphql, useStaticQuery } from "gatsby"

const useLatestPost = () => {
  const {
    allContentfulBlog: { nodes },
  } = useStaticQuery(graphql`
    query blogQuery {
      allContentfulBlog(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
      ) {
        nodes {
          title
          gatsbyPath(filePath: "/blog/{contentfulBlog.url}")
          publishedDate
          introduction {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  `)
  return nodes
}

export default useLatestPost
