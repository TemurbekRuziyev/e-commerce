import React from 'react';

import {
  FormInputContainer,
  FormInputLabel,
  GroupContainer,
} from './form-input.styles';

const FormInput = (
  { handleChange, label, ...otherProps } //In here we used rest operator
) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel {...otherProps}> {label} </FormInputLabel> : null}
  </GroupContainer>
);

export default FormInput;
