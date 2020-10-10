import React from 'react';
import { StyledButton } from './form-button.styles';

const FormButton = ({
  children,
  disabled,
  loading,
  contain,
  color,
  ...rest
}) => {
  return (
    <StyledButton color={color} contain={contain} disabled={disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default FormButton;
