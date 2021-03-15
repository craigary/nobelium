import BlogLayout from '@/layouts/blog'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

const BlogPost = ({ post, recordMap }) => {
  if (!post) return null
  return <BlogLayout recordMap={recordMap} frontMatter={post}>
    </BlogLayout>
}

export async function getStaticPaths () {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.status === 'Published' && post.type === 'Post')
  return {
    paths: posts.map((row) => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.status === 'Published' && post.type === 'Post')
  const post = posts.find((t) => t.slug === slug)
  const recordMap = await getPostBlocks(post.id)
  return {
    props: { post, recordMap },
    revalidate: 1
  }
}

export default BlogPost
