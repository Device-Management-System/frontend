import React from 'react';

import { CustomButtonContainer } from './CustomButtom.style';

const CustomButton = (props) => (
  <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>
);

export default CustomButton;
