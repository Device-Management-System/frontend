import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { AuthContext } from '../../context/auth/AuthContext';

import UpdateForm from '../../components/common/customForm/CustomForm';
import UpdateInput from '../../components/common/input/Input';
import UpdateSubmit from '../../components/common/customButton/CustomButton';
import Input from '../../components/common/input/Input';
import UpdateError from '../../components/common/formError/FormError';

const UpdateProfile = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);
  const { currentUser, authAxios } = authContext;

  const schema = yup.object().shape({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    role: yup.string().trim().required(),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerUser = (update) => {
    console.log(update);
    // try {
    //   const { data } = await authAxios.put(
    //     `/api/user/${currentUser.id}`,
    //     update
    //   );
    //   if (data) {
    //     await history.push('/dashboard');
    //   }
    // } catch ({ message }) {
    //   console.log(message);
    // }
  };

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <div>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          ref={register}
        />
        {errors.firstname && <UpdateError message="First Name is required" />}
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          ref={register}
        />
        {errors.lastname && <UpdateError message="Last Name is required" />}
      </div>
      <div>
        <input type="text" name="role" placeholder="Role" ref={register} />
        {errors.role && <UpdateError message="Role Name is required" />}
      </div>
      <input type="submit" text="submit" />
    </form>
  );
};

export default UpdateProfile;
