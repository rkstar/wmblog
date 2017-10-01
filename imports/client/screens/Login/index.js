import { Meteor } from 'meteor/meteor';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import style from './style.css';

export default () => (
  <main style={style.layout}>
    <img src="/img/weedmaps-logo.png" style={style.logo} alt="WeedMaps logo" />
    <RaisedButton
      primary
      label="Sign in with Twitter"
      onClick={Meteor.loginWithTwitter}
    />
  </main>
);
