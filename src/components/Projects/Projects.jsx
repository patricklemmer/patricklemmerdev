// Imports
// React imports
import React, { useEffect, useState } from 'react'

// Data imports
import { buttons } from '../../Data'
import { projects } from '../../Data'

// Component imports
import ProjectFilter from './projectFilter'
import ProjectCards from './projectCards'

function Projects() {
  const [filterImages, setFilterImages] = useState(null)

  useEffect(() => {
    setFilterImages(projects)
  }, [])

  const handleClick = (e) => {
    let buttonType = e.target.value

    const newFilterImages = projects.filter(
      (project) => project.value === buttonType
    )

    buttonType !== 'all'
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects)
  }

  return (
    <div className="section" id="projects">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Projects</h2>
        <div className="w-14 h-[3px] rounded-sm bg-skin-button-primary-light-accent"></div>
      </div>
      <ProjectFilter buttons={buttons} handleClick={handleClick} />
      <ProjectCards buttons={buttons} filterImages={filterImages} />
    </div>
  )
}

export default Projects
