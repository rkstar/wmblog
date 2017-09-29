import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import { formatError } from 'apollo-errors';

import schema from '../../data/schema';

createApolloServer(req => ({
  schema,
  formatError,
  context: {
    user: Meteor.user(),
  },
}), {
  configServer: graphQLServer => graphQLServer.use('/graph'),
});
