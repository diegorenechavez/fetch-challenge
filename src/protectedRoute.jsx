import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
