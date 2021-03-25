import BLOG from '@/blog.config'
const { NotionAPI } = require('notion-client')
const api = new NotionAPI()

export async function getAllPosts () {
  // const response = await fetch(`/api/notion/collection?id=${BLOG.notionPageId}`)
  const page = await api.getPage(BLOG.notionPageId)
  const collectionId = Object.keys(page.collection)[0]
  const collectionViewId = Object.keys(page.collection_view)[0]
  const root = await api.getCollectionData(collectionId, collectionViewId)
  const articles = root.result.blockIds
    .map(id => root.recordMap.block[id])
    .filter(article => article.role !== 'none')
  const properties = Object.values(root.recordMap.collection)[0].value.schema
  const metaData = articles.map(art => {
    const propertiesInArticle = Object.entries(properties).reduce(
      (properties, [id, { name }]) => {
        if (id !== 'title' && name !== 'date' && name !== 'summary') {
          Array.isArray(art.value.properties[id])
            ? (properties[name] = art.value.properties[id][0][0])
            : (properties[name] = art.value.properties[id] || null)
        }
        if (name === 'date') {
          properties[name] = art.value.properties[id][0][1][0][1].start_date
        }
        if (name === 'summary') {
          Array.isArray(art.value.properties[id])
            ? (properties[name] = art.value.properties[id]
                .reduce((acc, val) => acc.concat(val[0] !== '⁍' ? val[0] : ''))
                .join(''))
            : (properties[name] = null)
        }
        properties.fullWidth = art.value.format?.page_full_width ?? false
        return properties
      },
      {}
    )

    const artMeta = {
      id: art.value.id,
      title: art.value.properties.title.join(''),
      ...propertiesInArticle
    }
    if (artMeta.tags) {
      artMeta.tags = artMeta.tags.split(',')
    } else {
      artMeta.tags = null
    }
    return artMeta
  })
  return metaData
}

export async function getAllTags () {
  const response = await getAllPosts()
  const posts = response.filter(
    post => post.status === 'Published' && post.type === 'Post' && post.tags
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
  const pageBlock = await api.getPage(id)
  const titlesForTweak = Object.entries(pageBlock.block).reduce(
    (properties, [id, { value }]) => {
      if (value && value.properties && value.properties.title) {
        properties[id] = value.properties.title
        return properties
      }
      return properties
    },
    {}
  )
  const titles = Object.entries(titlesForTweak).reduce(
    (properties, [id, value]) => {
      const tempTitle = value.map(item => {
        if (item.length > 1) {
          let title = item[0]
          const modifiers = item[1]
          for (let i = 0; i < modifiers.length; i++) {
            const modifier = modifiers[i]
            const regex = /^\/[0-9a-f]{32}/
            if (modifier[0] === 'a' && regex.test(modifier[1])) {
              modifiers[i] = ['a', `https://notion.so${modifier[1]}`]
              break
            }
            if (modifier[0] === 'p') {
              title = titlesForTweak[modifier[1]][0][0]
              modifiers[i] = [
                'a',
                `https://notion.so/${modifier[1].split('-').join('')}`
              ]
              break
            }
          }
          item[0] = title
          item[1] = modifiers
          return item
        } else {
          return item
        }
      })
      properties[id] = tempTitle
      return properties
    },
    {}
  )
  for (const id in titles) {
    pageBlock.block[id].value.properties.title = titles[id]
  }
  return pageBlock
}
