import React from 'react';

import { Container } from '../../layout/elements';

import Logo from '../logo/logo.component';
import NavbarItems from '../navbar-items/navbar-items.components';

import { FixedWrapper, Wrapper } from './navbar.styles';

const Navbar = ({ loggedIn }) => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavbarItems loggedIn={loggedIn} />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
