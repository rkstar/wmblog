import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';
import PostsQuery from '../../data/queries/posts';
import Post from '../../components/Post';
import classes from './style.css';

const Feed = ({ user, data: { loading, posts } }) => loading ? (
  <div>Loading...</div>
) : (
  <main>
    <h1>The Latest Stories...</h1>
    <section className={classes.posts}>
      {posts.map(post => (
        <article className={classes.post}>
          <Post
            key={post._id}
            user={user}
            {...post}
          />
        </article>
      ))}
    </section>
  </main>
);

export default compose(
  withTracker(() => ({
    user: { ...Meteor.user(), id: Meteor.userId() },
  })),
  PostsQuery,
)(Feed);
