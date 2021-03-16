import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps (context) {
  const { page } = context.params // Get Current Page No.
  // fetch page data
  const posts = await getAllPosts()
  const postsToShow = posts
    .filter(post => post.status === 'Published' && post.type === 'Post')
    .slice(BLOG.postsPerPage * (page - 1), BLOG.postsPerPage * page)
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
  return {
    props: {
      page, // Current Page
      totalPages,
      postsToShow
    },
    revalidate: 1
  }
}
const Page = ({ postsToShow, page, totalPages }) => {
  return (
    <Container>
      {postsToShow &&
        postsToShow.map(post => <BlogPost key={post.id} post={post} />)}
      <Pagination page={page} totalPages={totalPages} />
    </Container>
  )
}

export async function getStaticPaths () {
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.status === 'Published' && post.type === 'Post'
  )
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / BLOG.postsPerPage)
  return {
    // remove first page, we 're not gonna handle that.
    paths: Array.from({ length: totalPages - 1 }, (_, i) => ({
      params: { page: '' + (i + 2) }
    })),
    fallback: true
  }
}

export default Page
