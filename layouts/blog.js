import Image from 'next/image'
import Container from '@/components/Container'
import { useRouter } from 'next/router'
import { NotionRenderer } from 'react-notion'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import dynamic from 'next/dynamic'
import 'gitalk/dist/gitalk.css'
import { useLocale } from '@/lib/locale'

const GitalkComponent = dynamic(
  () => {
    return import('gitalk/dist/gitalk-component')
  },
  { ssr: false }
)

const BlogLayout = ({ children, blockMap, frontMatter }) => {
  const locale = useLocale()
  const router = useRouter()
  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article>
        <h1 className="font-sans font-bold text-3xl">{frontMatter.title}</h1>
        <nav className="flex mt-4 mb-2 items-center text-gray-600 font-medium">
          <div className="flex">
            <a href={BLOG.socialLink || '#'} className="flex">
              <Image
                alt={BLOG.author}
                width={24}
                height={24}
                src="/avatar.svg"
                className="rounded-full"
              />
              <p className="hidden md:ml-2 md:block">{BLOG.author}</p>
            </a>
            <span className="hidden md:inline">&nbsp;/&nbsp;</span>
          </div>
          <div className="ml-2 md:ml-0">
            {formatDate(frontMatter.date, BLOG.lang)}
          </div>
          {frontMatter.tags && (
            <div className="tag flex ml-2">&nbsp;
              {frontMatter.tags.map(tag => (
                <p
                  key={tag}
                  className="mr-1 cursor-pointer"
                  onClick={() => router.push(`/tag/${encodeURIComponent(tag)}`)}
                >
                  #{tag}
                </p>
              ))}
            </div>
          )}
        </nav>
        {children}
        {blockMap && <NotionRenderer blockMap={blockMap} />}
      </article>
      <div className="flex justify-between font-medium">
        <p onClick={() => router.back()} className="mt-2">
          ← {locale.POST.BACK}
        </p>
        <p
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2"
        >
          ↑ {locale.POST.TOP}
        </p>
      </div>
      {BLOG.comment && BLOG.comment.provider === 'gitalk' && (
        <GitalkComponent options={{
          id: frontMatter.id,
          title: frontMatter.title,
          clientID: BLOG.comment.gitalkConfig.clientID,
          clientSecret: BLOG.comment.gitalkConfig.clientSecret,
          repo: BLOG.comment.gitalkConfig.repo,
          owner: BLOG.comment.gitalkConfig.owner,
          admin: BLOG.comment.gitalkConfig.admin,
          distractionFreeMode: BLOG.comment.gitalkConfig.distractionFreeMode
        }} />
      )}
    </Container>
  )
}

export default BlogLayout
