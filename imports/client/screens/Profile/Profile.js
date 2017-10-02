import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { compose } from 'recompose';
import Post from '../../components/Post';
import editUserMutation from '../../data/mutations/editUser';
import postsQuery from '../../data/queries/posts';
import { Colors } from '../../theme/colors';
import { Icons } from '../../theme/icons';
import classes from './style.css';
import { inputStyle, floatingLabelStyle } from './style';

const Profile = ({ user, editUser, history, data: { posts, loading } }) => (
  <main>
    <TextField
      floatingLabelText="Would you like to change your name?"
      fullWidth
      {...{ floatingLabelStyle, inputStyle }}
      onChange={(e, name) => editUser({
        variables: { user: { name } },
      })}
    />
    <h2>Your latest posts...</h2>
    <section className={classes.posts}>
      {loading ? (
        <div>Loading...</div>
      ) : posts.map(post => (
        <article className={classes.post}>
          <Post
            key={post._id}
            user={user}
            {...post}
            isMine
          />
        </article>
      ))}
    </section>
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
  postsQuery,
  withRouter,
)(Profile);
