import React, {
  useEffect,
  useRef,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import * as Unicons from '@iconscout/react-unicons';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Navigation.css';

const Navigation = () => {
  const [show, setShow] = useState(false);
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const { isAuthenticated, logout, loginWithRedirect, user } = useAuth0();
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
            <>
              {location.pathname !== `/update-profile/${user.sub.slice(6)}` &&
                user &&
                currentUser &&
                currentUser.first_name &&
                currentUser.last_name && (
                  <div className="user-menu">
                    <button
                      className="current-user"
                      onMouseEnter={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}
                    >
                      <img
                        className="avatar"
                        src={user.picture}
                        alt="profile"
                      />
                      <div>
                        {`${currentUser.first_name} ${currentUser.last_name}`}
                      </div>
                      <div className="chevron">
                        <Unicons.UilAngleDown
                          fill="#3c3c3c"
                          width="1.9rem"
                          height="1.9rem"
                        />
                      </div>
                    </button>
                    <li
                      onMouseEnter={() => setShow(true)}
                      onMouseLeave={() => setShow(false)}
                      className={`navlink-logout ${show ? '' : 'hidden'}`}
                    >
                      <button
                        className="logout"
                        onClick={async () => {
                          await logout({ returnTo: window.location.origin });
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
                        <span>Logout</span>
                      </button>
                    </li>
                  </div>
                )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
