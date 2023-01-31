// Imports
// React imports
import React from 'react'

// Data imports
import { blogs } from '../../Data'

// Asset imports
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function Blog() {
  return (
    <div className="section" id="blog">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Latest Blog Posts</h2>
        <div className="w-14 h-[3px] rounded-sm bg-skin-button-primary-light-accent"></div>
      </div>
      <div className="grid mt-12 gap-12 m-2 sm:grid-cols-2 md:grid-cols-3">
        {blogs.map((blog) => {
          return (
            <div
              className="card bg-skin-card-light border border-gray-100 rounded-md dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none"
              key={blog.id}
            >
              <figure>
                <img
                  src={blog.image}
                  alt="Header image for the blog article"
                  loading="lazy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{blog.title}</h2>
                <p className="text-[0.9rem] mb-4 sm:text-[1rem]">
                  {blog.exerpt}
                </p>
                <button className="flex items-center justify-start gap-2 text-[0.9rem] mt-3 font-bold">
                  <a href={blog.link} target="_blank">
                    Read more
                  </a>
                  <HiOutlineArrowNarrowRight className="text-[1.2rem]" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog
