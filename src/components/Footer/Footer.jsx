// Imports
// React imports
import React from 'react'

// Asset import
import { FaLinkedinIn } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaDev } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'

function Footer() {
  // Updates the n (year) in the footer automatically
  const Year = new Date()

  return (
    <>
      <footer className="footer p-10 border-t dark:border-t-gray-600">
        <div>
          <span className="footer-title">More About me</span>
          <a className="link link-hover">Freelance - coming soon!</a>
          <a
            href="https://www.patricklemmer.com/"
            target="_blank"
            className="link link-hover"
          >
            Photographic Portfolio
          </a>
        </div>
        <div>
          <span className="footer-title">"Build to learn" projects</span>
          <a
            href="https://patricklemmer-wildlife-tours.netlify.app/"
            target="_blank"
            className="link link-hover"
          >
            Wildlife Tours
            <span className="badge ml-1 text-[0.85rem] bg-skin-card-light text-skin-font-light max-w-fit border border-gray-300 shadow-md rounded-full px-2 sm:text-[0.8rem] dark:border-zinc-700 dark:bg-skin-card-detail-dark dark:text-skin-font-dark">
              This taught me React props
            </span>
          </a>
          <a
            href="https://patricklemmer-meerkat-animation.netlify.app/"
            target="_blank"
            className="link link-hover"
          >
            Meerkat Animation{' '}
            <span className="badge ml-1 text-[0.85rem] bg-skin-card-light text-skin-font-light max-w-fit border border-gray-300 shadow-md rounded-full px-2 sm:text-[0.8rem] dark:border-zinc-700 dark:bg-skin-card-detail-dark dark:text-skin-font-dark">
              My first lines of JavaScript code
            </span>
          </a>
          <a
            href="https://patricklemmer-random-number-generator.netlify.app/"
            target="_blank"
            className="link link-hover"
          >
            Random Number Generator
            <span className="badge ml-1 text-[0.85rem] bg-skin-card-light text-skin-font-light max-w-fit border border-gray-300 shadow-md rounded-full px-2 sm:text-[0.8rem] dark:border-zinc-700 dark:bg-skin-card-detail-dark dark:text-skin-font-dark">
              Get your lottery numbers
            </span>
          </a>
        </div>
        <div>
          <span className="footer-title">Other Links</span>
          <a
            href="https://drive.google.com/file/d/1OmpiS1AuVhlazyhiBUK1ejM7FTn1TBV4/view"
            target="_blank"
            className="link link-hover"
          >
            MyFlix Case Study
          </a>
        </div>
      </footer>
      <footer className="footer bg-gradient flex flex-wrap justify-between items-center px-10 py-4 border-t dark:border-t-gray-600">
        <div className="items-center grid-flow-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="24"
            width="24"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
            </defs>
            <g fill="#a6adbb" fillOpacity="1">
              <g transform="translate(0.0000045, 295.926975)">
                <g>
                  <path d="M 41.824219 0.9375 L 57.117188 0.3125 L 62.734375 0.625 L 69.914062 0 L 76.46875 -2.496094 L 79.277344 -9.050781 L 78.964844 -15.292969 L 79.277344 -22.160156 L 78.652344 -33.707031 L 79.277344 -39.640625 L 78.964844 -46.816406 L 81.773438 -52.4375 L 88.953125 -55.871094 L 95.820312 -56.492188 L 102.375 -55.246094 L 134.523438 -57.742188 L 164.175781 -69.601562 L 168.855469 -73.347656 L 173.226562 -78.339844 L 177.28125 -82.398438 L 181.339844 -87.082031 L 187.894531 -97.070312 L 193.203125 -109.242188 L 194.136719 -116.109375 L 196.011719 -121.101562 L 196.632812 -146.695312 L 195.386719 -152 L 194.449219 -158.867188 L 190.703125 -170.417969 L 184.773438 -181.027344 L 177.28125 -191.328125 L 163.238281 -203.5 L 152.9375 -210.367188 L 140.453125 -214.113281 L 135.148438 -216.296875 L 128.90625 -216.296875 L 122.664062 -218.484375 L 113.300781 -218.792969 L 103.3125 -218.484375 L 96.445312 -217.546875 L 77.40625 -217.859375 L 71.164062 -218.792969 L 51.8125 -217.546875 L 44.945312 -217.859375 L 39.328125 -218.792969 L 32.773438 -217.546875 L 26.21875 -214.113281 L 23.410156 -209.121094 L 23.722656 -171.351562 L 22.472656 -158.867188 L 23.097656 -152.9375 L 22.785156 -72.097656 L 23.410156 -66.167969 L 23.097656 -8.425781 L 26.53125 -2.496094 L 36.207031 0.625 Z M 88.640625 -105.808594 L 82.398438 -109.554688 L 79.589844 -114.859375 L 78.652344 -140.140625 L 79.277344 -146.695312 L 79.277344 -159.492188 L 82.398438 -165.421875 L 88.953125 -168.542969 L 121.414062 -167.609375 L 127.65625 -164.796875 L 132.648438 -161.363281 L 136.707031 -157.308594 L 139.828125 -151.066406 L 140.765625 -145.445312 L 141.390625 -136.707031 L 140.765625 -128.28125 L 138.582031 -122.664062 L 135.769531 -117.667969 L 131.714844 -112.675781 L 126.71875 -108.929688 L 121.726562 -107.367188 L 112.050781 -106.121094 L 96.132812 -106.433594 Z M 88.640625 -105.808594 " />
                </g>
              </g>
            </g>
            <g fill="#a6adbb" fillOpacity="1">
              <g transform="translate(205.373396, 295.926975)">
                <g>
                  <path d="M 23.722656 -11.234375 L 25.90625 -3.121094 L 31.835938 0 L 38.078125 0.625 L 51.1875 -0.3125 L 63.359375 0.3125 L 75.21875 -0.3125 L 81.152344 0.625 L 88.015625 0 L 149.816406 0.3125 L 155.746094 -2.808594 L 159.179688 -12.484375 L 158.867188 -37.765625 L 156.058594 -47.128906 L 150.441406 -50.875 L 143.886719 -50.25 L 137.957031 -49.003906 L 131.402344 -49.9375 L 118.605469 -49.625 L 112.363281 -50.875 L 106.746094 -49.9375 L 94.570312 -50.5625 L 88.015625 -49.9375 L 81.773438 -52.4375 L 79.277344 -58.679688 L 79.589844 -164.484375 L 78.964844 -171.976562 L 79.589844 -184.460938 L 78.652344 -202.253906 L 78.964844 -208.183594 L 75.84375 -215.050781 L 69.601562 -218.792969 L 57.429688 -218.792969 L 51.1875 -217.546875 L 38.703125 -218.792969 L 32.773438 -217.859375 L 26.21875 -215.363281 L 23.410156 -208.496094 L 23.410156 -164.796875 L 22.785156 -158.867188 L 23.410156 -152.625 L 22.472656 -141.078125 L 22.785156 -134.210938 L 23.410156 -128.28125 Z M 23.722656 -11.234375 " />
                </g>
              </g>
            </g>
          </svg>
          <p>
            Copyright © {Year.getFullYear()} - This website was designed and
            coded by Patrick Lemmer
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/patricklemmer/"
              className="mr-2 text-[1rem] hover:text-skin-hover-linkedin"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/patricklemmer"
              className="mr-2 text-[1rem] hover:text-skin-hover-github hover:dark:text-skin-hover-github-dark"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/patrick_lemmer"
              className="mr-2 text-[1rem] hover:text-skin-hover-twitter"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/patrick_lemmer/"
              className="mr-2 text-[1rem] hover:text-skin-hover-instagram"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://dev.to/patricklemmer"
              className="mr-2 text-[1rem] hover:text-skin-hover-dev"
              target="_blank"
            >
              <FaDev />
            </a>
            <a
              href="https://medium.com/@patricklemmer"
              className="mr-2 text-[1rem] hover:text-skin-hover-medium"
              target="_blank"
            >
              <BsMedium />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
