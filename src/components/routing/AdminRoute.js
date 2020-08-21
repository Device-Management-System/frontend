import React, { useEffect, useState, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import Layout from '../layout/Layout';

const AdminRoute = ({ children, ...otherProps }) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const { isAuthenticated, user } = useAuth0();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.is_completed) {
      setIsCompleted(currentUser.is_completed);
    }
  }, [currentUser]);

  return (
    <Route
      {...otherProps}
      render={() => {
        if (
          isAuthenticated &&
          currentUser &&
          isCompleted &&
          user[`${process.env.REACT_APP_AUTH0_AUDIENCE}roles`].includes('admin')
        ) {
          return <Layout>{children}</Layout>;
        } else if (isAuthenticated && currentUser && !isCompleted) {
          return <Redirect to="/update-profile" />;
        } else {
          return <Redirect to="/dashboard" />;
        }
      }}
    ></Route>
  );
};

export default AdminRoute;
