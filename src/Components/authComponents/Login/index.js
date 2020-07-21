import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import AuthContext from '../../../context/auth/authContext';

import {
  LoginContainer,
  LoginPanel,
  LoginForm,
  LoginInput,
} from './Login.styles';

import GoogleButton from '../../customComponents/CustomButton';

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login } = authContext;
  const signIn = () => login(user);
  const [user, onChange, onSubmit] = useForm(signIn);

  return (
    <LoginContainer>
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
          <NavLink to="/register">Need to create an account?</NavLink>
          <p>Or connect with: </p>

          <GoogleButton isGoogleSingIn>Continue with Google</GoogleButton>
        </LoginForm>
      </LoginPanel>
    </LoginContainer>
  );
};

export default Login;