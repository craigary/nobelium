import { useRouter } from 'next/router'
import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import { useLocale } from '@/lib/locale'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'
import Page404 from '@/components/Page404'

const BlogPost = ({ post, blockMap, emailHash }) => {
  const router = useRouter()
  const locale = useLocale()

  // TODO: It would be better to render something
  if (router.isFallback) return null

  // If no post data found, render 404
  if (!post) return Page404({ locale })

  return (
    <Layout
      blockMap={blockMap}
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

  if (!post) return { props: {} }

  const blockMap = await getPostBlocks(post.id)
  const emailHash = createHash('md5')
    .update(BLOG.email)
    .digest('hex')
    .trim()
    .toLowerCase()

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1
  }
}

export default BlogPost
