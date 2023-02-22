// Imports
// React imports
import React from 'react';

// Component imports
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

// Utility imports
import ScrollToTop from './utilities/scrollToTop';

function App() {
  return (
    <div className="w-full overflow-y-hidden font-sans bg-skin-bg-light text-skin-font-light dark:bg-skin-bg-dark dark:text-skin-font-dark">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-skin-modal-light border border-gray-100 rounded-md dark:bg-skin-modal-dark dark:border dark:border-neutral-800 dark:shadow-none">
          <h3 className="font-bold text-lg">Hey you!</h3>
          <p className="py-4">
            Seeing you here, likely means that you are trying to find out more
            about me, and see if I am a potential fit for your open role. <br />{' '}
            <br /> To make it as easy as possible, I have created a digital
            profile card with the most relevant information related to my
            profile as a job seeker. <br /> <br />
            No time wasted searching for stuff, it's all in one place. Just
            reach out if there is anything else you would like to know or
            directly get in touch for a chat. Looking forward to hearing from
            you.
          </p>
          <div className="modal-action flex justify-end">
            <a
              href="https://patricklemmer-profile.netlify.app/"
              target="_blank"
            >
              <button className="btn h-8 px-4 normal-case text-xs transition-colors duration-150 rounded-lg cursor-pointer bg-skin-button-five-light border-none shadow-md text-skin-font-light sm:text-sm focus:shadow-outline hover:bg-skin-button-five-light-hover hover:border-gray-200 dark:bg-skin-button-five-dark dark:text-skin-font-dark dark:border-none dark:hover:bg-skin-button-five-dark-hover">
                I like saving time!
              </button>
            </a>
            <label
              htmlFor="my-modal-6"
              className="btn h-8 px-4 normal-case text-xs transition-colors duration-150 rounded-lg cursor-pointer bg-skin-button-tertiary-light border-none shadow-md text-skin-font-light sm:text-sm focus:shadow-outline hover:bg-skin-button-tertiary-light-hover hover:border-gray-200 dark:bg-skin-button-tertiary-dark dark:text-skin-font-dark dark:border-none dark:hover:bg-skin-button-tertiary-dark-hover"
            >
              Back to Home
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
