// Imports
// React imports
import React from 'react'

function ProjectFilter({ buttons, handleClick }) {
  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((button) => {
        return (
          <button
            key={button.id}
            value={button.value}
            onClick={handleClick}
            className=" opacity-50 hover:opacity-100 focus:opacity-100"
          >
            {button.name}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilter
