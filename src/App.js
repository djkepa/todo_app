import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layout/layout';

import Home from './containers/home/home.container';
import Todos from './containers/todos/todos.container';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Todos} />

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}

export default App;
