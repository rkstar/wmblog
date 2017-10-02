import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`, {
  name: 'deletePost',
});
