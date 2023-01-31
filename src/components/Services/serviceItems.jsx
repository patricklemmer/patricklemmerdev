// Imports
// React imports
import React from 'react'

// Data imports
// import { services } from '../../Data'

function ServiceItems() {
  return (
    <div className="grid sm:grid-cols-2 mt-12 gap-12 m-2">
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className="card flex gap-4 p-6 bg-skin-card-light border border-gray-100 rounded-md dark:bg-skin-card-dark dark:border dark:border-neutral-800 dark:shadow-none"
          >
            <div>
              <div className="flex gap-6 mb-4 items-center text-skin-font-light text-[1.3rem] dark:text-skin-font-dark">
                {service.icon}
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <div>
                <p className="text-[0.9rem] mb-4 sm:text-[1rem]">
                  {service.text}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ServiceItems
