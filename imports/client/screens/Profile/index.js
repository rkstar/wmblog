import { Meteor } from 'meteor/meteor';
import React from 'react';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';
import editUserMutation from './mutations';
import { Colors } from '/imports/client/theme/colors';

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

const Profile = ({ user, editUser }) => (
  <section>
    <header className={classes.header} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <h1>
        <Avatar size={60} src={user.account.avatar} className={classes.avatar} />
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
  </section>
);

export default compose(
  editUserMutation,
  withTracker(() => ({
    user: { ...Meteor.user(), id: Meteor.userId() },
  })),
)(Profile);
