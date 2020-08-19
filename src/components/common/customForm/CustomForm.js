import React from 'react';

import { CustomFormContainer } from './CustomForm.styles';

const CustomForm = (props) => (
  <CustomFormContainer {...props}>{props.children}</CustomFormContainer>
);

export default CustomForm;
