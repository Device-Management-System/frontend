import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../../context/auth/AuthContext';
// import PostDevice from '../../components/PostDevice';

const Dashboard = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth0();
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  console.log(currentUser);

  useEffect(() => {
    if (!isAuthenticated) history.push('/login');
    if (currentUser && !currentUser.is_completed)
      history.push('/update-profile');
  }, [history, isAuthenticated, currentUser]);

  return (
    <div>
      Dashboard
      {/* <PostDevice /> */}
    </div>
  );
};

export default Dashboard;
