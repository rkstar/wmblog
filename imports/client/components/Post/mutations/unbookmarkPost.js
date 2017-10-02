import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation unbookmarkPost($id: ID!) {
    unbookmarkPost(id:$id)
  }
`, {
  name: 'unbookmarkPost',
});
