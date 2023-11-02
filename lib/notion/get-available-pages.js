import postConfig from '@/config/post.config'
import statusConfig from '@/config/status.config'
import typeConfig from '@/config/type.config'
import { getAllPages } from '@/lib/notion/get-all-pages'

export const getAvailablePages = async () => {
  const posts = await getAllPages()
  return posts
    .filter(
      post =>
        post[postConfig.status] === statusConfig.complete &&
        post[postConfig.type] === typeConfig.page
    )
    .sort((a, b) => a.date - b.date)
}
