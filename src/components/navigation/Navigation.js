import React, { useEffect, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navigation.css';

const Navigation = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const location = useLocation();
  const navRef = useRef();

  const handleScroll = useCallback(() => {
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
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          {!isAuthenticated && (
            <NavItem className="navlink">
              <NavLink to="/login">Login</NavLink>
            </NavItem>
          )}
          {!isAuthenticated && (
            <NavItem className="navlink">
              <button onClick={loginWithRedirect}>Sign up</button>
            </NavItem>
          )}
        </Nav>
      </div>
    </Navbar>
  );
};

export default Navigation;
