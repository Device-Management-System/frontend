import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../../context/auth/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import Layout from '../layout/Layout';

const PrivateRoute = ({ children, ...otherProps }) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const { isAuthenticated } = useAuth0();
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.is_completed)
      setIsCompleted(currentUser.is_completed);
  }, [currentUser]);

  return (
    <Route
      {...otherProps}
      render={() => {
        if (isAuthenticated && currentUser && isCompleted) {
          return <Layout>{children}</Layout>;
        } else if (isAuthenticated && currentUser && !isCompleted) {
          return (
            <Layout>
              <Redirect to="/update-profile" />
            </Layout>
          );
        } else {
          return <Redirect to="/" />;
        }
      }}
    ></Route>
  );
};

export default PrivateRoute;
