import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import GetStarted from '../../customComponents/customButton/CustomButton';
import { ReactComponent as Devices } from '../../../assets/landr.svg';

import './Billboard.css';

const Billboard = () => {
  const { isAuthenticated } = useAuth0();

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
            {isAuthenticated ? (
              <GetStarted to="/dashboard">Dashboard</GetStarted>
            ) : (
              <GetStarted to="/register">Get Started</GetStarted>
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
