import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Switch } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import AuthenticatedRoute from '/imports/client/components/AuthenticatedRoute';
import Profile from './Profile';
import WritePost from './WritePost';
import EditPost from './EditPost';
import classes from './style.css';

const gradient = 'linear-gradient(to top, rgba(0,0,0,.55) 0%, rgba(0,0,0,.35) 100%)';
const image = 'url(http://lorempixel.com/960/200/abstract)';
const background = `${gradient}, ${image}`;

export default ({ user }) => (
  <section>
    <header className={classes.header} style={{ background }}>
      <h1>
        <Avatar
          size={60}
          src={user.account.avatar}
          className={classes.avatar}
        />
        {user.profile.name}
      </h1>
    </header>
    <Switch>
      <AuthenticatedRoute exact path="/profile" component={Profile} />
      <AuthenticatedRoute exact path="/profile/post/write" component={WritePost} />
      <AuthenticatedRoute path="/profile/post/edit/:id" component={EditPost} />
    </Switch>
  </section>
);
