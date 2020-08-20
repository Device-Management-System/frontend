import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';

const UpdateProfile = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;

  useEffect(() => {
    if (currentUser && currentUser.is_completed) history.push('/dashboard');
  });
  return <div>UpdateProfile</div>;
};

export default UpdateProfile;
