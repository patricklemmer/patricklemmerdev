// Imports
// React imports
import React from 'react';

// Data imports
import { services } from '../../Data';

function ServiceItems() {
  return (
    <div className="w-full mx-auto sm:w-3/4 md:w-1/2">
      {services.map((service) => {
        return (
          <>
            <div className="card bg-skin-card-light border border-gray-100 rounded-md dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none">
              <figure>
                <img src={service.image} alt="Shoes" />
              </figure>
              <div className="card-body text-justify">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.text}</p>
                <div className="card-actions justify-start">
                  <button className="text-left mt-8 h-8 px-4 text-sm normal-case transition-colors duration-150 rounded-lg cursor-pointer bg-skin-button-tertiary-light border-gray-200 shadow-md text-skin-font-light focus:shadow-outline hover:bg-skin-button-tertiary-light-hover hover:border-gray-200 hover:opacity-90 dark:bg-skin-button-tertiary-dark dark:text-skin-font-dark dark:border-none dark:hover:bg-skin-button-tertiary-dark-hover">
                    <a href={service.link} target="_blank" rel="noreferrer">
                      {service.button}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default ServiceItems;
