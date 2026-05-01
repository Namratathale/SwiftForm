import {useState} from 'react'
import {Navigate, useLocation} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

const initialForm = {name: '', email: '', password: ''}

export default function AuthPage() {
  const {token, login, signup} = useAuth()
  const location = useLocation()
  // state: mode ('signup' | 'login'), form, error, busy

  // if token → redirect to location.state?.from or '/workspace'

  // handleSubmit(event) → prevents default, sets busy + clears error
  //   if mode is 'signup' → calls signup(form)
  //   if mode is 'login'  → calls login({ email, password })
  //   on error → setError(err.message)
  //   finally  → setBusy(false)

  return (
    <main className="page auth-page">
      <section className="auth-shell">
        {/* Promo panel: eyebrow, h1, description, 3 metrics (1 prompt, 2 modes, Live preview) */}

        <form className="auth-card" onSubmit={handleSubmit}>
          {/* Segmented control: Sign up | Login toggle */}

          {/* If mode is 'signup' → name input */}

          {/* Email input */}

          {/* Password input */}

          {/* If error → error message */}

          {/* Submit button: disabled when busy, label changes per mode + busy state */}
        </form>
      </section>
    </main>
  )
}