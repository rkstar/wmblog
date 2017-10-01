import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollReset from './components/ScrollReset';
import Feed from './screens/Feed';
import Login from './screens/Login';

export default () => (
  <BrowserRouter>
    <ScrollReset>
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </ScrollReset>
  </BrowserRouter>
);
