import React from 'react';
import PropTypes from 'prop-types';

import { MSG } from './formError.style';

const FormError = ({ message }) => {
  return (
    <>
      <MSG>{message}</MSG>
    </>
  );
};

FormError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FormError;
