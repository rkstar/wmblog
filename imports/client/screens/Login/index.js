import { Meteor } from 'meteor/meteor';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Icons } from '../../theme/icons';
import { Colors } from '../../theme/colors';
import classes from './style.css';

const buttonProps = {
  labelColor: Colors.app.white,
  labelStyle: {
    fontWeight: 700,
  },
  className: classes.button,
};

const labelStyle = {
  fontWeight: 700,
};

export default () => (
  <main className={classes.layout}>
    <img src="/img/weedmaps-logo.png" className={classes.logo} alt="WeedMaps logo" />
    <section className={classes.buttonContainer}>
      <RaisedButton
        {...buttonProps}
        backgroundColor={Colors.social.twitter.blue}
        label="Sign in with Twitter"
        icon={Icons.drawFontIcon(Icons.twitter)}
        onClick={Meteor.loginWithTwitter}
      />
      <RaisedButton
        {...buttonProps}
        backgroundColor={Colors.social.facebook.blue}
        label="Sign in with Facebook"
        icon={Icons.drawFontIcon(Icons.facebook)}
        onClick={Meteor.loginWithFacebook}
      />
      <RaisedButton
        {...buttonProps}
        backgroundColor={Colors.social.github.green}
        label="Sign in with Github"
        icon={Icons.drawFontIcon(Icons.github)}
        onClick={Meteor.loginWithGithub}
      />
      <RaisedButton
        {...buttonProps}
        backgroundColor={Colors.social.google.red}
        label="Sign in with Google+"
        icon={Icons.drawFontIcon(Icons.google)}
        onClick={Meteor.loginWithGoogle}
      />
    </section>
  </main>
);
