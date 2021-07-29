import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from '../sections/Login/contexts/AuthContext';
import PrivateRoute from '../sections/Login/components/PrivateRoute';

import NavBar from '../Nav/NavBar';
// import Sections from './../sections/Sections';
import Main from '../sections/Sections';
import ExpertLayout from '../Layout/ExpertLayout';

const Layout = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={Main} />
        <AuthProvider>
          <Switch>{/* <PrivateRoute exact path='/expert' component={ExpertLayout} /> */}</Switch>
        </AuthProvider>
      </Switch>
    </>
  );
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

export default Layout;
