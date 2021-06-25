import BLOG from '@/blog.config'

const currentDate = new Date().toLocaleDateString(BLOG.lang ?? 'en-US')

export default function filterPublishedPosts({ posts, includePages }) {
  if (!posts || !posts.length) return []
  const publishedPosts = posts
    .filter(post =>
      includePages
        ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Post'
    )
    .filter(post => {
      const postDate = new Date(
        post?.date?.start_date || post.createdTime
      ).toLocaleDateString(BLOG.lang ?? 'en-US')
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        postDate <= currentDate
      )
    })
  return publishedPosts
}
