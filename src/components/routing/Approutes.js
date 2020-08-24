import React from 'react';
import { withRouter } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import Dashboard from '../../pages/dashboard/Dashboard';
import Users from '../../pages/users/Users';
import Devices from '../../pages/devices/Devices';
import Requests from '../../pages/requests/Requests';
import Settings from '../../pages/settings/Settings';
import UserDevices from '../../pages/userDevices/UserDevices';
import UserRequests from '../../pages/userRequests/UserRequests';
import UpdateProfile from '../../pages/updateProfile/UpdateProfile';

const Approutes = (props) => {
  return (
    <>
      <PublicRoute />
      <PrivateRoute exact path="/update-profile">
        <UpdateProfile {...props} />
      </PrivateRoute>
      <PrivateRoute exact path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <AdminRoute exact path="/users">
        <Users />
      </AdminRoute>
      <AdminRoute exact path="/devices">
        <Devices />
      </AdminRoute>
      <AdminRoute exact path="/requests">
        <Requests />
      </AdminRoute>
      <PrivateRoute exact path="/my-devices/:id">
        <UserDevices />
      </PrivateRoute>
      <PrivateRoute exact path="/my-requests/:id">
        <UserRequests />
      </PrivateRoute>
      <PrivateRoute exact path="/settings/:id">
        <Settings />
      </PrivateRoute>
    </>
  );
};

export default withRouter(Approutes);
