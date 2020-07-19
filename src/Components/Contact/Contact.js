import React from 'react';
import { useForm } from '../../hooks/useForm';

import {
  ContactContainer,
  ContactWrapper,
  ContactForm,
  ContactTop,
  ContactInput,
  ContactTextA,
} from './Contact.styles';

const Contact = () => {
  const [values, onChange] = useForm();
  return (
    <ContactContainer>
      <ContactWrapper>
        <h4>Contact</h4>
        <ContactForm>
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

          <ContactTextA
            onChange={onChange}
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={values.message || ''}
          ></ContactTextA>

          <ContactInput submit type="submit" value="Contact" />
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
