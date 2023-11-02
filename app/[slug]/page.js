import Content from '@/components/Content'
import { generateAllParams } from '@/lib/notion/get-all-pages'
import { getBlogDetails } from '@/lib/notion/get-blog-details'

export const generateStaticParams = async () => {
  return await generateAllParams()
}

const DetailsPage = async ({ params }) => {
  const { slug } = params
  const slugName = slug?.toLowerCase()
  const blockMap = await getBlogDetails(slugName)

  return (
    <>
      <Content block={blockMap} />
    </>
  )
}

export default DetailsPage
