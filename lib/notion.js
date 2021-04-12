import BLOG from '@/blog.config'
const { NotionAPI } = require('notion-client')
const { getPageProperty, getDateValue } = require('notion-utils')

const api = new NotionAPI()

export async function getAllPosts() {
  const pages = await api.getPage(BLOG.notionPageId)
  const collectionId = Object.keys(pages.collection)[0]
  const collectionViewId = Object.keys(pages.collection_view)[0]
  const collectionData = await api.getCollectionData(
    collectionId,
    collectionViewId
  )

  // All Page IDs
  const postIds = collectionData.result.blockIds

  // Actual Data for Each Page ID
  const recordMap = collectionData.recordMap
  const blocks = {}
  postIds.forEach(id => {
    blocks[id] = recordMap.block[id].value
  })

  // Get Property Schema (Only for Dates)
  const schema = Object.values(recordMap.collection)[0].value.schema
  const dateSchema = Object.entries(schema).find(
    ([_, val]) => val.name === 'date' && val.type === 'date'
  )[0]

  const propertyItems = ['title', 'slug', 'summary', 'status', 'type', 'date']
  const posts = postIds.reduce((acc, cur) => {
    const property = {}
    const block = blocks[cur]
    for (let i = 0; i < propertyItems.length; i++) {
      const propertyVal = getPageProperty(propertyItems[i], block, recordMap)
      property[propertyItems[i]] = propertyVal
    }
    property.id = block.id.split('-').join('')
    property.fullWidth = block?.format?.page_full_width ?? false

    const date = block.properties?.[dateSchema]
    property.date = getDateValue(date)?.start_date
    acc.push(property)
    return acc
  }, [])
  return posts
}

export async function getAllTags() {
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

export async function getPostBlocks(id) {
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
