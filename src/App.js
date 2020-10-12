import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './layout/layout';

import Home from './containers/home/home.container';
import Todos from './containers/todos/todos.container';
import Login from './containers/Auth/login/login.container';
import SignUp from './containers/Auth/signup/signup.container';
import Logout from './containers/Auth/logout/logout.container';

function App({ loggedIn }) {
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return <Layout>{routes}</Layout>;
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
