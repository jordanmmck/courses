import { GraphQLServer } from 'graphql-yoga';

// type definitions (schema)
const typeDefs = `
  type Query {
    hello: String!
  }
`;

// resolvers
const resolvers = {
  Query: {
    hello() {
      return 'hello world';
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.info('server running...');
});
