import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation editPost($id: ID!, $post: PostInput!) {
    editPost(id:$id, post: $post) {
      _id
      title
      content
      datePosted
      author {
        _id
        name
      }
    }
  }
`, {
  name: 'editPost',
});
