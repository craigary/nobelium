import { getAvailablePostsByTag } from '@/lib/notion/get-available-posts'
import { generateTagParams } from '@/lib/notion/get-available-tags'
import config from '@/nobelium.config'
import { redirect } from 'next/navigation'

export const generateStaticParams = async () => {
  return await generateTagParams(config.tagListPage.pageSize)
}

const page = async ({ params }) => {
  const { tag } = params
  const tagName = tag?.[0]?.toLowerCase()
  const page = tag?.[1]

  if (!tagName) {
    redirect('/')
  }
  // If the tag list page is not paginated, or page num is 1,  redirect to the tag list page
  if ((!config.tagListPage.showPagination && page) || page === '1') {
    redirect(`/tag/${tagName}`)
  }

  const posts = await getAvailablePostsByTag(tagName)
  let postsToShow = []
  if (config.tagListPage.showPagination) {
    const currentPage = page || 1
    const start = (currentPage - 1) * config.tagListPage.pageSize
    const end = start + config.tagListPage.pageSize
    postsToShow = posts.slice(start, end)
  } else {
    postsToShow = posts
  }

  return (
    <div>
      <ul>
        {postsToShow.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default page
