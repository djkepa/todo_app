import React from 'react';

import NavbarLink from '../navbar-link/navbar-link.component';

import { Nav, Ul } from './navbar-items.styles';

function NavbarItems({ clicked, mobile }) {
  return (
    <Nav>
      <Ul mobile={mobile}>
        <NavbarLink mobile={mobile} clicked={clicked} link="/">
          Todos
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="profile">
          Account
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="logout">
          Logout
        </NavbarLink>
      </Ul>
    </Nav>
  );
}

export default NavbarItems;
