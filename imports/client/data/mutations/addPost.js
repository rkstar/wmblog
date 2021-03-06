import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation addPost($post: PostInput!) {
    addPost(post: $post) {
      _id,
      author {
        _id
        name
      }
      bookmarks {
        _id
      }
      likes {
        _id
      }
      datePosted
      title
      content
    }
  }
`, {
  name: 'addPost',
});
