import React from 'react';

import {
  ContactContainer,
  ContactWrapper,
  ContactForm,
  ContactTop,
  ContactInput,
} from './Contact.styles';

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <h4>Contact</h4>
        <ContactForm>
          <ContactTop>
            <ContactInput
              half
              type="text"
              name="firstname"
              placeholder="First Name"
            />
            <ContactInput
              half
              type="text"
              name="lastname"
              placeholder="Last Name"
            />
          </ContactTop>
          <ContactInput type="email" name="email" placeholder="Email" />
          <ContactInput submit type="submit" value="Contact" />
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
