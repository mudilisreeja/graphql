import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typedefs from './schema.js';
import { courses, subject, marks } from './db.js';

const resolvers = {
  Query: {
    courses: () => courses,
    subject: () => subject,
    Marks: () => marks,
  },
};

const server = new ApolloServer({
  typeDefs: typedefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
