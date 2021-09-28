import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs: `type Movie {
      id: Int!
      title: String!
      rating: Float
      description_intro: String
      language: String
      medium_cover_image: String
      genres: [String]
    }
    
    type Query {
      movies(limit: Int, rating: Float): [Movie]!
      movie(id: Int!): Movie
      suggestions(id: Int!): [Movie]!
    }

    type Mutation {
       addMovie(name: String!, score: Int!): Movie!
       deleteMovie(id: Int!): Boolean!
    }
    `,
    resolvers: resolvers
});

server.start(() => console.log("Graphql server works"));