import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';

export default graphql(gql`
  mutation addPost($post: PostInput!) {
    addPost(post: $post) {
      _id
      author {
        _id
        name
      }
    }
  }
`, {
  name: 'addPost',
});
