const fs = require('fs')
const { resolve } = require('path')

const raw = fs.readFileSync(resolve(process.cwd(), 'blog.config.js'), 'utf-8')
const config = eval(`((module = { exports }) => { ${raw}; return module.exports })()`)

// If we need to stripe out some private fields
const clientConfig = config

module.exports = {
  config,
  clientConfig
}
