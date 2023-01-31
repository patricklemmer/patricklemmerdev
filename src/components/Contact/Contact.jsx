// Imports
// React imports
import React from 'react'

function Contact() {
  return (
    <div className="container mx-auto mb-48 px-8" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Contact</h2>
        <div className="w-14 h-[3px] rounded-sm bg-skin-button-primary-light-accent"></div>
      </div>
      <div className="w-full mx-auto md:w-3/4">
        <div className="card bg-skin-card-light border border-gray-100 rounded-md p-6 dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none">
          <form
            method="POST"
            action="https://public.herotofu.com/v1/b2154d00-977d-11ed-a003-6f0b76086b1c"
          >
            {/* Name */}
            <label className="block mb-6">
              <span className="opacity-80">Name</span>
              <input
                type="text"
                name="name"
                className="
                block
                h-[40px]
                w-full
                mt-1
                p-3
                bg-skin-bg-light
                rounded-md
                shadow-sm
                focus:border-indigo-200
                focus:ring
                focus:ring-indigo-100
                focus:ring-opacity-50
                dark:shadow-none
                dark:bg-skin-card-detail-dark
                dark:text-skin-font-dark
                dark:border-none
        "
                placeholder="Your Name"
                required
              />
              {/* Email */}
            </label>
            <label className="block mb-6">
              <span className="opacity-80">Email address</span>
              <input
                name="email"
                type="email"
                className="
                block
                h-[40px]
                w-full
                mt-1
                p-3
                bg-skin-bg-light
                rounded-md
                shadow-sm
                focus:border-indigo-200
                focus:ring
                focus:ring-indigo-100
                focus:ring-opacity-50
                dark:shadow-none
                dark:bg-skin-card-detail-dark
                dark:text-skin-font-dark
                dark:border-none
        "
                placeholder="yourname@example.com"
                required
              />
            </label>
            {/* Text Area */}
            <label className="block mb-6">
              <span className="opacity-80">Message</span>
              <textarea
                name="message"
                className="
                resize-none
                block
                h-[200px]
                w-full
                mt-1
                p-3
                bg-skin-bg-light
                rounded-md
                shadow-sm
                focus:border-indigo-200
                focus:ring
                focus:ring-indigo-100
                focus:ring-opacity-50
                dark:shadow-none
                dark:bg-skin-card-detail-dark
                dark:text-skin-font-dark
                dark:border-none
        "
                rows="3"
                placeholder="Your message"
                required
              ></textarea>
            </label>
            {/* Button */}
            <div className="mb-6">
              <button
                type="submit"
                className="
                btn
                bg-skin-button-tertiary-light
                border-gray-200
                shadow-md
                text-[0.75rem]
                text-skin-font-light
                transition-colors
                duration-150
                h-10
                px-5 
                focus:shadow-outline
                hover:bg-skin-button-tertiary-light-hover 
                hover:border-gray-200 
                hover:opacity-90 
                dark:bg-skin-button-tertiary-dark 
                dark:text-skin-font-dark 
                dark:border-none 
                dark:hover:bg-skin-button-tertiary-dark-hover
        "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
