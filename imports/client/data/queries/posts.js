import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';

export default graphql(gql`
  query posts($userId: ID, $sort: SortOption, $order: OrderOption) {
    posts(userId:$userId sort:$sort, order:$order) {
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
  options: ({ userId, sort, order }) => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      userId,
      sort,
      order,
    },
    reducer: (currentData, { type, operationName, result }) => {
      if ((type === 'APOLLO_MUTATION_RESULT') && (operationName === 'deletePost') || (operationName === 'editPost')) {
        return update(currentData, {
          $merge: result.data[operationName],
        });
      }

      return currentData;
    }
  }),
});
