import { gql } from 'graphql-tag';
import { print } from 'graphql';
//import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import user from './user/index.js';

const scalars = gql`
  type Query
`;

export const typeDefs = mergeTypeDefs([scalars, user.typeDefs]);
export const resolvers = mergeResolvers([user.resolvers]);
// const resolvers = {
//   ...user.resolvers,
// };

// const schema = makeExecutableSchema({
//   typeDefs: typeDefs,
//   resolvers: resolvers,
// });

//console.log('typeDefs', print(typeDefs));
export const schema = { typeDefs, resolvers };
export default print(typeDefs);
