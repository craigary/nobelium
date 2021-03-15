const { NotionAPI } = require('notion-client')

module.exports = async (req, res) => {
  const api = new NotionAPI()
  const page = await api.getPage(req.query.id)
  const collectionId = Object.keys(page.collection)[0]
  const collectionViewId = Object.keys(page.collection_view)[0]
  const root = await api.getCollectionData(collectionId, collectionViewId)
  const articles = root.result.blockIds.map(id => root.recordMap.block[id])
  const properties = Object.values(root.recordMap.collection)[0].value.schema
  const metaData = articles.map(art => {
    const artMeta = {
      id: art.value.id,
      title: art.value.properties.title[0][0],
      properties: Object.entries(properties).reduce((properties, [id, { name }]) => {
        if (id !== 'title' && name !== 'date') {
          Array.isArray(art.value.properties[id])
            ? properties[name] = art.value.properties[id][0][0]
            : properties[name] = art.value.properties[id]
        }
        if (name === 'date') {
          properties[name] = art.value.properties[id][0][1][0][1].start_date
        }
        return properties
      }, {})
    }
    if (artMeta.properties.tags) {
      artMeta.properties.tags = artMeta.properties.tags.split(',')
    }
    return artMeta
  })
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
  res.json(metaData)
}
