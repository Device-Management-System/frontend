import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { ContactInput } from './Input.style';

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder, ...otherProps } = props;
  return (
    <>
      <ContactInput
        {...otherProps}
        type={type}
        name={name}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  );
});

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
