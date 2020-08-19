import React, { createContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthContext = createContext();

export const AuthState = ({ children }) => {
  const [token, setToken] = useState(null);
  const { getAccessTokenSilently } = useAuth0();

  const fetchAccessToken = useCallback(async () => {
    try {
      const accessToken = await getAccessTokenSilently();
      setToken(accessToken);
    } catch (err) {
      console.log(err);
    }
  }, [getAccessTokenSilently]);

  useEffect(() => {
    fetchAccessToken();
    if (token) localStorage.setItem('token', token);
  }, [fetchAccessToken, token]);

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

  return (
    <AuthContext.Provider value={{ authAxios }}>
      {children}
    </AuthContext.Provider>
  );
};
