import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const books = [
  { title: "chemistry by Yashika" },
  { title: "physics by riya" },
  { title: "maths by Siya" },
];

const authors = [
  { name: "Ramneet" },
  { name: "riya" },
  { name: "Siya" },
  { name: "yuiu" },
];

// Schema
const typeDefs = `
  union SearchResult = Book | Author

  type Book {
    title: String!
  }

  type Author {
    name: String!
  }

  type Query {
    search(contains: String): [SearchResult]
  }
`;

// Resolvers
const resolvers = {
  SearchResult: {
    __resolveType(obj) {
      if (obj.name) return 'Author';
      if (obj.title) return 'Book';
      return null;
    },
  },

  Query: {
    search: (_, args) => {
      const searchTerm = args.contains?.toLowerCase() || '';

      const results = [];

      // Match authors
      const matchedAuthors = authors.filter(a =>
        a.name.toLowerCase().includes(searchTerm)
      );

      // Match books
      const matchedBooks = books.filter(b =>
        b.title.toLowerCase().includes(searchTerm)
      );

      return [...matchedAuthors, ...matchedBooks];
    },
  },
};

// Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4001 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});