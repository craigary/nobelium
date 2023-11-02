import postConfig from '@/config/post.config'
import { notionImageUrlParser } from '@/lib/notion/notion-image-parser'
import config from '@/nobelium.config'
import { getPageProperty, getTextContent } from 'notion-utils'
import { notionClient } from './client'

const getAllPageIds = collectionQuery => {
  const ids = Object.values(Object.values(collectionQuery)[0])
    .map(view => view.collection_group_results.blockIds)
    .flat()
  return [...new Set(ids)]
}

const getPageProperties = (schema, id, recordMap) => {
  const block = recordMap.block[id].value

  let icon = block.format.page_icon

  if (icon && icon.startsWith('/icons')) {
    const url = `https://www.notion.so${icon}`
    icon = {
      type: 'notion-icon',
      data: url
    }
  } else if (icon && icon.startsWith('http')) {
    const { url } = notionImageUrlParser(icon, id)
    icon = {
      type: 'image',
      data: url
    }
  } else if (icon) {
    icon = {
      type: 'emoji',
      data: icon
    }
  } else {
    icon = {
      type: null,
      data: null
    }
  }

  const propertyList = Object.values(schema).map(item => item.name)
  return propertyList.reduce(
    (acc, property) => {
      const value = getPageProperty(property, block, recordMap)
      if (value) {
        acc[property] = value
      }
      return acc
    },
    { id, icon }
  )
}

export const getAllPages = async () => {
  const response = await notionClient.getPage(config.notionPageId)
  const collection = Object.values(response.collection)[0]
  const schema = collection.value.schema
  const collectionQuery = response.collection_query
  const pageIds = getAllPageIds(collectionQuery)
  const res = pageIds.map(id => getPageProperties(schema, id, response))
  return res
}



export const generateAllParams = async () => {
  return (await getAllPages()).map(post => ({ slug: post[postConfig.slug] }))
}
