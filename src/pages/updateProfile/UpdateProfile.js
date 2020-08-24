import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth/AuthContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from '../../components/common/input/Input';
import UpdateMsg from '../../components/common/formError/FormError';
import UpdateBtn from '../../components/common/customButton/CustomButton';
import {
  UpdateProfileContainer,
  UpdateProfileWrapper,
  UpdateProfileForm,
  UpdateProfileTop,
  UpdateProfileDesc,
} from './UpdateProfile.styles';

const UpdateProfile = () => {
  const authContext = useContext(AuthContext);
  const { updateUser } = authContext;

  const schema = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    role: yup.string().trim().required(),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    updateUser(data);
  };

  return (
    <UpdateProfileContainer id="update-profile">
      <UpdateProfileWrapper>
        <h4>Create Profile</h4>
        <UpdateProfileForm onSubmit={handleSubmit(onSubmit)}>
          <UpdateProfileDesc>
            Complete your profile in order to continue!
          </UpdateProfileDesc>
          <UpdateProfileTop>
            <div>
              <Input
                half
                error={errors.firstname ? true : false}
                type="text"
                name="firstname"
                placeholder="First Name"
                ref={register}
              />
              {errors.firstname && (
                <UpdateMsg message="First Name is required" />
              )}
            </div>
            <div>
              <Input
                half
                type="text"
                name="lastname"
                error={errors.lastname ? true : false}
                placeholder="Last Name"
                ref={register}
              />
              {errors.lastname && <UpdateMsg message="Last Name is required" />}
            </div>
          </UpdateProfileTop>
          <div>
            <Input
              type="text"
              name="role"
              error={errors.role ? true : false}
              placeholder="Role"
              ref={register}
            />
            {errors.role && <UpdateMsg message="Role is required" />}
          </div>
          <UpdateBtn contact type="submit" text="Submit" />
        </UpdateProfileForm>
      </UpdateProfileWrapper>
    </UpdateProfileContainer>
  );
};

export default UpdateProfile;
