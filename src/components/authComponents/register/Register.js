import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import AuthContext from '../../../context/auth/authContext';
import RegisterForm from '../../customComponents/customForm/CustomForm';

import { CustomInput as RegisterInput } from '../../customComponents/customForm/CustomForm.styles';
import { RegisterPanel } from './Register.styes';

const Register = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { register, currentUser } = authContext;
  const signUp = () => register(user);
  const [user, onChange, onSubmit] = useForm(signUp);

  useEffect(() => {
    if (currentUser) history.push('/manager-dashboard');
  }, [currentUser, history]);

  return (
    <RegisterPanel>
      <RegisterForm onSubmit={onSubmit}>
        <RegisterInput
          isauth="true"
          onChange={onChange}
          type="text"
          name="name"
          value={user.name || ''}
          placeholder="Username"
        />
        <RegisterInput
          isauth="true"
          onChange={onChange}
          type="email"
          name="email"
          value={user.email || ''}
          placeholder="Email"
        />
        <RegisterInput
          isauth="true"
          onChange={onChange}
          type="password"
          name="password"
          value={user.password || ''}
          placeholder="Password"
        />
        <RegisterInput isauthsubmit="true" type="submit" value="Register" />
      </RegisterForm>
    </RegisterPanel>
  );
};

export default Register;
