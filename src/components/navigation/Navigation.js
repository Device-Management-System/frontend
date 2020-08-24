import React, { useEffect, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navigation.css';

const Navigation = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const location = useLocation();
  const navRef = useRef();

  const handleScroll = useCallback(() => {
    if (location.pathname === '/') {
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
    }
  }, [location]);

  useEffect(() => {
    handleScroll();
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={navRef} className="navigation">
      <div
        className={`${
          location.pathname === '/' ? 'landr-container' : ''
        } content`}
      >
        {!isAuthenticated && (
          <a className="logo" href="/">
            LANDR
          </a>
        )}
        <ul className={`${location.pathname === '/' ? 'nav' : 'nav-right'}`}>
          {!isAuthenticated && location.pathname === '/' ? (
            <>
              <li className="navlink">
                <AnchorLink href="#pricing">Pricing</AnchorLink>
              </li>
              <li className="navlink">
                <AnchorLink href="#team">Team</AnchorLink>
              </li>
              <li className="navlink">
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
              <li className="navlink">
                <button onClick={loginWithRedirect}>Login</button>
              </li>
            </>
          ) : (
            <li className="navlink-logout">
              <button
                className="logout"
                onClick={async () => {
                  await logout();
                  if (process.env.NODE_ENV === 'development') {
                    localStorage.removeItem('token');
                  }
                }}
              >
                <Unicons.UilSignOutAlt
                  fill="#0C0C0C"
                  width="2.2rem"
                  height="2.2rem"
                />{' '}
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
