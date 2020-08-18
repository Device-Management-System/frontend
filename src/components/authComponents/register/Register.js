import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../../customComponents/customForm/CustomForm';

import { CustomInput as RegisterInput } from '../../customComponents/customForm/CustomForm.styles';
import { RegisterPanel } from './Register.styes';

const Register = () => {
  const history = useHistory();

  useEffect(() => {}, [history]);

  return (
    <RegisterPanel>
      <RegisterForm>
        <RegisterInput
          isauth="true"
          type="text"
          name="name"
          placeholder="Username"
        />
        <RegisterInput
          isauth="true"
          type="email"
          name="email"
          placeholder="Email"
        />
        <RegisterInput
          isauth="true"
          type="password"
          name="password"
          placeholder="Password"
        />
        <RegisterInput isauthsubmit="true" type="submit" value="Register" />
      </RegisterForm>
    </RegisterPanel>
  );
};

export default Register;
