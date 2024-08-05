import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import { makeExecutableSchema } from '@graphql-tools/schema';
import { schema } from './schemas/index.js';
import UserAPI from './dataSources/UserApiDataSource.js';

// const schema = makeExecutableSchema({
//   typeDefs: schemas.typeDefs,
//   resolvers: schemas.resolvers,
// });

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
  // schema,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    return {
      request: req,
      dataSources: {
        userApi: new UserAPI(),
      },
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);
