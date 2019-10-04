import * as jwt from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-express'

import { User } from './generated/graphql'

export const getMe = (req: any) => {
  const token = req.headers['x-token']

  if (token) {
    try {
      return jwt.verify(token, 'somethingsupersecret') // <-- obviously wouldn't ever harcode this in real life
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.')
    }
  }
}

export const createToken = (
  user: User,
  secret: string,
  expiresIn: string
): string => {
  const { id, username } = user
  return jwt.sign({ id, username }, secret, { expiresIn })
}

let idCount = 3
export const idProvider = () => idCount++
