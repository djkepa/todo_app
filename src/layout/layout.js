import React from 'react';

import { MainWrapper } from './layout.styles';

import Navbar from '../components/navbar/navbar.component.jsx';
import SideDrawer from '../components/side-drawer/side-drawer.component';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <SideDrawer />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export default Layout;
