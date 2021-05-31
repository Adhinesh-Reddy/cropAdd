import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../Login.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PrivateRoute({ component: Component, ...rest }: any) {
  const { currentUser } = useAuth()
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/loginViaPhone" />
        )
      }}
    />
  )
}
