import { Meteor } from 'meteor/meteor';
import React from 'react';
import Button from 'material-ui/Button';
import style from './style.css';

console.log('style:', style);

export default () => (
  <main className={style.layout}>
    <img src="/img/weedmaps-logo.png" className={style.logo} alt="WeedMaps logo" />
    <Button
      primary
      raised
      label="Sign in with Twitter"
      onClick={Meteor.loginWithTwitter}
    />
  </main>
);
