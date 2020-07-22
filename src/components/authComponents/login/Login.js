import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormPersist } from '../../../hooks/useFormPersist';
import AuthContext from '../../../context/auth/authContext';

import { LoginPanel, LoginForm, LoginInput } from './Login.styles';
import GoogleButton from '../../customComponents/customButton/CustomButton';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, googleLogin } = authContext;
  const signIn = () => login(user);
  const [user, onChange, onSubmit] = useFormPersist(signIn);

  return (
    <LoginPanel>
      <h4>
        Welcome back to <span>Landr</span>
      </h4>
      <LoginForm onSubmit={onSubmit}>
        <LoginInput
          onChange={onChange}
          type="email"
          name="email"
          value={user.email || ''}
          placeholder="Email"
        />
        <LoginInput
          onChange={onChange}
          type="password"
          name="password"
          value={user.password || ''}
          placeholder="Password"
        />
        <LoginInput submit onChange={onChange} type="submit" value="Log in" />
        <NavLink to="/register" className="create-account">
          Need to create an account?
        </NavLink>
        <p>Or connect with: </p>
        <GoogleButton onClick={googleLogin} isgooglesingin="true" to="#">
          Continue with Google
        </GoogleButton>
      </LoginForm>
    </LoginPanel>
  );
};

export default Login;
