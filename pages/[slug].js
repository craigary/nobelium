import Layout from '@/layouts/layout'
import { getAllPosts, getRecordMap } from '@/lib/notion'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'

const BlogPost = ({ post, recordMap, emailHash }) => {
  if (!post) return null
  return (
    <Layout
      recordMap={recordMap}
      frontMatter={post}
      emailHash={emailHash}
      fullWidth={post.fullWidth}
    />
  )
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map(row => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)
  const recordMap = await getRecordMap(post.id)
  const emailHash = createHash('md5')
    .update(BLOG.email)
    .digest('hex')
    .trim()
    .toLowerCase()

  return {
    props: { post, recordMap, emailHash },
    revalidate: 1
  }
}

export default BlogPost
