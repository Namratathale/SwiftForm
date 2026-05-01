import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {User} from '../models/User.js'

// signToken(userId)   → signs JWT with userId, secret from env, expires in 7d
// sanitizeUser(user)  → returns { _id, name, email } (strips password)

export const signup = async (req, res) => {
  // destructure name, email, password from req.body
  // if any field missing/blank → 400
  // if password < 6 chars      → 400
  // if email already exists    → 409
  // hash password (salt 10), create User
  // return 201 with { user: sanitizeUser, token: signToken }
}

export const login = async (req, res) => {
  // destructure email, password from req.body
  // if any field missing/blank  → 400
  // if user not found           → 401
  // if password does not match  → 401
  // return 200 with { user: sanitizeUser, token: signToken }
}

export const getCurrentUser = async (req, res) => {
  // return 200 with { user: sanitizeUser(req.user) }
}