import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { GoogleBtn, EmailBtn } from './common/LoginButtons'
import { FormattedMessage } from 'react-intl'

import './../Login.css'
export default function Login() {
  const phoneRef = useRef<HTMLInputElement>(null)
  const { loginViaPhone } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      if (phoneRef && phoneRef.current) {
        if (loginViaPhone) await loginViaPhone(phoneRef.current.value)
      }
      history.push('/dashboardPhone')
    } catch {
      setError('Failed to log in')
    }
    setLoading(false)
  }
  return (
    <>
      <br />
      <br />
      <br />
      <div className="card1 container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card1 card3" style={{ height: '800px' }}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-12 col-10 my-2">
                <h1
                  className="mb-5 text-center heading"
                  style={{ color: 'white' }}
                >
                  <b>
                    <FormattedMessage id='Login.Method1' />
                  </b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="Phone Number">
                    <Form.Label style={{ fontSize: '16px' }}>
                      <b>
                        <FormattedMessage id='Login.Phone' />
                      </b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      style={{ padding: '13px' }}
                      placeholder="   Enter Phone Number"
                      ref={phoneRef}
                      required
                    />
                  </Form.Group>
                  <br />
                  <div id="recaptcha"></div>
                  <Button
                    disabled={loading}
                    style={{
                      backgroundColor: 'white',
                      color: 'green',
                      padding: '11px',
                      borderColor: 'green',
                      borderStyle: 'solid'
                    }}
                    className="w-100 mb-4"
                    type="submit"
                  >
                    <h4>
                      <b className="fa fa-phone"> <FormattedMessage id="Login"/></b>
                    </h4>
                  </Button>

                  <hr />
                  <div className="mt-4 pt-4">
                    <EmailBtn />
                    <GoogleBtn />
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
