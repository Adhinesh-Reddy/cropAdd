import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { EmailBtn, PhoneBtn } from './common/LoginButtons'

import '../Login.css'
import { FormattedMessage } from 'react-intl'

export default function Login() {
  const { loginViaGoogle } = useAuth()
  const [error] = useState('')
  const history = useHistory()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loginViaGoogle) await loginViaGoogle()
    history.push('/dashboard')
  }
  return (
    <>
      <br />
      <br />
      <br />
      <div className="card1 container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card1 card3" style={{ height: '600px' }}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-12 col-10 my-5">
                <h1
                  className="mb-5 text-center heading"
                  style={{ color: 'white' }}
                >
                  <b><FormattedMessage id='Login.Method3' /></b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <GoogleLoginButton
                    onClick={() => handleSubmit}
                    style={{ paddingLeft: '25%' }} />

                  <hr />
                  <div className="mt-4 pt-4">
                    <EmailBtn />
                    <PhoneBtn />
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="card1 card2">
            <div className="my-auto mx-md-15 px-md-15 right">
              <p
                style={{ color: 'green', fontSize: '18px' }}
                className="text-center"
              >
                <FormattedMessage id='Profile.Update1' />
              </p>
              <Button
                className="w-100"
                style={{
                  backgroundColor: 'green',
                  borderColor: 'green',
                  borderStyle: 'solid'
                }}
              >
                <Link to="/signup" style={{ color: 'green' }}>
                  <h4 className="text-white">
                    <b>
                      <FormattedMessage id='Signup' />
                    </b>
                  </h4>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
