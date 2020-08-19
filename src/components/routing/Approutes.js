import React from 'react';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Dashboard from '../../pages/Dashboard';

const Approutes = () => {
  return (
    <>
      <PublicRoute />
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </>
  );
};

export default Approutes;
