import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';

import globalTypeDefs from './typeDefs.graphql';
import DateTime from './DateTime';
import User from './User';
import Tag from './Tag';
import Post from './Post';
import Comment from './Comment';

const domains = [
  DateTime,
  User,
  Tag,
  Post,
  Comment,
];

export const typeDefs = [globalTypeDefs.loc.source.body, ...domains.map(({ typeDefs }) => typeDefs.loc.source.body)];
export const resolvers = merge(...domains.map(({ resolvers }) => resolvers));
export default makeExecutableSchema({ typeDefs, resolvers });
