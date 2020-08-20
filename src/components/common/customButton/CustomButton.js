import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { CustomButtonContainer } from './CustomButtom.style';

const CustomButton = ({ type, text, loading, ...otherProps }) => (
  <CustomButtonContainer {...otherProps} type={type}>
    {loading ? (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FontAwesomeIcon icon={faCircleNotch} spin />
        <span>Loading...</span>
      </div>
    ) : (
      <span>{text}</span>
    )}
  </CustomButtonContainer>
);

export default CustomButton;
