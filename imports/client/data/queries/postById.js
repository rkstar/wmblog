import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

export default graphql(gql`
  query post($id: ID!) {
    post(id: $id) {
      _id,
      author {
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
  options: ({ postId }) => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      id: postId,
    },
  }),
});
