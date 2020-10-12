import React, { useState } from 'react';

import Logo from '../logo/logo.component';
import Hamburger from '../hamburger/hamburger.component';
import NavbarItems from '../navbar-items/navbar-items.components';

import { FixedWrapper, Wrapper, Menu } from './side-drawer.styles';

const SideDrawer = ({ loggedIn }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>
      <Menu opened={isOpened}>
        <NavbarItems
          loggedIn={loggedIn}
          mobile
          clicked={() => setIsOpened(false)}
        />
      </Menu>
    </>
  );
};

export default SideDrawer;
