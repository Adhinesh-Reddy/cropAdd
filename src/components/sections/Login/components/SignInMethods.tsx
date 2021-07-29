import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import '../Login.css'
import { FormattedMessage } from 'react-intl'

export default function Login() {
  // const emailRef = useRef<HTMLInputElement>(null)
  // const passwordRef = useRef<HTMLInputElement>(null)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  function handleSubmitViaEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    history.push('/loginViaEmail')
    setLoading(false)
  }
  function handleSubmitViaPhone(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    history.push('/loginViaPhone')
    setLoading(false)
  }
  function handleSubmitViaGoogle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    history.push('/loginViaGoogle')
    setLoading(false)
  }
  return (
    <>
      <div className="d2 container">
        <div className="d1 container">
          <h4 className="text-center mb-4"><FormattedMessage id='Login.Methods' /> </h4>
          <Form onSubmit={handleSubmitViaEmail}>
            <Button disabled={loading} className="w-100" type="submit">
              <b><FormattedMessage id="Email"/></b>
            </Button>
          </Form>
          <Form onSubmit={handleSubmitViaPhone}>
            <Button
              disabled={loading}
              style={{ backgroundColor: '#66CDAA' }}
              className="w-100 mt-3"
              type="submit"
            >
              <b><FormattedMessage id="Phone"/></b>
            </Button>
          </Form>
          <Form onSubmit={handleSubmitViaGoogle}>
            <Button
              disabled={loading}
              style={{ backgroundColor: '#9ACD32' }}
              className="w-100 mt-3"
              type="submit"
            >
              <b> <FormattedMessage id="Google"/> </b>
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
