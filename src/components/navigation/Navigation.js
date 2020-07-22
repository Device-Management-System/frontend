import React, { useContext, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    getUserState();
    if (!currentUser) {
      history.push('/');
    }

    const handleScroll = () => {
      if (window.pageYOffset > 30) {
        navRef.current.classList.add('sticky');
        navRef.current.classList.add('animated');
        navRef.current.classList.add('fadeIn');
        navRef.current.classList.add('fast');
      } else {
        navRef.current.classList.remove('sticky');
        navRef.current.classList.remove('animated');
        navRef.current.classList.remove('fadeIn');
        navRef.current.classList.remove('fast');
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  return (
    <Navbar ref={navRef} className="justify-content-between navigation">
      <div className="container">
        <Navbar.Brand className="logo" href="/">
          Landr
        </Navbar.Brand>
        <Nav className="nav ml-auto">
          {location.pathname === '/' ? (
            <>
              <NavItem className="navlink">
                <AnchorLink href="#pricing">Pricing</AnchorLink>
              </NavItem>
              <NavItem className="navlink">
                <AnchorLink href="#team">Team</AnchorLink>
              </NavItem>
              <NavItem className="navlink">
                <AnchorLink href="#contact">Contact</AnchorLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem className="navlink">
                <NavLink to="/">Home</NavLink>
              </NavItem>
            </>
          )}
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
      </div>
    </Navbar>
  );
};

export default Navigation;
