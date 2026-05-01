import jwt from 'jsonwebtoken'
import {User} from '../models/User.js'

export const requireAuth = async (req, res, next) => {
  // if no Authorization header or doesn't start with 'Bearer ' → 401
  // extract token from header
  // verify JWT with secret from env
  // find user by decoded.userId (exclude password) → 401 if not found
  // set req.user = user, call next()
  // on JWT error → 401 invalid or expired token
}