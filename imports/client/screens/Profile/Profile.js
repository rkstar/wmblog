import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';
import editUserMutation from './mutations';
import { Colors } from '/imports/client/theme/colors';
import { Icons } from '/imports/client/theme/icons';
import classes from './style.css';

const backgroundImageUrl = 'http://lorempixel.com/960/200/abstract';
const inputStyle = {
  color: Colors.app.white,
  fontWeight: 700,
  fontSize: '1.5em',
};
const floatingLabelStyle = {
  color: Colors.app.seafoam,
};

const Profile = ({ user, editUser, history }) => (
  <section>
    <header className={classes.header} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <h1>
        <Avatar
          size={60}
          src={user.account.avatar}
          className={classes.avatar}
        />
        {user.profile.name}
      </h1>
    </header>
    <main>
      <TextField
        floatingLabelText="What is your name?"
        fullWidth
        {...{ floatingLabelStyle, inputStyle }}
        onChange={(e, name) => editUser({
          variables: { user: { name } },
        })}
      />
    </main>
    <FloatingActionButton
      className={classes.fab}
      backgroundColor={Colors.app.seafoam}
      onClick={() => history.push('/profile/post/write')}
    >
      {Icons.drawFontIcon(Icons.edit)}
    </FloatingActionButton>
  </section>
);

export default compose(
  editUserMutation,
  withRouter,
  withTracker(() => ({
    user: { ...Meteor.user(), id: Meteor.userId() },
  })),
)(Profile);
