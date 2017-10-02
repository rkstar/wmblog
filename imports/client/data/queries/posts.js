import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'immutability-helper';

export default graphql(gql`
  query posts($userId: ID, $sort: SortOption, $order: OrderOption) {
    posts(userId:$userId sort:$sort, order:$order) {
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
  options: ({ user, filterPostsByUser = false, sort, order }) => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      userId: filterPostsByUser ? user._id : null,
      sort,
      order,
    },
    reducer: (currentData, { type, operationName, result }) => {
      if ((type === 'APOLLO_MUTATION_RESULT')) {
        const data = result.data[operationName];
        switch (operationName) {
          case 'deletePost':
            const posts = currentData.posts.reduce((acc, post) => post._id === data ? acc : acc.concat(post), []);
            return update(currentData, {
              $merge: { posts },
            });

          case 'editPost':
          case 'addPost':
            return update(currentData, {
              $merge: data,
            });
        }
      }

      return currentData;
    }
  }),
});
