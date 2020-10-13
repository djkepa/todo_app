import React from 'react';
import { Wrapper } from './backdrop.styles';

const Backdrop = ({ opened, close }) => {
  return <Wrapper onClick={close} opened={opened} />;
};

export default Backdrop;
