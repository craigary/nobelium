import BLOG from '@/blog.config'
const { NotionAPI } = require('notion-client')

const api = new NotionAPI()
export async function getAllPosts () {
  // const response = await fetch(`/api/notion/collection?id=${BLOG.notionPageId}`)
  const page = await api.getPage(BLOG.notionPageId)
  const collectionId = Object.keys(page.collection)[0]
  const collectionViewId = Object.keys(page.collection_view)[0]
  const root = await api.getCollectionData(collectionId, collectionViewId)
  const articles = root.result.blockIds.map(id => root.recordMap.block[id])
  const properties = Object.values(root.recordMap.collection)[0].value.schema
  const metaData = articles.map(art => {
    const propertiesInArticle = Object.entries(properties).reduce((properties, [id, { name }]) => {
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

    const artMeta = {
      id: art.value.id,
      title: art.value.properties.title[0][0],
      ...propertiesInArticle
    }
    if (artMeta.tags) {
      artMeta.tags = artMeta.tags.split(',')
    }
    return artMeta
  })
  return metaData
}

export async function getAllTags () {
  const response = await getAllPosts()
  const posts = response.filter(
    post => post.status === 'Published' && post.type === 'Post'
  )
  let tags = posts.map(p => p.tags)
  tags = [...tags.flat()]
  const tagObj = {}
  tags.forEach(tag => {
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })
  return tagObj
}

export async function getPostBlocks (id) {
  const recordMap = await api.getPage(id)
  return recordMap.block
}
