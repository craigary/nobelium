import Heading from '@/components/Headings'
import { generatePaginationParams, getAvailablePosts } from '@/lib/notion/get-available-posts'
import { getDatabaseDescription } from '@/lib/notion/get-database-description'
import config from '@/nobelium.config'
import { redirect } from 'next/navigation'

export const generateStaticParams = async () => {
  if (config.blogListPage.showPagination) {
    return await generatePaginationParams(config.blogListPage.pageSize)
  }
  return []
}

const BlogListPage = async ({ params }) => {
  const page = params?.page?.[0]
  // If the tag list page is not paginated, or page num is 1,  redirect to the tag list page
  if ((!config.blogListPage.showPagination && page) || page === '1') {
    redirect('/blog')
  }

  const posts = await getAvailablePosts()
  let postsToShow = []
  if (config.blogListPage.showPagination) {
    const currentPage = page || 1
    const start = (currentPage - 1) * config.blogListPage.pageSize
    const end = start + config.blogListPage.pageSize
    postsToShow = posts.slice(start, end)
  } else {
    postsToShow = posts
  }

  const description = await getDatabaseDescription()

  return (
    <div>
      <Heading title="Blog">{description} </Heading>
      <ul>
        {postsToShow.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default BlogListPage
