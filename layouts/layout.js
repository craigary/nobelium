import Container from '@/components/Container'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'
import { useRouter } from 'next/router'
import Post from '@/components/Post'
import Comments from '@/components/Comments'

const Layout = ({
  blockMap,
  frontMatter,
  emailHash,
  fullWidth = false
}) => {
  const locale = useLocale()
  const router = useRouter()

  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.summary}
      slug={frontMatter.slug}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
      fullWidth={fullWidth}
    >
      <Post
        post={frontMatter}
        blockMap={blockMap}
        emailHash={emailHash}
      />
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
      <Comments frontMatter={frontMatter} />
    </Container>
  )
}

export default Layout
