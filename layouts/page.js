import Container from '@/components/Container'
import { useRouter } from 'next/router'
import { NotionRenderer } from 'react-notion'
import { useLocale } from '@/lib/locale'

const PageLayout = ({ children, blockMap, frontMatter, showAbout }) => {
  const locale = useLocale()
  const router = useRouter()
  return (
    <Container
      layout="about"
      title={frontMatter.title}
      description={frontMatter.summary}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article>
        <h1 className="font-sans font-bold text-3xl text-black dark:text-white">{frontMatter.title}</h1>
        {children}
        <div className="text-gray-700 dark:text-white">
        {!showAbout && (
          <main className="notion">
            <p className="notion-text">Keep playing them songs, keep singing along</p>
            <p className="notion-text">Keep leaning it on in closer</p>
            <p className="notion-text">
              Keep salting the rim, getting even with her and with him before
              the night is over
            </p>
            <p className="notion-text">That first kiss was like a Colorado hit</p>
            <p className="notion-text">We better keep on keeping it lit</p>
            <p className="notion-text">&apos;Til we can&apos;t remember, can&apos;t remember</p>
            <p className="notion-text">What we came here to forget</p>
            <p className="notion-text">Came here to forget - Blake Shelton</p>
          </main>
        )}
        {showAbout && blockMap && <NotionRenderer blockMap={blockMap} />}
        </div>
      </article>
      <div className="flex justify-between font-medium text-black dark:text-gray-100">
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
    </Container>
  )
}

export default PageLayout
