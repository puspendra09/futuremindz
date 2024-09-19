import React from 'react'
import '../assests/css/footer.css'
import Logo from '../assests/images/logo.png'

function Footer() {
  return (
    <div className='main-section '>
      <img src={Logo} alt='logo' />
      <div>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer