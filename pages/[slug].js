import { useRouter } from 'next/router'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import { useLocale } from '@/lib/locale'
import BLOG from '@/blog.config'
import { createHash } from 'crypto'
import Page404 from '@/components/Page404'
import Container from '@/components/Container'
import Post from '@/components/Post'
import Comments from '@/components/Comments'

const BlogPost = ({ post, blockMap, emailHash }) => {
  const router = useRouter()
  const locale = useLocale()

  // TODO: It would be better to render something
  if (router.isFallback) return null

  // If no post data found, render 404
  if (!post) return Page404({ locale })

  return (
    <Container
      layout="blog"
      title={post.title}
      description={post.summary}
      slug={post.slug}
      // date={new Date(post.publishedAt).toISOString()}
      type="article"
      fullWidth={post.fullWidth ?? false}
    >
      <Post
        post={post}
        blockMap={blockMap}
        emailHash={emailHash}
      />

      {/* Back and Top */}
      <div className="flex justify-between font-medium text-gray-500 dark:text-gray-400 my-5">
        <a>
          <button
            onClick={() => router.push(BLOG.path || '/')}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ← {locale.POST.BACK}
          </button>
        </a>
        <a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-2 cursor-pointer hover:text-black dark:hover:text-gray-100"
          >
            ↑ {locale.POST.TOP}
          </button>
        </a>
      </div>

      <Comments frontMatter={post} />
    </Container>
  )
}

export async function getStaticPaths () {
  const posts = await getAllPosts({ includePages: true })
  return {
    paths: posts.map(row => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const posts = await getAllPosts({ includePages: true })
  const post = posts.find(t => t.slug === slug)

  if (!post) return { props: {} }

  const blockMap = await getPostBlocks(post.id)
  const emailHash = createHash('md5')
    .update(BLOG.email)
    .digest('hex')
    .trim()
    .toLowerCase()

  return {
    props: { post, blockMap, emailHash },
    revalidate: 1
  }
}

export default BlogPost
