import { createContext, useContext } from 'react'

const LocaleContext = createContext(undefined)

export function LocaleProvider ({ value, children }) {
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
