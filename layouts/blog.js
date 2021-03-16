import Image from 'next/image'
import Container from '@/components/Container'
import { useRouter } from 'next/router'
import { NotionRenderer } from 'react-notion'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogLayout = ({ children, blockMap, frontMatter }) => {
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
            <div className="tag flex ml-2">
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
          ← Back
        </p>
        <p
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2"
        >
          ↑ Top
        </p>
      </div>
    </Container>
  )
}

export default BlogLayout
