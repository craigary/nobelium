import { createContext, useContext } from 'react'

const ConfigContext = createContext(undefined)

export function ConfigProvider ({ value, children }) {
  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig () {
  return useContext(ConfigContext)
}
