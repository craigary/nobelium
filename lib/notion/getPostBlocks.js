import { NotionAPI } from 'notion-client'

export async function getPostBlocks (id) {
  const authToken = process.env.NOTION_ACCESS_TOKEN || null
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)
  return pageBlock
}
