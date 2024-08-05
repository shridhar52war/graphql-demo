import { gql } from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    users: [User]!
  }
`;

const resolvers = {
  Query: {
    users: async (_, __, context) => {
      const res = await context.dataSources.userApi.getUsers();
      return res;
    },
  },
};

export default { typeDefs, resolvers };
