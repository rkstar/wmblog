import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default graphql(gql`
  mutation editUser($user: UserInput!) {
    editUser(user: $user) {
      _id
    }
  }
`, {
  name: 'editUser',
});
