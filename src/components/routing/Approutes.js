import React from 'react';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Dashboard from '../../pages/dashboard/Dashboard';

const Approutes = () => {
  return (
    <>
      <PublicRoute />
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <AdminRoute exact path="/users">
        {/*  */}
      </AdminRoute>
      <AdminRoute exact path="/devices">
        {/*  */}
      </AdminRoute>
      <AdminRoute exact path="/requests">
        {/*  */}
      </AdminRoute>
      <PrivateRoute exact path="/my-devices/:id">
        {/*  */}
      </PrivateRoute>
      <PrivateRoute exact path="/requests/:id">
        {/*  */}
      </PrivateRoute>
      <PrivateRoute exact path="/settings/:id">
        {/*  */}
      </PrivateRoute>
    </>
  );
};

export default Approutes;
