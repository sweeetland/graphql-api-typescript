import * as bcrypt from 'bcryptjs'

import { Resolvers } from './generated/graphql'
import { createToken, idProvider } from './helpers'

export const resolvers: Resolvers = {
  Query: {
    movies: ({}, {}, { data }) => data.movies
  },

  Mutation: {
    createUser: async (parent, { username, password }, ctx) => {
      const user = {
        id: `${idProvider()}`,
        username,
        password: await bcrypt.hash(password, 10)
      }

      ctx.data.users.push(user)

      return { user, token: createToken(user, ctx.secret, '30m') }
    }
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
