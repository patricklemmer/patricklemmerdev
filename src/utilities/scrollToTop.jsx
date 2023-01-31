// Imports
// React imports
import React, { useEffect, useState } from 'react'

// Icon imports
import { FiArrowUp } from 'react-icons/fi'

function ScrollToTop() {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDisplay(window.scrollY > 400)
    })
  }, [])

  return (
    <>
      {display && (
        <div className="flex items-center justify-center bg-skin-card-light fixed right-[5%] bottom-40 w-14 h-14 rounded-full dark:bg-skin-card-detail-dark">
          <a href="#home">
            <FiArrowUp className="text-3xl opacity-80" />
          </a>
        </div>
      )}
    </>
  )
}

export default ScrollToTop
