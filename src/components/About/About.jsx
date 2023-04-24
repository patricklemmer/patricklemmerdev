// Imports
// React imports
import React from 'react';
import AboutList from './aboutList';

function About() {
  return (
    <div className="section" id="about">
      <div className="mb-8">
        <h3 className="text-[1.5rem] font-bold">About</h3>
        <div className="w-14 h-[3px] rounded-sm bg-skin-button-primary-light-accent"></div>
      </div>
      <AboutList />
    </div>
  );
}

export default About;
