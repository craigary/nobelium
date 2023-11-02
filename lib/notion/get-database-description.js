import { notionClient } from '@/lib/notion/client'
import config from '@/nobelium.config'
import { getTextContent } from 'notion-utils'

export const getDatabaseDescription = async () => {
  const response = await notionClient.getPage(config.notionPageId)
  const collection = Object.values(response.collection)[0]
  const desc = getTextContent(collection.value.description)
  return desc
}
