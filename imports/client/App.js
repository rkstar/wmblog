import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import AuthenticatedRoute from './components/AuthenticatedRoute';
import ScrollReset from './components/ScrollReset';
import BottomMenu from './components/BottomMenu';
import Feed from './screens/Feed';
import Bookmarks from './screens/Bookmarks';
import Likes from './screens/Likes';
import Profile from './screens/Profile';
import Login from './screens/Login';
import ErrorScreen from './screens/Error';

export default () => (
  <BrowserRouter>
    <ScrollReset>
      <Switch>
        <Route path="/error" component={ErrorScreen} />
        <Route exact path="/login" component={Login} />

        <main>
          <Switch>
            <Route exact path="/" component={Feed} />
            <AuthenticatedRoute exact path="/bookmarks" component={Bookmarks} />
            <AuthenticatedRoute exact path="/likes" component={Likes} />
            <AuthenticatedRoute path="/profile" component={Profile} />
          </Switch>
          <BottomMenu />
        </main>

        <Redirect to="/error/404" />
      </Switch>
    </ScrollReset>
  </BrowserRouter>
);
