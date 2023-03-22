import config from '@/lib/config'
import { NotionAPI } from 'notion-client'

export async function getPostBlocks (id) {
  const BLOG = config()

  const authToken = BLOG.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)
  return pageBlock
}
