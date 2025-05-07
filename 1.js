const { ApolloServer, gql } = require('apollo-server');

// Schema with Query
const typeDefs = gql`
  type Review {
    id: ID
    rating: Int
    feedback: String
  }

  type Author {
    name: String
    verified: Boolean
  }

  type Game {
    name: String
    genre: String
  }

  type Query {
    reviews: [Review]
    authors: [Author]
    games: [Game]
  }
`;

// Resolvers match the schema
const resolvers = {
  Query: {
    reviews: () => [
      { id: "1", rating: 5, feedback: "Excellent service!" },
      { id: "2", rating: 4, feedback: "Pretty good experience." },
    ],
    authors: () => [
      { name: "Anil", verified: true },
      { name: "Anshu", verified: false }
    ],
    games: () => [
      { name: "Mind Maze", genre: "Puzzle game" },
      { name: "Turbo Soccer", genre: "Fictional sports" }
    ]
  }
};

// Create and start the server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
