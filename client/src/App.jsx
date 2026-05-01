import {Link, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import {useAuth} from './contexts/AuthContext'
import {useTheme} from './contexts/ThemeContext'
import BuilderPage from './pages/BuilderPage'
import DashboardPage from './pages/DashboardPage'
import PublicFormPage from './pages/PublicFormPage'
import AuthPage from './pages/AuthPage'
import LandingPage from './pages/LandingPage'

function ThemeToggle() {
  // from useTheme: theme, toggleTheme
  // button that toggles theme: label is 'Light mode' if dark, else 'Night mode'
}

function ProtectedRoute({children}) {
  // from useAuth: token, loading
  // if loading → loading page
  // if !token  → redirect to /auth with location.pathname as state.from
  // else       → render children
}

function HomeRoute() {
  // from useAuth: token, loading
  // if loading → loading page
  // if token   → redirect to /workspace
  // else       → render LandingPage
}

export default function App() {
  const {token, user, logout} = useAuth()

  return (
    <div className="app-shell">
      <header className="topbar">
        {/* Topbar left: brand link (→ /workspace if token, else /) + tagline copy */}

        <div className="topbar-actions">
          {/* ThemeToggle */}
          {/* If token → user chip (user.name or 'Creator') + logout button */}
          {/* If !token → sign in link → /auth */}
        </div>
      </header>

      <Routes>
        {/* / → HomeRoute */}
        {/* /auth → AuthPage */}
        {/* /workspace → ProtectedRoute > BuilderPage */}
        {/* /dashboard/:id → ProtectedRoute > DashboardPage */}
        {/* /forms/:slug → PublicFormPage */}
      </Routes>

      {/* App watermark */}
    </div>
  )
}