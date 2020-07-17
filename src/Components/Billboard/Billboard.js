import React from 'react';

import GetStarted from '../customComponents/CustomButton';

import './Billboard.css';

const Billboard = (props) => {
  return (
    <div className="billboard">
      <div className="billboard-content">
        <h2 className="billboard-header">Discover Landr</h2>
        <p className="billboard-desc">
          Manage your devices accross your teams in a one stop shop application.
        </p>
        <GetStarted to="/auth">Get Started</GetStarted>
      </div>
      <div className="billboard-image" />
    </div>
  );
};

export default Billboard;
