// Imports
// React imports
import React from 'react'

// Component imports
import HeroImage from './heroImage'

// Other imports
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div className="hero section" id="home">
      <div className="hero-content flex flex-col gap-6">
        <HeroImage />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md text-justify"
        >
          <h1 className="text-[1.6rem] text-center font-bold mb-2 md:text-[3rem]">
            Hello! I'm Patrick.
          </h1>
          <h2 className="text-lg text-center mb-2">
            Software Developer 💻 & Wildlife Photographer 🐺
          </h2>
          <p className="text-sm py-2 mb-4">
            I'm a{' '}
            <span className="font-bold">Fullstack Software Developer</span>,
            partly self-taught and partly taught through a bootcamp and at this
            point in time I am fully focused on landing an entry-level role. In
            my previous positions at a tech startup I collaborated closely with
            developers and bridged the gap between business and development. If
            I am not in front of a codebase, breaking things just to fix them up
            again, I can most likely be found outdoors, as I am an avid wildlife
            photographer & nature addict.
          </p>
          <div className="flex flex-wrap justify-center gap-3 w-full md:gap-5">
            <a
              href="https://drive.google.com/file/d/17hHdEl1k3uAEldAa2oxaLFdU4o0k2Q1H/view?usp=share_link"
              target="_blank"
            >
              <button className="btn bg-skin-button-primary-light-accent px-4 text-[0.9rem] normal-case text-skin-font-light border-none shadow-md hover:bg-skin-button-primary-light-accent-hover dark:shadow-none dark:bg-skin-button-primary-dark-accent dark:hover:bg-skin-button-primary-dark-accent-hover">
                Resume
              </button>
            </a>
            <a href="#contact">
              <button className="btn bg-skin-button-secondary-light-accent px-4 text-[0.9rem] normal-case text-skin-font-light border-none shadow-md hover:bg-skin-button-secondary-dark-accent-hover dark:shadow-none dark:bg-skin-button-secondary-dark-accent dark:hover:bg-skin-button-secondary-dark-accent-hover">
                Contact
              </button>
            </a>
            <label
              htmlFor="my-modal-6"
              className="btn bg-skin-button-four-light px-4 text-[0.9rem] normal-case text-skin-font-dark border-none shadow-md hover:bg-skin-button-four-light-hover dark:shadow-none dark:bg-skin-button-four-light dark:hover:bg-skin-button-four-light-hover"
            >
              Recruiter? This way!
            </label>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
