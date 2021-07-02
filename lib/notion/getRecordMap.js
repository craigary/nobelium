import BLOG from '@/blog.config'
import { NotionAPI } from 'notion-client'

export async function getRecordMap (id) {
  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const recordMap = await api.getPage(id)
  return recordMap
}
