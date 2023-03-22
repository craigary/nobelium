import { getPostDate } from '@/lib/date'

export default function filterPublishedPosts({ posts, includePages }) {
  if (!posts || !posts.length) return []
  const publishedPosts = posts
    .filter(post =>
      includePages
        ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Post'
    )
    .filter(post =>
      post.title &&
      post.slug &&
      post?.status?.[0] === 'Published' &&
      getPostDate(post) < new Date()
    )
  return publishedPosts
}
