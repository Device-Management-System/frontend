import React, { useReducer } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AuthContext } from '../auth/AuthContext';
import UserContext from './userContext';
import userReducer from './userReducer';

const UserState = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = useAuth0();
  const { authAxios } = authContext;

  return (
    <UserContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
