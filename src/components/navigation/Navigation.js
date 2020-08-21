import React, { useEffect, useRef, useCallback } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
            Landr
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
                <FontAwesomeIcon icon={faSignOutAlt} size="lg" /> Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
