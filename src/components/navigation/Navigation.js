import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import SignUp from '../customComponents/customButton/CustomButton';
import Dashboard from '../customComponents/customButton/CustomButton';
import AuthContext from '../../context/auth/authContext';

import './Navigation.css';

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, getUserState, logout, currentUser } = authContext;

  const history = useHistory();

  useEffect(() => {
    getUserState();
    if (!currentUser) {
      history.push('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <Navbar className="navigation justify-content-between container">
      <Navbar.Brand className="logo" href="/">
        Landr
      </Navbar.Brand>
      <Nav className="nav ml-auto">
        <NavItem className="navlink">
          <AnchorLink href="#pricing">Pricing</AnchorLink>
        </NavItem>
        <NavItem className="navlink">
          <AnchorLink href="#team">Team</AnchorLink>
        </NavItem>
        <NavItem className="navlink">
          <AnchorLink href="#contact">Contact</AnchorLink>
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
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        )}
        {!isAuthenticated && (
          <NavItem className="navlink">
            <SignUp inverted="true" to="/register">
              Sign up
            </SignUp>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
