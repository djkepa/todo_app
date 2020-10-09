import React from 'react';

import { StyledHamb } from './hamburger.styles';

const Hamburger = ({ opened, clicked }) => {
  return (
    <StyledHamb onClick={clicked} opened={opened}>
      <span />
      <span />
      <span />
      <span />
    </StyledHamb>
  );
};

export default Hamburger;
