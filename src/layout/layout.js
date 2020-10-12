import React from 'react';

import { connect } from 'react-redux';

import Navbar from '../components/navbar/navbar.component.jsx';
import SideDrawer from '../components/side-drawer/side-drawer.component';

import { MainWrapper } from './layout.styles';
const Layout = ({ children, loggedIn }) => (
  <>
    <Navbar loggedIn={loggedIn} />
    <SideDrawer loggedIn={loggedIn} />
    <MainWrapper>{children}</MainWrapper>
  </>
);
const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(Layout);
