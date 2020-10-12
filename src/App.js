import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './layout/layout';

import Home from './containers/home/home.container';
import Todos from './containers/todos/todos.container';
import Login from './containers/Auth/log-in/log-in.container';
import SignUp from './containers/Auth/sign-up/sign-up.container';
import Logout from './containers/Auth/log-out/log-out.container';
import VerifyEmail from './containers/Auth/verify-email/verify-email.container';
import RecoverPassword from './containers/Auth/recover-password/recover-password.container';

function App({ loggedIn, emailVerified }) {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/profile" component={Todos} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/profile" component={Home} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
