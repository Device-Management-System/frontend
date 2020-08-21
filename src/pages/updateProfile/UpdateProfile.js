import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import axios from 'axios';

import Input from '../../components/common/input/Input';
import MSG from '../../components/common/formError/FormError';
import ContactBtn from '../../components/common/customButton/CustomButton';
import {
  ContactContainer as UpdateProfileContainer,
  ContactWrapper as UpdateProfileContactWrapper,
  ContactForm as UpdateProfileContactForm,
  ContactTop as UpdateProfileContactTop,
} from '../../components/homePageComponents/contact/Contact.styles';

const UpdateProfile = () => {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { currentUser, authAxios } = authContext;

  const schema = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    role: yup.string().trim().required(),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  // Error ?
  const onSubmit = (updateInfo) => {
    console.log(currentUser);

    console.log(updateInfo);

    authAxios
      .put(`/api/users/${currentUser.id}`, updateInfo)
      .then((res) => {
        console.log('PUT', res.data);
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (currentUser && currentUser.is_completed) history.push('/dashboard');
  }, [currentUser, history]);

  return (
    <div>
      <UpdateProfileContainer id="contact">
        <UpdateProfileContactWrapper>
          <h4>Create Profile</h4>
          <UpdateProfileContactForm onSubmit={handleSubmit(onSubmit)}>
            <UpdateProfileContactTop>
              <div>
                <Input
                  half
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  ref={register}
                />
                {errors.fullname && <MSG message="First Name is required" />}
              </div>
              <div>
                <Input
                  half
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  ref={register}
                />
                {errors.fullname && <MSG message="Last Name is required" />}
              </div>
            </UpdateProfileContactTop>
            <div>
              <Input
                type="text"
                name="role"
                placeholder="Role"
                ref={register}
              />
              {errors.role && <MSG message="Role is required" />}
            </div>
            <ContactBtn contact type="submit" text="Submit" />
          </UpdateProfileContactForm>
        </UpdateProfileContactWrapper>
      </UpdateProfileContainer>
    </div>
  );
};

export default UpdateProfile;
