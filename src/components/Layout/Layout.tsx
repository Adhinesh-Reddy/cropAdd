import React from 'react'

import NavBar from '../Nav/NavBar'
import Sections from './../sections/Sections'

const Layout = () => {

  return (
    <div>
      <NavBar />
      <Sections />
    </div>
  )
  // if ( window.location.pathname === '/home') 
  //   {
  //     return (
  //       <div>
  //         {/* <Nav /> */}
  //         <NavBar />
  //         {/* <Nav /> */}
  //         <Sections />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <div>

  //         <NavBar />
  //         {/* <Nav /> */}
  //         <Sections />
  //       </div>
  //     );
  //   }

  };

  export default Layout
