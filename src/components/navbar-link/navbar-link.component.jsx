import React from 'react';
import { StyledNavLink, Li } from './navbar-link.styles';

const NavbarLink = ({ link, children, mobile, clicked }) => {
  return (
    <Li>
      <StyledNavLink
        onClick={clicked}
        exact
        activeClassName="active"
        mobile={mobile ? 1 : 0}
        to={link}
      >
        {children}
      </StyledNavLink>
    </Li>
  );
};

export default NavbarLink;
