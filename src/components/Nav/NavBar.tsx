import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbars from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button, Dropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
// import {NavLink} from 'react-router-dom'

import './navbar.scss';
import './../index.css';
import { ctxt } from '../../utils/AppContext';
const icon = './../../../assets/images/logo.png';

const NavBar = () => {
  const myContext = useContext(ctxt);
  console.log(window.location.pathname);

  return (
    <>
      <div className=' mr-auto shadow'>
        <Navbars expand='md' variant='light'>
          <Navbars.Brand href='/'>
            <div className='container'>
              <img src={icon} height='70px' className=' logo-main' alt='CropDarpan' />
            </div>
          </Navbars.Brand>
          <Navbars.Toggle aria-controls='basic-navbar-nav' />
          <Navbars.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto justify-content-between align-items-left'>
              <NavLink to='/home' className='nav-link' activeStyle={{ color: "#4FB872" }}>
                <b >
                  <FormattedMessage id='Nav.Text1' />
                </b>
              </NavLink>
              {' '}
              <NavLink to='/about' className='nav-link' activeStyle={{ color: "#4FB872" }}>

                <b>
                  <FormattedMessage id='Nav.Text2' />
                </b>
              </NavLink>
              <NavLink to='/gallery' className='nav-link' activeStyle={{ color: "#4FB872" }}>

                <b>
                  <FormattedMessage id='Nav.Text3' />
                </b>
              </NavLink>
              
              <NavLink to='/download' className='nav-link' activeStyle={{ color: "#4FB872" }}>

                <b>
                  <FormattedMessage id='Nav.Text5' />
                </b>
              </NavLink>

              <NavLink to='/tree' className='nav-link' activeStyle={{ color: "#4FB872" }}>

                <b>
                  Tree
                </b>
              </NavLink>

              <div className='text-center mx-2 inline'>
                <Button
                  className='btn btn-sm btn-outline-success'
                  style={{
                    backgroundColor: '#4FB872',
                    borderColor: 'green',
                    borderStyle: 'solid',
                    borderRadius: 10,
                    width: '8em'
                  }}
                >
                  <Link to='/login' style={{ color: '#4FB872' }}>
                    <strong style={{ color: 'white' }}>
                      <h2>
                        <b>
                          <FormattedMessage id='Nav.Text6' />
                        </b>
                      </h2>
                    </strong>
                  </Link>
                </Button>
              </div>
              <div className='text-center inline'>
                <Button
                  className='btn btn-sm btn-outline-success'
                  style={{
                    borderRadius: 10,
                    backgroundColor: 'white',
                    borderColor: 'green',
                    borderStyle: 'solid'
                  }}
                >
                  <Link to='/signup' style={{ color: 'white' }}>
                    <strong style={{ color: 'black' }}>
                      <h2>
                        <FormattedMessage id='Home.SignUp' defaultMessage='Sign-Up' />
                      </h2>
                    </strong>
                  </Link>
                </Button>
              </div>
              <Dropdown className='mx-2'>
                <Dropdown.Toggle variant='outline-success' size='lg'>
                  Language
                  </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <button className='btn' onClick={() => myContext?.ulSetter('en')}>
                      English
                      </button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className='btn' onClick={() => myContext?.ulSetter('te')}>
                      Telugu
                      </button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <button className='btn' onClick={() => myContext?.ulSetter('fr')}>
                      French
                      </button>
                  </Dropdown.Item>
                <Dropdown.Item>
                    <button className='btn' onClick={() => myContext?.ulSetter('hi')}>
                      Hindi
                      </button>
                  </Dropdown.Item>
                <Dropdown.Item>
                    <button className='btn' onClick={() => myContext?.ulSetter('ka')}>
                      Kannada
                      </button>
                  </Dropdown.Item>
                <Dropdown.Item>
                    <button className='btn' onClick={() => myContext?.ulSetter('ma')}>
                      Malayalam
                      </button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbars.Collapse>
        </Navbars>

      </div>
    </>
  );
}
export default NavBar;
