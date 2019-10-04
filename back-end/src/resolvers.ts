import { Resolvers } from './generated/graphql'

export const resolvers: Resolvers = {
  Query: {
    movies: ({}, {}, { data }) => data.movies
  },

  Movie: {
    actors: (movie, {}, { data }) =>
      movie.actors.map(actorId => data.actors.find(({ id }) => id === actorId)),

    directors: (movie, {}, { data }) =>
      movie.directors.map(directorId =>
        data.directors.find(({ id }) => id === directorId)
      )
  },

  Actor: {
    directors: (actor, {}, { data }) =>
      data.directors.filter(director => actor.directors.includes(director.id)),

    movies: (actor, {}, { data }) =>
      data.movies.filter(({ actorIDs }) => actorIDs.includes(actor.id))
  },

  Director: {
    moviesDirected: (director, {}, { data }) =>
      data.movies.filter(({ directorIDs }) => directorIDs.includes(director.id))
  }
}
