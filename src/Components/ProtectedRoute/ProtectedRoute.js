import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...restOfProps} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
