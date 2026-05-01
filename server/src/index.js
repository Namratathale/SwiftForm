import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import {connectDb, isDbReady} from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import formRoutes from './routes/formRoutes.js'

dotenv.config()

const app = express()
// port (default: 5000), host (default: '127.0.0.1'), configuredClientUrl (default: 'http://localhost:5173')
// allowedOrigins Set → configuredClientUrl + localhost:5173 + 127.0.0.1:5173

// cors middleware → allow if no origin or origin in allowedOrigins, else block
// express.json middleware

// GET /api/health → { status: 'ok', database: 'connected' | 'disconnected' }

// /api/auth → authRoutes

// /api middleware (DB guard):
//   skip if path === '/health' or starts with '/auth/'
//   if !isDbReady → 503 with config hint message
//   else → next()

// /api → formRoutes

// app.listen on host:port → log server URL
// server 'error' handler:
//   EADDRINUSE → port in use message
//   EPERM      → permission denied message
//   default    → generic error message

// connectDb() → on failure log error + 503 warning message