import React from 'react';
import PostDevice from '../components/PostDevice';

const ManagerDashboard = () => {
  return (
    <div className="ManagerDashboardContainer">
      <p>You're authenticated</p>
      <PostDevice />
    </div>
  );
};

export default ManagerDashboard;
