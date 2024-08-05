import { gql } from 'graphql-tag';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    website: String!
    address: UserAddress!
  }

  type UserAddress {
    street: String!
    suite: String!
    city: String!
    zipcode: String!
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
    phone: (user) => {
      return user.phone;
    },
    website: (user) => {
      return user.website;
    },
    address: (user) => {
      return user.address;
    },
  },
  UserAddress: {
    street: (userAddress) => {
      return userAddress.street;
    },
    suite: (userAddress) => {
      return userAddress.suite;
    },
    suite: (userAddress) => {
      return userAddress.city;
    },
    zipcode: (userAddress) => {
      return userAddress.zipcode;
    },
  },
};

export default { typeDefs, resolvers };
