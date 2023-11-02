import postConfig from '@/config/post.config'
import { getBase64Image } from '@/lib/utils'
import config from '@/nobelium.config'
import { getPageProperty } from 'notion-utils'
import { notionClient } from './client'

const getAllPageIds = collectionQuery => {
  const ids = Object.values(Object.values(collectionQuery)[0])
    .map(view => view.collection_group_results.blockIds)
    .flat()
  return [...new Set(ids)]
}

const getPageProperties = async (schema, id, recordMap) => {
  const block = recordMap.block[id].value

  let icon = block.format.page_icon

  if (icon && icon.startsWith('/icons')) {
    const url = `https://www.notion.so${icon}`
    const iconRes = await fetch(url)
    const svgData = await iconRes.text()
    icon = {
      type: 'svg',
      data: svgData
    }
  } else if (icon && icon.startsWith('http')) {
    // TODO: Parse the url first, if the icon url is from notion.so
    const iconData = await getBase64Image(icon)
    icon = {
      type: 'base64',
      data: iconData
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
  return await Promise.all(res)
}

export const generateAllParams = async () => {
  return (await getAllPages()).map(post => ({ slug: post[postConfig.slug] }))
}
