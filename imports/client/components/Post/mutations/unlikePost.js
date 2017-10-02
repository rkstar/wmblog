import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation unlikePost($id: ID!) {
    unlikePost(id:$id)
  }
`, {
  name: 'unlikePost',
});
