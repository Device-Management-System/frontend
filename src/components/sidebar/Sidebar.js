import React from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,
  faUsers,
  faDesktop,
  faMobileAlt,
  faQuestionCircle,
  faCogs,
} from '@fortawesome/free-solid-svg-icons';

import {
  SidebarContainer,
  LinkContainer,
  LogoContainer,
  SidebarLogo,
  SidebarLinkContent,
  SidebarLink,
} from './Sidebar.styles';

const Sidebar = () => {
  // const { user } = useAuth0();

  return (
    <SidebarContainer>
      <LogoContainer>
        <SidebarLogo>Landr</SidebarLogo>
      </LogoContainer>
      <LinkContainer>
        <SidebarLinkContent>
          <FontAwesomeIcon icon={faTachometerAlt} size="lg" />{' '}
          <SidebarLink to="/dashboard">Dashboard</SidebarLink>
        </SidebarLinkContent>
        <SidebarLinkContent>
          <FontAwesomeIcon icon={faUsers} size="lg" />{' '}
          <SidebarLink to="/users">Users</SidebarLink>
        </SidebarLinkContent>
        <SidebarLinkContent>
          <FontAwesomeIcon icon={faDesktop} size="lg" />{' '}
          <SidebarLink to="/devices">Devices</SidebarLink>
        </SidebarLinkContent>
        <SidebarLinkContent>
          <FontAwesomeIcon icon={faMobileAlt} size="lg" />{' '}
          <SidebarLink to="/my-devices/:sub">My Devices</SidebarLink>
        </SidebarLinkContent>
        <SidebarLinkContent>
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />{' '}
          <SidebarLink to="/my-devices/:sub">Requests</SidebarLink>
        </SidebarLinkContent>
        <SidebarLinkContent>
          <FontAwesomeIcon icon={faCogs} size="lg" />{' '}
          <SidebarLink to="/settings/">Settings</SidebarLink>
        </SidebarLinkContent>
      </LinkContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
