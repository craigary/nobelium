import BLOG from '@/blog.config'

export async function getAllPosts () {
  const response = await fetch(`${BLOG.notionApiEndPoint}/table/${BLOG.notionPageId}`)
  return await response.json()
}

export async function getAllTags () {
  const response = await getAllPosts()
  const posts = response.filter(
    post => post.status === 'Published' && post.type === 'Post'
  )
  let tags = posts.map(p => p.tags)
  tags = [...tags.flat()]
  const tagObj = {}
  tags.forEach(tag => {
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })
  return tagObj
}

export async function getPostBlocks (id) {
  const response = await fetch(`${BLOG.notionApiEndPoint}/page/${id}`)
  return await response.json()
}
