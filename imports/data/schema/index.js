import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';

import globalTypeDefs from './typeDefs.graphql';
import DateTime from './DateTime';
import User from './User';
import Tag from './Tag';
import Post from './Post';
import Comment from './Comment';

export const typeDefs = [globalTypeDefs.loc.source.body];
export const resolvers = [];
[
  DateTime,
  User,
  Tag,
  Post,
  Comment,
].forEach(({ types, res }) => {
  typeDefs.push(types.loc.source.body);
  resolvers.push(res);
});

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(...resolvers),
});

export default schema;
