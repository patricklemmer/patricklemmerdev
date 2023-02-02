// Imports
// React imports
import React, { useState } from 'react'

// Other imports
import { motion, AnimatePresence } from 'framer-motion'

function ProjectCards({ filterImages }) {
  return (
    <AnimatePresence>
      <motion.div className="grid sm:grid-cols-2 mt-12 gap-12 m-2">
        {filterImages &&
          filterImages.map((filterImage) => {
            return (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                key={filterImage.id}
                className="card bg-skin-card-light border border-gray-100 rounded-md dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none"
              >
                <figure className="px-8 pt-8">
                  <motion.img
                    src={filterImage.image}
                    alt="Preview image of the project"
                    className="rounded-md"
                    loading="lazy"
                  />
                </figure>
                <picture>
                  <source type="image/webp" srcSet="" />
                </picture>
                <div className="card-body">
                  <h2 className="card-title text-[1.1rem] sm:text-xl">
                    {filterImage.title}
                  </h2>
                  <p className="text-[0.9rem] mb-4 sm:text-[1rem]">
                    {filterImage.info}
                  </p>
                  <div className="card-actions grid">
                    <div className="flex flex-wrap justify-start gap-2 mb-4">
                      <a href={filterImage.demo} target="_blank">
                        {' '}
                        <input
                          className="h-8 px-4 text-sm normal-case transition-colors duration-150 rounded-lg cursor-pointer bg-skin-button-tertiary-light border-gray-200 shadow-md text-skin-font-light focus:shadow-outline hover:bg-skin-button-tertiary-light-hover hover:border-gray-200 hover:opacity-90 dark:bg-skin-button-tertiary-dark dark:text-skin-font-dark dark:border-none dark:hover:bg-skin-button-tertiary-dark-hover"
                          type="submit"
                          value="Demo"
                        />
                      </a>
                      <a href={filterImage.code} target="_blank">
                        {' '}
                        <input
                          className="h-8 px-4 text-sm normal-case transition-colors duration-150 rounded-lg cursor-pointer bg-skin-button-tertiary-light border-gray-200 shadow-md text-skin-font-light focus:shadow-outline hover:bg-skin-button-tertiary-light-hover hover:border-gray-200 hover:opacity-90 dark:bg-skin-button-tertiary-dark dark:text-skin-font-dark dark:border-none dark:hover:bg-skin-button-tertiary-dark-hover"
                          type="submit"
                          value="Code"
                        />
                      </a>
                      {filterImage.casestudy ? (
                        <a href={filterImage.casestudy} target="_blank">
                          {' '}
                          <input
                            className="h-8 px-4 text-sm normal-case transition-colors duration-150 rounded-lg cursor-pointer bg-skin-button-tertiary-light border-gray-200 shadow-md text-skin-font-light focus:shadow-outline hover:bg-skin-button-tertiary-light-hover hover:border-gray-200 hover:opacity-90 dark:bg-skin-button-tertiary-dark dark:text-skin-font-dark dark:border-none dark:hover:bg-skin-button-tertiary-dark-hover"
                            type="submit"
                            value="Case Study"
                          />
                        </a>
                      ) : (
                        ''
                      )}
                    </div>
                    <div>
                      <div>
                        {
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {filterImage.tools.map((tool, id) => (
                              <p
                                key={id}
                                className="text-[0.85rem] text-skin-font-light max-w-fit border border-gray-300 shadow-md rounded-full px-2 sm:text-[0.8rem] dark:border-zinc-700 dark:bg-skin-card-detail-dark dark:text-skin-font-dark"
                              >
                                {tool.name}
                              </p>
                            ))}
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectCards
