import { gql } from 'graphql-tag';
import { print } from 'graphql';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import user from './user/index.js';

const scalars = gql`
  type Query
`;

export const typeDefs = mergeTypeDefs([scalars, user.typeDefs]);
export const resolvers = mergeResolvers([user.resolvers]);

export const schema = { typeDefs, resolvers };
export default print(typeDefs);
