import api from '@/lib/server/notion-api'

export async function getPostBlocks (id: string) {
  const pageBlock = await api.getPage(id)
  return pageBlock
}
