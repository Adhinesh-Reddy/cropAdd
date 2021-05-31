import React from 'react'
import Navbars from 'react-bootstrap/Navbar';

const icon = './../../../assets/images/logo.png';

const Nav=()=> {
  return (
  <Navbars.Brand href='/'>
    <div className='container'>
      <img src={icon} height='110px' className=' logo-main' alt='CropDarpan' />
    </div>
  </Navbars.Brand>
  )
}

export default Nav;