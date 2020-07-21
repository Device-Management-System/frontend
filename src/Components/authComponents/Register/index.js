import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import AuthContext from '../../../context/auth/authContext';

const Register = (props) => {
  const authContext = useContext(AuthContext);
  const { register, currentUser } = authContext;

  const history = useHistory();

  const signUp = () => {
    register(user);
  };

  useEffect(() => {
    if (currentUser) history.push('/manager-dashboard');
  }, [currentUser, history]);

  const [user, onChange, onSubmit] = useForm(signUp);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="name"
          value={user.name || ''}
          placeholder="Username"
        />
        <input
          onChange={onChange}
          type="email"
          name="email"
          value={user.email || ''}
          placeholder="Email"
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          value={user.password || ''}
          placeholder="Password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
