import postConfig from '@/config/post.config'
import { notionClient } from '@/lib/notion/client'
import { getAllPages } from '@/lib/notion/get-all-pages'

export const getBlogDetails = async slug => {
  const pages = await getAllPages()
  const item = pages.find(item => item[postConfig.slug] === slug)

  const id = item.id
  return await notionClient.getPage(id)
}
