import { gql } from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

const resolvers = {
  User: {
    id: (user) => {
      return user.id;
    },
    name: (user) => {
      return user.name;
    },
    email: (user) => {
      return user.email;
    },
  },
};

export default { typeDefs, resolvers };
