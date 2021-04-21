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

  const propertyItems = ['title', 'slug', 'summary', 'status', 'type']

  // const posts2 = postIds.reduce((acc, cur) => {
  //   const property = {}
  //   const block = blocks[cur]
  //   for (let i = 0; i < propertyItems.length; i++) {
  //     const propertyVal = getPageProperty(propertyItems[i], block, recordMap)
  //     property[propertyItems[i]] = propertyVal
  //   }
  //   property.id = block.id.split('-').join('')
  //   property.fullWidth = block?.format?.page_full_width ?? false
  //   const date = block.properties?.[dateSchema]
  //   property.date = getDateValue(date)?.start_date || null
  //   const tagArr = getPageProperty('tags', block, recordMap)
  //   property.tags = !tagArr.length ? null : tagArr.split(',')
  //   acc.push(property)
  //   return acc
  // }, [])

  const posts = []
  for (let i = 0; i < postIds.length; i++) {
    const id = postIds[i]
    const property = {}
    const block = blocks[id]
    for (let j = 0; j < propertyItems.length; j++) {
      const propertyVal = getPageProperty(propertyItems[j], block, recordMap)
      property[propertyItems[j]] = propertyVal
    }
    property.id = block.id.split('-').join('')
    property.fullWidth = block?.format?.page_full_width ?? false
    const date = block.properties?.[dateSchema]
    property.date = getDateValue(date)?.start_date || null
    const tagArr = getPageProperty('tags', block, recordMap)
    property.tags = !tagArr.length ? null : tagArr.split(',')
    property.createdTime = new Date(block?.created_time).toString() || null
    posts.push(property)
  }
  if (BLOG.sortByDate) {
    posts.sort((a, b) => {
      const dateA = new Date(a.date || a.createdTime)
      const dateB = new Date(b.date || b.createdTime)
      return dateB - dateA
    })
  }
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
  return pageBlock
}
