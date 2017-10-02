import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from 'react-addons-update';

export default graphql(gql`
  mutation editUser($user: UserInput!) {
    editUser(user: $user) {
      _id
    }
  }
`, {
  name: 'editUser',
});
