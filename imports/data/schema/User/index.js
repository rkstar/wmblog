import * as resolvers from './resolvers';
import typeDefs from './typeDefs.graphql';

export const mapUser = user => ({
  ...user,
  name: user.profile.name,
});

export default {
  resolvers,
  typeDefs,
};
