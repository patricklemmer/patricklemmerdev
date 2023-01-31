// Imports
// React imports
import React from 'react'

// Asset imports
import Logo from '../../assets/navbar/logo-memoji.png'

function Brand() {
  return (
    <div className="flex grow">
      <a href="#home" className="flex items-center justify-start">
        {/* Logo */}
        <div className="avatar">
          <div className="w-16 mr-2 xs:mr-4">
            <img src={Logo} className="opacity-100" />
          </div>
        </div>
        {/* Logo Text */}
        <h4 className="text-sm font-bold xs:text-base sm:text-xl md:text-2xl">
          Patrick <span className="opacity-50">Lemmer</span>
        </h4>
      </a>
    </div>
  )
}

export default Brand
