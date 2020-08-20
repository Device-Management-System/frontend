import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const { getAccessTokenSilently, user } = useAuth0();

  const fetchAccessToken = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      setToken(accessToken);
    } catch (err) {
      return err;
    }
  }, [getAccessTokenSilently]);

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  authAxios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      const code = err && err.response ? err.response.status : 0;
      if (code === 401) {
        fetchAccessToken();
      }
      return Promise.reject(err);
    }
  );

  authAxios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  const saveUser = useCallback(async () => {
    try {
      if (user) {
        const newUser = {
          id: user.sub.slice(6),
          name: user.nickname,
          email: user.email,
        };

        const res = await authAxios.post('/api/auth', newUser);

        console.log('data= ', res.data);
        setCurrentUser(res.data);
      }
    } catch (err) {
      return err;
    }
    // eslint-disable-next-line
  }, [user, authAxios]);

  useEffect(() => {
    fetchAccessToken();
    if (token) {
      localStorage.setItem('token', token);
      saveUser();
    }
    // eslint-disable-next-line
  }, [fetchAccessToken, token]);

  console.log('currentUser= ', currentUser);
  return (
    <AuthContext.Provider value={{ authAxios, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
