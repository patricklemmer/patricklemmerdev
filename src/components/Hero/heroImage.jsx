// Imports
// React imports
import React from 'react';

// Asset imports
import Hero from '../../assets/hero/hero.jpg';

function HeroImage() {
  return (
    <picture>
      <source />
      <source />
      <img
        src={Hero}
        alt="Hero image showing a vector graphic of an outdoor scene"
        className="rounded-md shadow-lg md:w-4/5 mx-auto dark:shadow-none"
        fetchpriority="high"
      />
    </picture>
  );
}

export default HeroImage;
