import fullConfig from '../../blog.config'

export type Config = Omit<typeof fullConfig, "appearance"> & { appearance: 'light' | 'dark' | 'auto' }

export const clientConfig = fullConfig as Config
// If we need to stripe out some private fields
export const config = fullConfig as Config