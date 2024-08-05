import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import User from './User.js';
import userByid from './userById.js';
import users from './users.js';

const typeDefs = mergeTypeDefs([
  User.typeDefs,
  userByid.typeDefs,
  users.typeDefs,
]);

const resolvers = mergeResolvers([
  User.resolvers,
  userByid.resolvers,
  users.resolvers,
]);

export default {
  typeDefs,
  resolvers,
};
