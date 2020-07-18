import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import SignUp from '../customComponents/CustomButton/CustomButton';
import Dashboard from '../customComponents/CustomButton/CustomButton';
import AuthContext from '../../context/auth/authContext';

import './Navigation.css';

const Navigation = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, getUserState, logout } = authContext;

  useEffect(() => {
    getUserState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Navbar className="navigation justify-content-between container">
      <Navbar.Brand className="logo" href="/">
        Landr
      </Navbar.Brand>
      <Nav className="nav ml-auto">
        <NavItem className="navlink">
          <NavLink to="#pricing">Pricing</NavLink>
        </NavItem>
        <NavItem className="navlink">
          <NavLink to="#team">Team</NavLink>
        </NavItem>
        <NavItem className="navlink">
          <NavLink to="#contact">Contact</NavLink>
        </NavItem>
        {isAuthenticated && (
          <NavItem className="navlink">
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </NavItem>
        )}
        {isAuthenticated && (
          <NavItem className="navlink">
            <Dashboard to="/dashboard">Dashboard</Dashboard>
          </NavItem>
        )}
        {!isAuthenticated && (
          <NavItem className="navlink">
            <NavLink to="/auth">Login</NavLink>
          </NavItem>
        )}
        {!isAuthenticated && (
          <NavItem className="navlink">
            <SignUp inverted="true" to="/auth">
              Sign up
            </SignUp>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
