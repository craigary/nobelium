import { LocaleObject } from '@/assets/i18n'
import { ReactNode, createContext, useContext } from 'react'

const LocaleContext = createContext<LocaleObject | undefined>(undefined)

export function LocaleProvider ({ value, children }: { value: LocaleObject, children: ReactNode}) {
  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext) as LocaleObject
