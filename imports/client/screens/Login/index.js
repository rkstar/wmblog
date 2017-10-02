import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';
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

const LoginForm = () => (
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

const Login = ({ loggingIn, user }) => {
  if (loggingIn) {
    return <div>Loading...</div>;
  }

  return user.id ? <Redirect to="/" /> : <LoginForm />;
};

export default withTracker(props => ({
  ...props,
  loggingIn: Meteor.loggingIn(),
  user: { ...Meteor.user(), id: Meteor.userId() },
}))(Login);
