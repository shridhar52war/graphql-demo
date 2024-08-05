import { gql } from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    userByid(id: ID!): User!
  }
`;

const resolvers = {
  Query: {
    userByid: (parent, args, context) => {
      return context.dataSources.userApi.getUserById(args.id);
    },
  },
};

export default { typeDefs, resolvers };
