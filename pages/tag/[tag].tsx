import type { GetStaticProps } from 'next/types'
import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'
import { PostToShow } from '@/lib/notion/getAllPosts';

type TagProps = {
  tags: Record<string, number>;
  posts: PostToShow[];
  currentTag?: string
}

export default function Tag ({ tags, posts, currentTag }: TagProps) {
  return <SearchLayout tags={tags} posts={posts} currentTag={currentTag} />
}

export const getStaticProps: GetStaticProps<TagProps, { tag: string }> = async ({ params })  =>{
  const currentTag = params?.tag
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const filteredPosts = posts.filter(
    post => post && post.tags && post.tags.includes(currentTag)
  )
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag
    },
    revalidate: 1
  }
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    paths: Object.keys(tags).map(tag => ({ params: { tag } })),
    fallback: true
  }
}
