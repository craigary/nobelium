import { createContext, useContext, useEffect } from 'react'
import { useMedia } from 'react-use'
import BLOG from '@/blog.config'

const ThemeContext = createContext({ dark: true })

export function ThemeProvider ({ children }) {
  const prefersDark = useMedia('(prefers-color-scheme: dark)', true)
  const dark = BLOG.appearance === 'dark' || (BLOG.appearance === 'auto' && prefersDark)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme () {
  return useContext(ThemeContext)
}
