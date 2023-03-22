const _config = require('../blog.config')

module.exports = function config () {
  return {
    notionPageId: process.env.NOTION_PAGE_ID,
    notionAccessToken: process.env.NOTION_ACCESS_TOKEN,
    isProd: process.env.VERCEL_ENV === 'production',
    ..._config
  }
}
