import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button/Button"
import { PostSingleStyles } from "../components/Blog/PostStyles"
import LatestPosts from "../components/Blog/LatestPosts"
import RichText from "../components/RichText"

const BlogTemplate = (contentfulBlog) => {
  const { title, createdAt, content } = contentfulBlog
  return (
    <>
      <section>
        <PostSingleStyles>
          {title && <h1 className="blogsingle__title">{title}</h1>}
          {createdAt && (
            <p className="blogsingle__date">Posted on {createdAt}</p>
          )}
          {content && (
            <article className="blogsingle__content">
              <RichText richText={content} />
              <div className="blogsingle__back">
                <Button to="/blog" text="Back to blog" as={Link} />
              </div>
            </article>
          )}
        </PostSingleStyles>
      </section>
      <LatestPosts title="Further reading from Barcadia" />
    </>
  )
}

export default BlogTemplate
