import Heading from '@/components/Headings'
import SearchBox from '@/components/SearchBox'
import TagChips from '@/components/notion/TagChips'
import { getAvailablePostsByTag } from '@/lib/notion/get-available-posts'
import { generateTagParams, getAvailableTags } from '@/lib/notion/get-available-tags'

export const generateStaticParams = async () => {
  return await generateTagParams()
}

const page = async ({ params, searchParams }) => {
  const { tag } = params
  const tagName = tag?.[0]

  const keywords = searchParams?.key ?? ''
  const posts = await getAvailablePostsByTag(tagName)
  let postsToShow = []

  // if (keywords) {
  //   postsToShow = posts.filter(post => post.title.toLowerCase().includes(keywords.toLowerCase()))
  // } else {
  postsToShow = posts
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
