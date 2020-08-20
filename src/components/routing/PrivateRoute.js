import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../layout/Layout';

const PrivateRoute = ({ children, ...otherProps }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <Route
      {...otherProps}
      render={() =>
        isAuthenticated ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    ></Route>
  );
};

export default PrivateRoute;
