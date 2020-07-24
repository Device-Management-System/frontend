import React, { useContext, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const VerifyEmail = () => {
  const authContext = useContext(AuthContext);
  const { currentUser, getUserState, isAuthenticated } = authContext;
  const history = useHistory();

  const watchUser = useCallback(async () => {
    // Tracks if user email verification has changed.
    if (currentUser && currentUser.VerifyEmail) {
      if (currentUser.isAdmin)
        history.push(`/users/${currentUser.uid}/manager-dashboard`);
      return history.push(`users/${currentUser.uid}/dashboard`);
    }
  }, [currentUser, history]);

  useEffect(() => {
    if (!isAuthenticated) history.replace('/login');
    getUserState();
    watchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchUser]);

  return (
    <div className="landr-container">
      <h4>You need to confirm your email address!!</h4>
      {currentUser && currentUser.email && (
        <p>We sent you an email to this address: {currentUser.email}</p>
      )}
    </div>
  );
};

export default VerifyEmail;
