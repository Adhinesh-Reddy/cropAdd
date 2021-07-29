import Navbars from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './navbar.scss';
import './../index.css';
import ShadowButton from './ShadowButton';
import NavItem from './NavItem';
import NavBrand from './NavBrand';
import LangSwitcher from './LangSwitcher';
import { FormattedMessage } from 'react-intl';

const ExpertNavBar = () => {
  console.log(window.location.pathname);

  return (
    <>
      <div className='mr-auto shadow' style={{ backgroundColor: '#ffffff' }}>
        <Navbars expand='md' variant='light'>
          <Link to='/expert/crop'>
            <NavBrand />
          </Link>
          <Navbars.Toggle aria-controls='basic-navbar-nav' />
          <Navbars.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto d-flex justify-content-end align-items-center'>
              <LangSwitcher />
              <Dropdown className='mx-2'>
                <Dropdown.Toggle size='lg' className='btn btn-light'>
                  <FormattedMessage id='HelloExpert' />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <FormattedMessage id='Profile.Update' />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FormattedMessage id='Password.Reset' />
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FormattedMessage id='Logout' />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbars.Collapse>
        </Navbars>
      </div>
    </>
  );
};
export default ExpertNavBar;
