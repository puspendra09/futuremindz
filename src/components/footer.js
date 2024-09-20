import React from 'react'
import '../assests/css/ProjectStyles.css'
import Logo from '../assests/images/logo.png'

function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start mt-auto">
        <div className="container d-flex justify-content-between align-items-center py-3">
          <a className="navbar-brand" href="/">
            <img
              src={Logo}
              alt="Futuremindz"
              height={50}
              width={50}
              className="d-inline-block align-text-top"
            />
          </a>
          <div className="text-end">
            <p className="mb-0">All rights reserved © 2024 Futuremindz</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer