import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PostDevice from '../../components/PostDevice';

const Dashboard = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) history.push('/login');
  }, [history, isAuthenticated]);

  return (
    <div>
      <p>You're authenticated</p>
      <PostDevice />
    </div>
  );
};

export default Dashboard;
