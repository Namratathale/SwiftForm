import {Router} from 'express'
import {
  createFormFromPrompt,
  getDashboard,
  getFormById,
  getPublicForm,
  listForms,
  submitResponse,
  updateForm
} from '../controllers/formController.js'
import {requireAuth} from '../middleware/authMiddleware.js'

const router = Router()

// GET  /forms                        → requireAuth, listForms
// POST /forms/generate               → requireAuth, createFormFromPrompt
// GET  /forms/:id                    → requireAuth, getFormById
// PUT  /forms/:id                    → requireAuth, updateForm
// GET  /forms/:id/dashboard          → requireAuth, getDashboard
// GET  /public/forms/:slug           → getPublicForm
// POST /public/forms/:slug/responses → submitResponse

export default router