import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../../context/auth/AuthContext';
import Layout from '../layout/Layout';

const SettingRoute = ({ children, ...otherProps }) => {
  const { isAuthenticated } = useAuth0();
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.is_completed) {
      setTimeout(() => {
        setIsCompleted(currentUser.is_completed);
      }, 400);
    }
  }, [currentUser]);
  return (
    <Route
      {...otherProps}
      render={() => {
        if (isAuthenticated && currentUser && !isCompleted) {
          return <Layout>{children}</Layout>;
        }

        if (!isAuthenticated && !currentUser) {
          return <Redirect to="/" />;
        }

        if (
          isAuthenticated &&
          currentUser &&
          currentUser.is_completed &&
          isCompleted
        ) {
          return <Redirect to="/dashboard" />;
        }
      }}
    />
  );
};

export default SettingRoute;
