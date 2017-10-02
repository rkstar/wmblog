import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';

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
    reducer: (currentData, { type, operationName, result }) => {
      if ((type === 'APOLLO_MUTATION_RESULT') && (operationName === 'editPost')) {
        return update(currentData, {
          $merge: result.data[operationName],
        });
      }

      return currentData;
    }
  })
})
