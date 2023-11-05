import postConfig from '@/config/post.config'
import statusConfig from '@/config/status.config'
import typeConfig from '@/config/type.config'
import { getAllPages } from '@/lib/notion/get-all-pages'

export const getAvailablePosts = async () => {
  const posts = await getAllPages()
  return posts
    .filter(
      post =>
        post[postConfig.status] === statusConfig.complete &&
        post[postConfig.type] === typeConfig.post
    )
    .sort((a, b) => a.date - b.date)
}

export const getAvailablePostsByTag = async tagName => {
  const posts = await getAllPages()
  if (!tagName) {
    return posts.filter(
      post =>
        post[postConfig.status] === statusConfig.complete &&
        post[postConfig.type] === typeConfig.post
    )
  }

  return posts
    .filter(
      post =>
        post[postConfig.status] === statusConfig.complete &&
        post[postConfig.type] === typeConfig.post &&
        post[postConfig.tags].map(i => i.toLowerCase()).includes(tagName.toLowerCase())
    )
    .sort((a, b) => a.date - b.date)
}

export const generatePaginationParams = async pageSize => {
  const posts = await getAvailablePosts()
  const pageCount = Math.ceil(posts.length / pageSize)
  const arr = []
  for (let i = 0; i < pageCount - 1; i++) {
    arr.push({
      page: [(i + 2).toString()]
    })
  }
  return arr
}
