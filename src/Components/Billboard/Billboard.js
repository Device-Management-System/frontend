import React from 'react';

import GetStarted from '../customComponents/CustomButton/CustomButton';
import { ReactComponent as Devices } from '../../assets/Business_SVG.svg';

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
      <div className="billboard-image">
        <Devices style={{ position: 'absolute', top: '60px', left: '-30px' }} />
      </div>
    </div>
  );
};

export default Billboard;
