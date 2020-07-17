import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import SignUp from '../customComponents/CustomButton/CustomButton';
import UserContext from '../../context/currentUser/userContext';

import './Navigation.css';

const Navigation = (props) => {
  const userContext = useContext(UserContext);
  const { isAuthenticated } = userContext;
  return (
    <Navbar className="navigation justify-content-between">
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
        {!isAuthenticated && (
          <NavItem className="navlink">
            <NavLink to="/auth">Login</NavLink>
          </NavItem>
        )}
        {!isAuthenticated && (
          <NavItem className="navlink">
            <SignUp inverted to="/auth">
              Sign up
            </SignUp>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
