import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../Layout';

const AdminRoute = ({ children, ...otherProps }) => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <Route
      {...otherProps}
      render={() =>
        isAuthenticated &&
        user[`${process.env.REACT_APP_AUTH0_AUDIENCE}roles`].includes(
          'admin'
        ) ? (
          <Layout>{children}</Layout>
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    ></Route>
  );
};

export default AdminRoute;
