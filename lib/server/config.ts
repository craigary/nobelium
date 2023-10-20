import fullConfig from '../../blog.config'

export const clientConfig = fullConfig
// If we need to stripe out some private fields
export const config = fullConfig

export type Config = typeof fullConfig