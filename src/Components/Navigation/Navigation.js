import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UserContext from '../../context/currentUser/userContext';

import './Navigation.css';

const Navigation = (props) => {
  const userContext = useContext(UserContext);

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setCurrentUser(userContext.getUserState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
        {currentUser && (
          <NavItem className="navlink">
            <NavLink to="/auth">Login</NavLink>
          </NavItem>
        )}
        {currentUser && (
          <NavItem className="navlink">
            <NavLink to="/auth">Sign up</NavLink>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
