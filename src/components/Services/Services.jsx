// Imports
// React imports
import React from 'react'

// Component imports
import ServiceItems from './serviceItems'
import Chat from './Chat'

function Services() {
  return (
    <div className="section" id="services">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">Services</h2>
        <div className="w-14 h-[3px] rounded-sm bg-skin-button-primary-light-accent"></div>
      </div>
      <ServiceItems />
      <Chat />
    </div>
  )
}

export default Services
