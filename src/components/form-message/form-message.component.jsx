import React from 'react';
import { P } from './form-message.styles';

const FormMessage = ({ children, error, success, show }) => {
  return (
    <P error={error} success={success} show={show}>
      {children}
    </P>
  );
};

export default FormMessage;
