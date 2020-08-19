import React from 'react';
import Navigation from '../components/navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      {children}
    </div>
  );
};

export default Layout;
