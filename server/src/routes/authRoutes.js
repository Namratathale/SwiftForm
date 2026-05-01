import {Router} from 'express'
import {getCurrentUser, login, signup} from '../controllers/authController.js'
import {requireAuth} from '../middleware/authMiddleware.js'

const router = Router()

// POST /signup → signup
// POST /login  → login
// GET  /me     → requireAuth, getCurrentUser

export default router