import { Meteor } from 'meteor/meteor';
import { createApolloServer } from 'meteor/apollo';
import { formatError } from 'apollo-errors';

import schema from '../../data/schema';

createApolloServer({
  schema,
  formatError,
});
