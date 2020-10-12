import React from 'react';

import NavbarLink from '../navbar-link/navbar-link.component';

import { Nav, Ul } from './navbar-items.styles';

function NavbarItems({ clicked, mobile, loggedIn }) {
  let links;

  if (loggedIn.uid) {
    links = (
      <Ul mobile={mobile}>
        <NavbarLink mobile={mobile} clicked={clicked} link="/">
          Home
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="/todos">
          Todos
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="logout">
          Logout
        </NavbarLink>
      </Ul>
    );
  } else {
    links = (
      <Ul mobile={mobile}>
        <NavbarLink mobile={mobile} clicked={clicked} link="/">
          Todos
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="profile">
          Account
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="login">
          Login
        </NavbarLink>
        <NavbarLink mobile={mobile} clicked={clicked} link="signup">
          SignUp
        </NavbarLink>
      </Ul>
    );
  }
  return <Nav>{links}</Nav>;
}

export default NavbarItems;
