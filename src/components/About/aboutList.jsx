// Imports
// React imports
import React from 'react'

// Data imports
import { aboutLists } from '../../Data'

function AboutList() {
  return (
    <div className="grid gap-6 mx-1 sm:grid-cols-2 sm:mx-3">
      {aboutLists.map((list) => (
        <ol
          key={list.id}
          className="bg-skin-card-light border border-gray-100 rounded-md p-4 dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none"
        >
          <h2 className="text-lg font-bold mb-6">{list.header}</h2>
          <h4 className="italic text-sm mb-4">{list.date}</h4>
          {list.lists.map((item) => (
            <li
              key={item.id}
              className="flex items-center text-left mt-4 text-[0.9rem] sm:text-[1rem]"
            >
              {item.point}
            </li>
          ))}
        </ol>
      ))}
    </div>
  )
}

export default AboutList
