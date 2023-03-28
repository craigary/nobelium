import { useContext, createContext } from 'react'
import { useConfig } from '@/lib/config'
import { fetchLocaleLang } from '@/lib/lang'

const LocaleContext = createContext()

export function LocaleProvider ({ children }) {
  const config = useConfig()

  return (
    <LocaleContext.Provider value={fetchLocaleLang(config.lang)}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
