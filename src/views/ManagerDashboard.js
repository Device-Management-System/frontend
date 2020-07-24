import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';
import PostDevice from '../components/PostDevice';

const ManagerDashboard = () => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const history = useHistory();

  // Checks if user has a verified email.
  useEffect(() => {
    if (currentUser && !currentUser.emailVerified)
      history.push('/verify-email');
  });

  return (
    <div className="ManagerDashboardContainer">
      <p>You're authenticated</p>
      <PostDevice />
    </div>
  );
};

export default ManagerDashboard;
