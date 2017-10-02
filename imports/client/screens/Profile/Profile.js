import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
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
  <main>
    <TextField
      floatingLabelText="Would you like to change your name?"
      fullWidth
      {...{ floatingLabelStyle, inputStyle }}
      onChange={(e, name) => editUser({
        variables: { user: { name } },
      })}
    />
    <FloatingActionButton
      className={classes.fab}
      backgroundColor={Colors.app.seafoam}
      onClick={() => history.push('/profile/post/write')}
    >
      {Icons.drawFontIcon(Icons.edit)}
    </FloatingActionButton>
  </main>
);

export default compose(
  editUserMutation,
  withRouter,
)(Profile);