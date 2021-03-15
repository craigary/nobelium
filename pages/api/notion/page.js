const { NotionAPI } = require('notion-client')

module.exports = async (req, res) => {
  const api = new NotionAPI()
  const recordMap = await api.getPage(req.query.id)
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  res.json(recordMap)
}
