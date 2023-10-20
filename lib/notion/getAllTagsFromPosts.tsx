import { PostToShow } from "./getAllPosts"

export function getAllTagsFromPosts (posts: PostToShow[]) {
  const taggedPosts = posts.filter(post => post?.tags)
  const tags: string[] = [...taggedPosts.map(p => p.tags).flat()]
  const tagObj: Record<string, number> = {}
  tags.forEach(tag => {
    if (tag in tagObj) {
      tagObj[tag]++
    } else {
      tagObj[tag] = 1
    }
  })
  return tagObj
}
