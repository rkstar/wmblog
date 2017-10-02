import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation likePost($id: ID!) {
    likePost(id:$id)
  }
`, {
  name: 'likePost',
});
