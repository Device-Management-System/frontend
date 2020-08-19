import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import AuthContext from '../context/auth/authContext';
import PostDevice from '../components/PostDevice';

const ManagerDashboard = () => {
  // const authContext = useContext(AuthContext);
  // const { currentUser } = authContext;
  const history = useHistory();

  return (
    <div className="ManagerDashboardContainer">
      <p>You're authenticated</p>
      <PostDevice />
    </div>
  );
};

export default ManagerDashboard;
