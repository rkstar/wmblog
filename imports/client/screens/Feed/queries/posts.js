import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';

export default graphql(gql`
  query posts($sort: SortOption, $order: OrderOption) {
    posts(sort:$sort, order:$order) {
      _id,
      author {
        name
      }
      datePosted
      title
      content
    }
  }
`, {
  options: ({ sort, order }) => ({
    fetchPolicy: 'cache-and-network',
    variables: {
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
