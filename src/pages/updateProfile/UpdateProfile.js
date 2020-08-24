import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/AuthContext';
// import { useForm } from 'react-hook-form';
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

const UpdateProfile = (props) => {
  const [input, setInput] = useState({
    firstname: '',
    lastname: '',
    role: '',
  });
  const [userToUpdate, setUserToUpdate] = useState();
  const history = useHistory();
  const authContext = useContext(AuthContext);

  const { currentUser, authAxios } = authContext;

  const schema = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    role: yup.string().trim().required(),
  });

  // const { handleSubmit, register, errors } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // const onSubmit = async (updateInfo) => {
  //   try {
  //     const res = await authAxios.put(
  //       `/api/users/${currentUser.id}`,
  //       updateInfo
  //     );
  //     if (res) {
  //       // props.history.push('/dashboard');
  //       console.log(res.data);
  //       await setUserToUpdate(res.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleSubmit = (e) => {
    console.log(input);
    e.preventDefault();

    authAxios
      .put(`/api/users/${currentUser.id}`, input)
      .then((res) => {
        console.log(res.data.is_completed);
        setUserToUpdate(res.data);
        // props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (userToUpdate) {
      props.history.push('/dashboard');
    }
  }, [userToUpdate]);

  return (
    <div>
      <UpdateProfileContainer id="contact">
        <UpdateProfileContactWrapper>
          <h4>Create Profile</h4>
          <UpdateProfileContactForm onSubmit={handleSubmit}>
            <UpdateProfileContactTop>
              <div>
                <Input
                  half
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                {/* {errors.fullname && <MSG message="First Name is required" />} */}
              </div>
              <div>
                <Input
                  half
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                {/* {errors.fullname && <MSG message="Last Name is required" />} */}
              </div>
            </UpdateProfileContactTop>
            <div>
              <Input
                type="text"
                name="role"
                placeholder="Role"
                onChange={handleChange}
              />
              {/* {errors.role && <MSG message="Role is required" />} */}
            </div>
            <ContactBtn contact type="submit" text="Submit" />
          </UpdateProfileContactForm>
        </UpdateProfileContactWrapper>
      </UpdateProfileContainer>
    </div>
  );
};

export default UpdateProfile;
