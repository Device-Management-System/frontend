import React, { useContext } from 'react';

import AuthContext from '../../../context/auth/authContext';
import GetStarted from '../../customComponents/CustomButton/CustomButton';
import { ReactComponent as Devices } from '../../../assets/Business_SVG.svg';

import './Billboard.css';

const Billboard = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <div className="billboard">
      <div className="landr-container">
        <div className="hero">
          <div className="billboard-content">
            <h2 className="billboard-header">Discover Landr</h2>
            <p className="billboard-desc">
              Manage your devices accross your teams in a one stop shop
              application.
            </p>
            {!isAuthenticated && (
              <GetStarted to="/auth">Get Started</GetStarted>
            )}
            {isAuthenticated && (
              <GetStarted to="/dashboard">Dashboard</GetStarted>
            )}
          </div>
          <div className="billboard-image">
            <Devices alt="landr-hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
