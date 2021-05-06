import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container'
import { useRouter } from 'next/router'
import { NotionRenderer, Equation, Code, CollectionRow } from 'react-notion-x'
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
const UtterancesComponent = dynamic(
  () => {
    return import('@/components/Utterances')
  },
  { ssr: false }
)
const CusdisComponent = dynamic(
  () => {
    return import('react-cusdis').then(m => m.ReactCusdis)
  },
  { ssr: false }
)

const mapPageUrl = id => {
  return 'https://www.notion.so/' + id.replace(/-/g, '')
}

const DefaultLayout = ({ children, blockMap, frontMatter }) => {
  const locale = useLocale()
  const router = useRouter()
  const cusdisI18n = ['zh-cn', 'es', 'tr', 'pt-BR', 'oc']
  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {frontMatter.title}
        </h1>
        {frontMatter.type[0] !== 'Page' && (
          <nav className="flex mt-7 mb-2 items-center text-gray-500 dark:text-gray-400">
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
            <div className="mx-2 md:ml-0">
              {formatDate(
                frontMatter?.date?.start_date || frontMatter.createdTime,
                BLOG.lang
              )}
            </div>
            {frontMatter.tags && (
              <div className="flex flex-wrap">
                {frontMatter.tags.map(tag => (
                  <Link key={tag} href={`/tag/${encodeURIComponent(tag)}`}>
                    <a>
                      <p
                        className="mr-1"
                      >
                        #{tag}
                      </p>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </nav>
        )}
        {children}
        {blockMap && (
          <div className="">
            <NotionRenderer
              recordMap={blockMap}
              components={{
                equation: Equation,
                code: Code,
                collectionRow: CollectionRow
              }}
              mapPageUrl={mapPageUrl}
            />
          </div>
        )}
      </article>
      <div className="flex justify-between font-medium text-black dark:text-gray-100">
        <button
          onClick={() => router.push(BLOG.path || '/')}
          className="mt-2 cursor-pointer"
        >
          ← {locale.POST.BACK}
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-2 cursor-pointer"
        >
          ↑ {locale.POST.TOP}
        </button>
      </div>
      {BLOG.comment && BLOG.comment.provider === 'gitalk' && (
        <GitalkComponent
          options={{
            id: frontMatter.id,
            title: frontMatter.title,
            clientID: BLOG.comment.gitalkConfig.clientID,
            clientSecret: BLOG.comment.gitalkConfig.clientSecret,
            repo: BLOG.comment.gitalkConfig.repo,
            owner: BLOG.comment.gitalkConfig.owner,
            admin: BLOG.comment.gitalkConfig.admin,
            distractionFreeMode: BLOG.comment.gitalkConfig.distractionFreeMode
          }}
        />
      )}
      {BLOG.comment && BLOG.comment.provider === 'utterances' && (
        <UtterancesComponent issueTerm={frontMatter.id} />
      )}
      {BLOG.comment && BLOG.comment.provider === 'cusdis' && (
        <CusdisComponent
          attrs={{
            host: BLOG.comment.cusdisConfig.host,
            appId: BLOG.comment.cusdisConfig.appId,
            pageId: frontMatter.id,
            pageTitle: frontMatter.title,
            pageUrl: BLOG.link + router.asPath,
            theme: BLOG.appearance
          }}
          lang={cusdisI18n.find(
            i => i.toLowerCase() === BLOG.lang.toLowerCase()
          )}
        />
      )}
    </Container>
  )
}

export default DefaultLayout
