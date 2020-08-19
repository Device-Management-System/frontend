import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

import Input from '../../common/input/Input';
import MSG from '../../common/formError/FormError';

import {
  ContactContainer,
  ContactWrapper,
  ContactForm,
  ContactTop,
} from './Contact.styles';

const Contact = () => {
  const schema = yup.object().shape({
    firstname: yup.string().trim().required(),
    lastname: yup.string().trim().required(),
    email: yup.string().email().required(),
  });

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <h4>Contact</h4>
        <ContactForm onSubmit={handleSubmit(onSubmit)}>
          <ContactTop>
            <div>
              <Input
                half
                type="text"
                name="firstname"
                placeholder="First Name"
                ref={register}
              />
              {errors.firstname && <MSG message="First Name is required" />}
            </div>
            <div>
              <Input
                half
                type="text"
                name="lastname"
                placeholder="Last Name"
                ref={register}
              />
              {errors.lastname && <MSG message="Last Name is required" />}
            </div>
          </ContactTop>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              ref={register}
            />
            {errors.email && <MSG message="Email is required" />}
          </div>
          <Input submit type="submit" value="Contact" />
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
