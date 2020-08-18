import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { LoginPanel, LoginForm, LoginInput } from './Login.styles';
import GoogleButton from '../../customComponents/customButton/CustomButton';

const Login = () => {
  const signIn = async () => {
    //
  };

  const history = useHistory();

  return (
    <LoginPanel>
      <h4>
        Welcome back to <span>Landr</span>
      </h4>
      <LoginForm>
        <LoginInput type="email" name="email" placeholder="Email" />
        <LoginInput type="password" name="password" placeholder="Password" />
        <LoginInput submit type="submit" value="Log in" />
        <NavLink to="/register" className="create-account">
          Need to create an account?
        </NavLink>
        <p>Or connect with: </p>
        {/* <GoogleButton onClick={googleLogin} isgooglesingin="true" to="#"> */}
        {/* Continue with Google
        </GoogleButton> */}
      </LoginForm>
    </LoginPanel>
  );
};

export default Login;
