import React, { useState, useEffect, useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUsers,
  faDesktop,
  faMobileAlt,
  faList,
  faQuestionCircle,
  faCogs,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/auth/AuthContext';

import {
  SidebarContainer,
  LinkContainer,
  LogoContainer,
  SidebarLogo,
  SidebarLinkContent,
  SidebarLink,
} from './Sidebar.styles';

const Sidebar = () => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const [roles, setRoles] = useState(null);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      setRoles(user[`${process.env.REACT_APP_AUTH0_AUDIENCE}roles`]);
    }
  }, [user]);
  return (
    <SidebarContainer>
      <LogoContainer>
        <SidebarLogo>Landr</SidebarLogo>
      </LogoContainer>
      {currentUser && currentUser.is_completed ? (
        <LinkContainer>
          <SidebarLinkContent>
            <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
            <SidebarLink to="/dashboard">Dashboard</SidebarLink>
          </SidebarLinkContent>
          <SidebarLinkContent>
            <FontAwesomeIcon icon={faMobileAlt} size="lg" />
            <SidebarLink to={`/devices/${currentUser.id}`}>
              My Devices
            </SidebarLink>
          </SidebarLinkContent>
          <SidebarLinkContent>
            <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
            <SidebarLink to={`/requests/${currentUser.id}`}>
              My Requests
            </SidebarLink>
          </SidebarLinkContent>
          {user && roles && roles.includes('admin') && (
            <>
              <SidebarLinkContent>
                <FontAwesomeIcon icon={faUsers} size="lg" />
                <SidebarLink to="/users">Users</SidebarLink>
              </SidebarLinkContent>
              <SidebarLinkContent>
                <FontAwesomeIcon icon={faDesktop} size="lg" />
                <SidebarLink to="/devices">Devices</SidebarLink>
              </SidebarLinkContent>
              <SidebarLinkContent>
                <FontAwesomeIcon icon={faList} size="lg" />
                <SidebarLink to="/requests/">Requests</SidebarLink>
              </SidebarLinkContent>
            </>
          )}
          <SidebarLinkContent>
            <FontAwesomeIcon icon={faCogs} size="lg" />
            <SidebarLink to={`/settings/${currentUser.id}`}>
              Settings
            </SidebarLink>
          </SidebarLinkContent>
        </LinkContainer>
      ) : (
        <LinkContainer>
          <SidebarContainer>
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            <SidebarLink to="/update-profile">Update Profile</SidebarLink>
          </SidebarContainer>
        </LinkContainer>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
