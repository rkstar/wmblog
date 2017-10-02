import React from 'react';
import { Meteor } from 'meteor/meteor';
import { compose } from 'recompose';
import PostsQuery from './queries/posts';
import Post from '../../components/Post';

const Feed = ({ data: { loading, posts } }) => loading ? (
  <div>Loading...</div>
) : (
  <main>
    <h1>The Latest Stories...</h1>
    {posts.map(post => (
      <Post key={post._id} {...post} />
    ))}
  </main>
);

export default compose(
  PostsQuery,
)(Feed);
