import React from 'react';

import { Container } from '../../layout/elements/index';

import Logo from '../logo/logo.component';
import NavbarItems from '../navbar-items/navbar-items.components';

import { FixedWrapper, Wrapper } from './navbar.styles';

const Navbar = () => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavbarItems />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
