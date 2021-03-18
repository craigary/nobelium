import PageLayout from '@/layouts/page'
import BLOG from '@/blog.config'
import { getAllPosts, getPostBlocks } from '@/lib/notion'

const about = ({ post, blockMap, showAbout }) => {
  return (
    <PageLayout blockMap={blockMap} frontMatter={post} showAbout={showAbout}/>
  )
}

export async function getStaticProps () {
  const posts = await getAllPosts()
  const post = posts.find(t => t.slug === 'about')
  const showAbout = BLOG.showAbout && post && post.status === 'Published' && post.type === 'Page'
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap, showAbout },
    revalidate: 1
  }
}

export default about
