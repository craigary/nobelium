import BLOG from '@/blog.config'
import lang from './lang'
import { useContext, createContext } from 'react'

let locale = {}
if (BLOG.lang.slice(0, 2).toLowerCase() === 'zh') {
  if (BLOG.lang === 'zh-CN') {
    locale = lang['zh-CN']
  } else {
    locale = lang['zh-TW']
  }
} else {
  locale = lang.en
}

const LocaleContext = createContext()

export function LocaleProvider ({ children }) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
