import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { compose } from 'recompose';
import PostsQuery from './queries/posts';
import Post from '../../components/Post';

const Feed = ({ user, data: { loading, posts } }) => loading ? (
  <div>Loading...</div>
) : (
  <main>
    <h1>The Latest Stories...</h1>
    {posts.map(post => (
      <Post
        key={post._id}
        user={user}
        {...post}
      />
    ))}
  </main>
);

export default compose(
  withTracker(() => ({
    user: { ...Meteor.user(), id: Meteor.userId() },
  })),
  PostsQuery,
)(Feed);
