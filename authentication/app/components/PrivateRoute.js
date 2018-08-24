import React from "react"
import { Route, Redirect } from "react-router-dom"
import FakeAuth from "../utils/FakeAuth"

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        FakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathName: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
