// Imports
// React imports
import React, { useState, useEffect } from 'react'

// Data import
import { navLinks } from '../../Data'

// Component imports
import Brand from './Brand'
import NavLinks from './NavLinks'

// Utility imports
import DarkMode from '../../utilities/darkMode'

// Icon imports
import { HiMenu, HiX } from 'react-icons/hi'

// Other imports
import { motion } from 'framer-motion'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [isTop, setIsTop] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsTop(window.scrollY > 20)
    })
  }, [])

  return (
    <nav
      className={`${
        isTop
          ? 'bg-skin-bg-light shadow-md dark:bg-skin-bg-dark dark:shadow-none'
          : ''
      } fixed w-full top-0 left-0 z-20`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 gap-4 xs:gap-6 sm:p-6 sm:gap-8">
        <Brand />
        <div className="md:flex hidden items-center gap-8 mr-4">
          {navLinks.map((navLink) => {
            return (
              <div key={navLink.id}>
                <a
                  href={`#${navLink.href}`}
                  className="focus:text-gray-300 dark:focus:text-gray-600"
                >
                  {navLink.text}
                </a>
              </div>
            )
          })}
        </div>
        {/* Dark Mode */}
        <DarkMode />
        {/* Burger Menu Icon */}
        <HiMenu
          className="text-[1.5rem] w-8 h-8 xs:w-9 xs:h-9 cursor-pointer md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          className="fixed right-0 top-0 h-screen w-72 bg-skin-button-primary-light-accent dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none"
        >
          <div className="flex flex-col gap-8 mt-[40%] ml-[30%]">
            {navLinks.map((navLink) => {
              return (
                <NavLinks key={navLink.id} {...navLink} setToggle={setToggle} />
              )
            })}
          </div>
          <HiX
            className="absolute right-10 top-8 text-3xl cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
