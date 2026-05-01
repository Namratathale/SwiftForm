// resolveApiBase() → returns API base URL:
//   if no VITE_API_BASE_URL → falls back to window.location protocol+hostname on port 5000/api
//   if configured URL is local + current host is local → swaps hostname to window.location.hostname
//   otherwise → returns configured URL as-is
//   on URL parse error → returns configured value unchanged

const API_BASE = resolveApiBase()
const DEBUG_AI = import.meta.env.VITE_DEBUG_AI === 'true'

// request(path, options) → base fetch wrapper:
//   if DEBUG_AI + path is /forms/generate → logs request payload
//   sets Content-Type + optional Bearer token header
//   parses JSON response (falls back to {})
//   throws Error with message if response not ok
//   if DEBUG_AI + path is /forms/generate → logs response meta + question summaries
//   returns parsed data

export const api = {
  // signup(payload)              → POST /auth/signup
  // login(payload)               → POST /auth/login
  // me(token)                    → GET  /auth/me
  // listForms(token)             → GET  /forms
  // generateForm(prompt, token)  → POST /forms/generate
  // updateForm(id, payload, token) → PUT /forms/:id
  // getDashboard(id, token)      → GET  /forms/:id/dashboard
  // getPublicForm(slug)          → GET  /public/forms/:slug
  // submitResponse(slug, answers)→ POST /public/forms/:slug/responses
}