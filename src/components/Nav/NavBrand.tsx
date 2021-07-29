import React from 'react';
// import { Button, Nav } from "react-bootstrap"
// import {Link, NavLink} from "react-router-dom"
// import {FormattedMessage} from "react-intl"
import Navbars from 'react-bootstrap/Navbar';

const icon = require('./../../../assets/images/logo.png');

const NavBrand = () => {
  return (
    <Navbars.Brand href='/'>
      <div className='container'>
        <img src={icon} height='70px' className=' logo-main' alt='CropDarpan' />
        <h2>Crop Darpan</h2>
      </div>
    </Navbars.Brand>
  );
};

export default React.memo(NavBrand);
