
const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Author {
    id: ID
    name: String
    verified: Boolean
  }

  type Game {
    title: String
    platform: [String]
  }

  type Review {
    id: ID
    rating: Int
    content: String
    author: Author
    game: Game
  }

  type Query {
    reviews: [Review]
  }
`;
const resolvers = {
  Query: {
    reviews: () => [
      {
        id: "1",
        rating: 9,
        content: "lorem ipsum",
        authorId: "a1",
        gameId: "g1"
      }
    ]
  },
  Review: {
    author: (parent) => {
      const authors = [
        { id: "a1", name: "mario", verified: true },
        { id: "a2", name: "luigi", verified: false }
      ];
      return authors.find(author => author.id === parent.authorId);
    },
    game: (parent) => {
      const games = [
        { id: "g1", title: "Final Fantasy 7 Remake", platform: ["PS5", "Xbox"] },
        { id: "g2", title: "Zelda", platform: ["Switch"] }
      ];
      return games.find(game => game.id === parent.gameId);
    }
  }
};



// Create Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
