import * as express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { data } from './data'

const server = new ApolloServer({ typeDefs, resolvers, context: { data } })

const app = express()
server.applyMiddleware({ app })

const port = process.env.PORT || 4000
app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
)
