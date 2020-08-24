import React, { useState, useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import { AuthContext } from '../../context/auth/AuthContext';

import {
  SidebarContainer,
  LinkContainer,
  LogoContainer,
  SidebarLogo,
  SidebarHeader,
  SidebarLink,
  SidebarLabel,
  BlankLink,
} from './Sidebar.styles';

const Sidebar = () => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const [roles, setRoles] = useState(null);
  const { user } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setRoles(user[`${process.env.REACT_APP_AUTH0_AUDIENCE}roles`]);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <SidebarContainer>
      <LogoContainer>
        <SidebarLogo>Landr</SidebarLogo>
      </LogoContainer>
      {currentUser && currentUser.is_completed ? (
        <LinkContainer>
          <SidebarHeader>Profile</SidebarHeader>
          <SidebarLink to="/dashboard">
            {location.pathname === '/dashboard' ? (
              <Unicons.UilApps fill="#FFF" width="1.6rem" height="1.6rem" />
            ) : (
              <Unicons.UilApps
                fill="#fffffd91"
                width="1.6rem"
                height="1.6rem"
              />
            )}
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarLink>
          <SidebarLink to={`/my-devices/${currentUser.id}`}>
            {location.pathname === `/my-devices/${currentUser.id}` ? (
              <Unicons.UilTablet fill="#FFF" width="1.6rem" height="1.6rem" />
            ) : (
              <Unicons.UilTablet
                fill="#fffffd91"
                width="1.6rem"
                height="1.6rem"
              />
            )}
            <SidebarLabel>My Devices</SidebarLabel>
          </SidebarLink>
          <SidebarLink to={`/my-requests/${currentUser.id}`}>
            {location.pathname === `/my-requests/${currentUser.id}` ? (
              <Unicons.UilCommentQuestion
                fill="#FFF"
                width="1.6rem"
                height="1.6rem"
              />
            ) : (
              <Unicons.UilCommentQuestion
                fill="#fffffd91"
                width="1.6rem"
                height="1.6rem"
              />
            )}
            <SidebarLabel>My Requests</SidebarLabel>
          </SidebarLink>
          <SidebarLink to={`/settings/${currentUser.id}`}>
            {location.pathname === `/settings/${currentUser.id}` ? (
              <Unicons.UilSetting fill="#FFF" width="1.6rem" height="1.6rem" />
            ) : (
              <Unicons.UilSetting
                fill="#fffffd91"
                width="1.6rem"
                height="1.6rem"
              />
            )}
            <SidebarLabel>Settings</SidebarLabel>
          </SidebarLink>
          {user && roles && roles.includes('admin') && (
            <>
              <SidebarHeader>Admin</SidebarHeader>
              <SidebarLink to="/users">
                {location.pathname === '/users' ? (
                  <Unicons.UilUsersAlt
                    fill="#FFF"
                    width="1.6rem"
                    height="1.6rem"
                  />
                ) : (
                  <Unicons.UilUsersAlt
                    fill="#fffffd91"
                    width="1.6rem"
                    height="1.6rem"
                  />
                )}
                <SidebarLabel>Users</SidebarLabel>
              </SidebarLink>
              <SidebarLink to="/devices">
                {location.pathname === '/devices' ? (
                  <Unicons.UilDesktop
                    fill="#FFF"
                    width="1.6rem"
                    height="1.6rem"
                  />
                ) : (
                  <Unicons.UilDesktop
                    fill="#fffffd91"
                    width="1.6rem"
                    height="1.6rem"
                  />
                )}
                <SidebarLabel>Devices</SidebarLabel>
              </SidebarLink>

              <SidebarLink to="/requests">
                {location.pathname === '/requests' ? (
                  <Unicons.UilClipboardNotes
                    fill="#FFF"
                    width="1.6rem"
                    height="1.6rem"
                  />
                ) : (
                  <Unicons.UilClipboardNotes
                    fill="#fffffd91"
                    width="1.6rem"
                    height="1.6rem"
                  />
                )}
                <SidebarLabel>Requests</SidebarLabel>
              </SidebarLink>
            </>
          )}
        </LinkContainer>
      ) : (
        <LinkContainer>
          <BlankLink />
        </LinkContainer>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
