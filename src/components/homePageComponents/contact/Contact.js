import React from 'react';
import { useForm } from '../../../hooks/useForm';

import {
  ContactContainer,
  ContactWrapper,
  ContactForm,
  ContactTop,
  ContactInput,
} from './Contact.styles';

const Contact = () => {
  const getLead = () => console.log(values);
  const [values, onChange, onSubmit] = useForm(getLead);
  return (
    <ContactContainer>
      <ContactWrapper>
        <h4>Contact</h4>
        <ContactForm onSubmit={onSubmit}>
          <ContactTop>
            <ContactInput
              half
              onChange={onChange}
              type="text"
              name="firstname"
              placeholder="First Name"
              value={values.firstname || ''}
            />
            <ContactInput
              half
              onChange={onChange}
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={values.lastname || ''}
            />
          </ContactTop>
          <ContactInput
            onChange={onChange}
            type="email"
            name="email"
            placeholder="Email"
            value={values.email || ''}
          />
          <ContactInput submit type="submit" value="Contact" />
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
