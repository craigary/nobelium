import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts()
  const postsToShow = posts
    .filter(post => post.status === 'Published' && post.type === 'Post')
    .slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
  return {
    props: {
      page: 1, // current page is 1
      totalPages,
      postsToShow
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, totalPages }) => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
      {totalPages > 1 && <Pagination page={page} totalPages={totalPages} />}
    </Container>
  )
}

export default blog
