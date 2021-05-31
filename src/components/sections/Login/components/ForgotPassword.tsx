import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';
import '../Login.css'
export default function ForgotPassword() {
  const emailRef = useRef<HTMLInputElement>(null)
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      setMessage('')
      setError('')
      setLoading(true)
      if (resetPassword && emailRef && emailRef.current)
        await resetPassword(emailRef?.current?.value)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }
    setLoading(false)
  }
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="card1 container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card1 card4">
            <div className="row justify-content-center my-auto">
              <div className="col-md-12 col-10 my-5">
                <h1 className="mb-5 text-center" style={{ color: 'white' }}>
                  <b>Password Reset</b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label style={{ fontSize: '16px' }}>
                      <b>Email</b>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      style={{ fontSize: '13px' }}
                      placeholder="Enter Email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    style={{
                      backgroundColor: 'white',
                      color: 'green',
                      borderColor: 'green',
                      borderStyle: 'solid'
                    }}
                    className="w-100"
                    type="submit"
                  >
                    <h4>
                      <b> Reset Password</b>
                    </h4>
                  </Button>
                </Form>
                <br />
                <br />
                <br />
                <div className="w-100">
                  <h2 style={{ color: '#d8fa82' }}>
                    <b>----- Login Methods -----</b>{' '}
                  </h2>
                  <br />
                </div>
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-100"
                    style={{
                      backgroundColor: '#66CDAA',
                      borderColor: 'green',
                      borderStyle: 'solid'
                    }}
                  >
                    <Link to="/loginViaPhone">
                      <h4 className="text-white">
                        <b className="fa fa-phone">
                          {' '}
                          &nbsp;&nbsp;  <FormattedMessage id='Login.Method1' />
                        </b>
                      </h4>
                    </Link>
                  </Button>
                </div>
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-100"
                    style={{ borderColor: 'green', borderStyle: 'solid' }}
                  >
                    <Link to="/loginViaEmail">
                      <h4 className="text-white">
                        <b className="fa fa-envelope">
                          {' '}
                          &nbsp;&nbsp;   <FormattedMessage id='Login.Method2' />
                        </b>
                      </h4>
                    </Link>
                  </Button>
                </div>
                <div className="w-100 text-center mt-3">
                  <Button
                    className="w-100"
                    style={{
                      backgroundColor: '#9ACD32',
                      borderColor: 'green',
                      borderStyle: 'solid'
                    }}
                  >
                    <Link to="/loginViaGoogle">
                      <h4 className="text-white">
                        <b className="fab fa-google">
                          &nbsp;&nbsp; <FormattedMessage id='Login.Method3' />
                        </b>
                      </h4>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="card1 card5">
            <div className="my-auto mx-md-15 px-md-15 right">
              <p
                style={{ color: 'green', fontSize: '18px' }}
                className="text-center"
              >
                Dont have an account?
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
                    <b>Sign up</b>
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
