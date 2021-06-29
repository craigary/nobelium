import { useContext, createContext } from 'react'
import { fetchLocaleLang } from '@/lib/lang'

const locale = fetchLocaleLang()
const LocaleContext = createContext()

export function LocaleProvider ({ children }) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
