import { getAllPosts } from '@/lib/notion'
import { generateRss } from '@/lib/rss'
export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const latestPosts = posts.slice(0, 10)
  const xmlFeed = await generateRss(latestPosts)
  require('fs').writeFileSync('./public/feed.xml', xmlFeed)
  return {
    props: {}
  }
}
const feed = () => null
export default feed
