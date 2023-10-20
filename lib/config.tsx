import { createContext, useContext } from 'react'
import type { Config } from './server/config'

const ConfigContext = createContext<Config | null>(null)

export const ConfigProvider: React.FC<{ value: Config; children?: React.ReactNode }> = ({ value, children }) => {
  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig () {
  return useContext(ConfigContext) as Config
}
