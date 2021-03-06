import React from 'react';
import { UilCheckCircle } from '@iconscout/react-unicons';

import { SuccessContainer } from './Success.styles';

const Success = ({ message }) => {
  return (
    <SuccessContainer>
      <UilCheckCircle fill="#599E0A" width="2rem" height="2rem" />
      <p>{message}</p>
    </SuccessContainer>
  );
};

export default Success;
