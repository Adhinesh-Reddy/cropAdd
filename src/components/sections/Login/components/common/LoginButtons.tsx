import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { FormattedMessage } from 'react-intl';

const btnStyle = {
  backgroundColor: 'white',
  padding: '10px',
  borderColor: 'green',
  borderStyle: 'solid',
  fontSize: '1.2rem'
}

export const EmailBtn = () => {
  return (
    <div className="w-100  mt-3">
      <Button className="w-100 btn-outline-success" style={btnStyle}>
        <Link to="/loginViaEmail" style={{ color: 'blue' }}>
          <i className="fa fa-envelope mx-2" /> <FormattedMessage id="Login.Method2"/>
        </Link>
      </Button>
    </div>
  )
}

export const PhoneBtn = () => {
  return (
    <div className="w-100 text-left mt-3">
      <Button className="w-100 btn-outline-success" style={btnStyle}>
        <Link to="/loginViaPhone" style={{ color: 'brown' }}>
          <i className="fa fa-phone mx-2" />  <FormattedMessage id="Login.Method1"/>
        </Link>
      </Button>
    </div>
  )
}

export const GoogleBtn = () => {
  return (
    <div className="w-100 text-center mt-3">
      <Link to="/loginViaGoogle">
        <GoogleLoginButton
          // align="center"
          style={{ paddingLeft: '25%' }}
        />
      </Link>
    </div>
  )
}
