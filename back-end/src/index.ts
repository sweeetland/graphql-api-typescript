import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { data } from './data'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { getMe } from './helpers'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    if (req)
      return {
        me: getMe(req),
        secret: 'somethingsupersecret', // <-- obviously wouldn't ever harcode this in real life
        data
      }
  }
})

const app = express()
server.applyMiddleware({ app })

const port = process.env.PORT || 4000
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
