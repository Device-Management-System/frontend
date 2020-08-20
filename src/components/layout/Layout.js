import React from 'react';
import Navigation from '../navigation/Navigation';
import Sidebar from '../sidebar/Sidebar';

import { LayoutContainer, LayoutLeft, LayoutRight } from './Layout.styles';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutLeft>
        <Sidebar />
      </LayoutLeft>
      <LayoutRight>
        <Navigation />
        {children}
      </LayoutRight>
    </LayoutContainer>
  );
};

export default Layout;
