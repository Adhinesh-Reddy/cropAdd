import Navbars from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import {NavLink} from 'react-router-dom'

import './navbar.scss';
import './../index.css';
import ShadowButton from './ShadowButton';
import NavItem from './NavItem';
import NavBrand from './NavBrand';
import LangSwitcher from './LangSwitcher';

const NavBar = () => {
  console.log(window.location.pathname);

  return (
    <>
      <div className='mr-auto shadow' style={{ backgroundColor: '#ffffff' }}>
        <Navbars expand='md' variant='light'>
          <NavBrand />
          <Navbars.Toggle aria-controls='basic-navbar-nav' />
          <Navbars.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto d-flex justify-content-end align-items-center'>
              <NavItem titleId='Nav.Text1' path='/home' />
              <NavItem titleId='Nav.Text2' path='/about' />
              <NavItem titleId='Nav.Text3' path='/gallery' />
              <NavItem titleId='Nav.Text5' path='/download' />

              <ShadowButton
                titleId='Nav.Text6'
                linkPath={'/login'}
                buttonStyle={{ backgroundColor: '#4FB872' }}
                textStyle={{ color: 'white' }}
              />
              <ShadowButton titleId='Home.SignUp' linkPath={'/signup'} textStyle={{ color: 'black' }} />

              <LangSwitcher />
            </Nav>
          </Navbars.Collapse>
        </Navbars>
      </div>
    </>
  );
};
export default NavBar;
