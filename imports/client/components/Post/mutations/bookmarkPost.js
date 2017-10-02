import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation bookmarkPost($id: ID!) {
    bookmarkPost(id:$id)
  }
`, {
  name: 'bookmarkPost',
});
