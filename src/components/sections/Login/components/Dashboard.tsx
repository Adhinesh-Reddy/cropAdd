import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import '../Login.css';
export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  async function handleLogout() {
    setError('');
    try {
      if (logout) {
        await logout();
        // localStorage.setItem('useInfo', ' ');
      }
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className='card1 container'>
        <div className='d-flex flex-lg-row flex-column-reverse'>
          <div className='card1 card3' style={{ height: '430px' }}>
            <div className='row justify-content-center my-auto'>
              <div className='col-md-11 col-10 my-5'>
                <h1 className='mb-5 text-center heading' style={{ color: 'white' }}>
                  <b className='fa fa-user-circle'>
                    {' '}
                    &nbsp;
                    <FormattedMessage id='Profile' />
                  </b>
                </h1>
                {error && <Alert variant='danger'>{error}</Alert>}
                <p style={{ fontSize: '20px' }}>
                  <b>
                    <u>
                      <FormattedMessage id='Login.Email' />
                    </u>
                  </b>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; {currentUser?.email}
                </p>
                <br />
                <br />
                <Button
                  className='w-100 btn-outline-success'
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'green',
                    borderStyle: 'solid',
                  }}
                >
                  {' '}
                  <Link to='/update-profile' style={{ color: 'white' }}>
                    <h4 style={{ color: 'green' }}>
                      <b>
                        <FormattedMessage id='Profile.Text1' />
                      </b>{' '}
                    </h4>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className='card1 card2'>
            <div className='my-auto mx-md-15 px-md-15 right'>
              <p style={{ color: 'green', fontSize: '18px' }} className='text-center'>
                {' '}
                <FormattedMessage id='Logout.Text1' />
              </p>
              <Button
                className='w-100'
                variant='link'
                onClick={handleLogout}
                style={{
                  backgroundColor: 'green',
                  color: 'green',
                  borderColor: 'green',
                  borderStyle: 'solid',
                }}
              >
                <h4 style={{ color: 'white' }}>
                  <b>
                    {' '}
                    <FormattedMessage id='Logout' />{' '}
                  </b>
                </h4>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
