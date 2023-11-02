import Heading from '@/components/Headings'
import SearchBox from '@/components/SearchBox'
import TagChips from '@/components/notion/TagChips'
import { generateTagParams, getAvailableTags } from '@/lib/notion/get-available-tags'
import config from '@/nobelium.config'
import { redirect } from 'next/navigation'

export const generateStaticParams = async () => {
  return await generateTagParams(config.tagListPage.pageSize)
}

const page = async ({ params }) => {
  const { tag } = params
  const tagName = tag?.[0]
  const page = tag?.[1]

  // If the tag list page is not paginated, or page num is 1,  redirect to the tag list page
  if ((!config.tagListPage.showPagination && page) || page === '1') {
    redirect(`/search/${tagName}`)
  }

  // const posts = await getAvailablePostsByTag(tagName)
  let postsToShow = []
  // if (config.tagListPage.showPagination) {
  //   const currentPage = page || 1
  //   const start = (currentPage - 1) * config.tagListPage.pageSize
  //   const end = start + config.tagListPage.pageSize
  //   postsToShow = posts.slice(start, end)
  // } else {
  //   postsToShow = posts
  // }

  const tags = await getAvailableTags()

  return (
    <div>
      <Heading title={tagName ? '#' + tagName : 'Search'}>
        <div className="flex flex-col gap-4 items-center">
          <SearchBox />
          <TagChips tags={tags} />
        </div>
      </Heading>
      <ul>
        {postsToShow.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default page
