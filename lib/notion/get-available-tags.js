import postsConfig from '@/config/post.config'
import { getAvailablePosts } from '@/lib/notion/get-available-posts'

export const getAllTags = async () => {
  const posts = await getAvailablePosts()
  return posts.map(post => post[postsConfig.tags])
}

export const getAvailableTags = async () => {
  const tags = await getAllTags()
  const flattenTags = tags.flat()
  return [...new Set(flattenTags)]
}

const generateTagPages = (tag, postCount, pageSize) => {
  tag = tag.toLowerCase()

  const arr = [{ slug: [tag] }]
  for (let i = 0; i < Math.ceil(postCount / pageSize) - 1; i++) {
    arr.push({ slug: [tag, (i + 2).toString()] })
  }
  return arr
}

export const generateTagParams = async pageSize => {
  const allTags = await getAllTags()
  return allTags.map(i => ({ slug: [i] }))

  // if (!pageSize) {
  //   return allTags.map(i => ({ slug: [i] }))
  // }

  // const posts = (await getAvailablePosts()).map(post => post[postsConfig.tags])

  // const tagToPostCount = posts.reduce((acc, postTags) => {
  //   postTags.forEach(tag => (acc[tag] = acc[tag] ? acc[tag] + 1 : 1))
  //   return acc
  // }, {})

  // return Object.entries(tagToPostCount).flatMap(([tag, postCount]) =>
  //   generateTagPages(tag, postCount, pageSize)
  // )
}
