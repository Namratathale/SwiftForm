import {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext(null)
const THEME_KEY = 'formforge-theme'

export function ThemeProvider({children}) {
  // state: theme (from localStorage, defaults to 'light')

  // useEffect on [theme]:
  //   → sets document.documentElement.dataset.theme to current theme
  //   → saves theme to localStorage

  // toggleTheme() → toggles theme between 'light' and 'dark'

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)