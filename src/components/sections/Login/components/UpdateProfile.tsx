import React, { useRef, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import '../Login.css'
import { FormattedMessage } from 'react-intl'
export default function UpdateProfile() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (passwordRef?.current?.value !== passwordConfirmRef?.current?.value) {
      return setError('Passwords do not match')
    }
    const promises = []
    setLoading(true)
    setError('')

    if (emailRef && emailRef.current && currentUser && updateEmail) {
      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
      }
    }
    if (passwordRef && passwordRef.current && updatePassword) {
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }
    }
    Promise.all(promises)
      .then(() => {
        history.push('/dashboard')
      })
      .catch(() => {
        setError('Failed to update account')
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <>
      <br />
      <div className="card1 container">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card1 card3">
            <div className="row justify-content-center my-auto">
              <div className="col-md-11 col-10 my-5">
                <h1
                  className="mb-5 text-center heading"
                  style={{ color: 'white' }}
                >
                  <b className="fa fa-user"> &nbsp; <FormattedMessage id='Profile.Update' /></b>
                </h1>
                {error && <Alert variant="danger">{error}</Alert>}
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
                      // defaultValue={currentUser.email}
                    />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label style={{ fontSize: '16px' }}>
                      <b>Password</b>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      style={{ fontSize: '13px' }}
                      ref={passwordRef}
                      placeholder="Leave blank to keep the same"
                    />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label style={{ fontSize: '16px' }}>
                      <b><FormattedMessage id='Password.Confirm' /></b>
                    </Form.Label>
                    <Form.Control
                      type="password"
                      style={{ fontSize: '13px' }}
                      ref={passwordConfirmRef}
                      placeholder="Leave blank to keep the same"
                    />
                  </Form.Group>
                  <br />
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
                      <b> Update</b>
                    </h4>
                  </Button>
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
                {' '}
                <FormattedMessage id='Profile.Update2' />{' '}
              </p>
              <Button
                className="w-100"
                style={{
                  backgroundColor: 'green',
                  borderColor: 'green',
                  borderStyle: 'solid'
                }}
              >
                <Link to="/dashboard" style={{ color: 'green' }}>
                  <h4 className="text-white">
                    <b>Cancel</b>
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
