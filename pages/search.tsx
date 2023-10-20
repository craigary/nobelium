import type { GetStaticProps } from 'next/types';

import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'
import { PostToShow } from '@/lib/notion/getAllPosts';

type SearchProps = {
  tags: Record<string, number>;
  posts: PostToShow[];
}

export default function search ({ tags, posts }: SearchProps) {
  return <SearchLayout tags={tags} posts={posts} />
}

export const getStaticProps: GetStaticProps<SearchProps> = async ()  =>{
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}
