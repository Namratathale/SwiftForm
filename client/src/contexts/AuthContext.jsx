import {createContext, useContext, useEffect, useState} from 'react'
import {api} from '../lib/api'

const AuthContext = createContext(null)
const TOKEN_KEY = 'formforge-token'

export function AuthProvider({children}) {
  // state: token (from localStorage), user, loading

  // useEffect on [token]:
  //   bootstrap() → if no token, set loading false and return
  //                 else call api.me(token) → setUser on success
  //                 on error → remove token from localStorage, clear token + user
  //                 finally → setLoading(false)
  //   cleanup → set active = false to prevent stale state updates

  // storeSession(payload) → saves token to localStorage, sets token + user
  // signup(payload)       → calls api.signup, then storeSession, returns data
  // login(payload)        → calls api.login, then storeSession, returns data
  // logout()              → removes token from localStorage, clears token + user

  return <AuthContext.Provider value={{token, user, loading, signup, login, logout}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)