import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layout/layout';

import Home from './containers/home/home.container';
import Todos from './containers/todos/todos.container';
import Login from './containers/Auth/login/login.container';
import SignUp from './containers/Auth/signup/signup.container';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Todos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
