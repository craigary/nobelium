import api from '@/lib/server/notion-api'

export async function getPostBlocks (id) {
  const pageBlock = await api.getPage(id)
  return pageBlock
}
