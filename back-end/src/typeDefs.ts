import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Director {
    id: ID!
    name: String!
    birthday: String
    country: String
    moviesDirected: [Movie]
  }

  type Actor {
    id: ID!
    name: String!
    birthday: String
    country: String
    directors: [Director]
    movies: [Movie]
  }

  type Movie {
    id: ID!
    title: String!
    year: String
    rating: Float
    actors: [Actor]
    directors: [Director]
  }

  type Query {
    movies: [Movie]
  }
`
