import 'gitalk/dist/gitalk.css'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cn from 'classnames'
import { fetchCusdisLang } from '@/lib/cusdisLang'
import { useConfig } from '@/lib/config'
import Giscus from '@giscus/react';

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

const Comments = ({ frontMatter }) => {
  const router = useRouter()
  const BLOG = useConfig()

  const fullWidth = frontMatter.fullWidth ?? false

  return (
    <div
      className={cn(
        'px-4 font-medium text-gray-500 dark:text-gray-400 my-5',
        fullWidth ? 'md:px-24' : 'mx-auto max-w-2xl',
      )}
    >
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
      {BLOG.comment && BLOG.comment.provider === 'giscus' && (
        <Giscus
          id="comments"
          repo={BLOG.comment.giscusConfig.repo} 
          repoId={BLOG.comment.giscusConfig.repoId}
          category={BLOG.comment.giscusConfig.category}
          categoryId={BLOG.comment.giscusConfig.categoryId}
          mapping={BLOG.comment.giscusConfig.mapping}
          term="Welcome to @giscus/react component!"
          reactionsEnabled={BLOG.comment.giscusConfig.reactionsEnabled}
          emitMetadata="0"
          inputPosition={BLOG.comment.giscusConfig.inputPosition}
          theme={BLOG.comment.giscusConfig.theme}
          lang={BLOG.comment.giscusConfig.lang}
          loading={BLOG.comment.giscusConfig.loading}
        />
      )}
      {BLOG.comment && BLOG.comment.provider === 'cusdis' && (
        <CusdisComponent
          lang={fetchCusdisLang(BLOG.lang)}
          attrs={{
            host: BLOG.comment.cusdisConfig.host,
            appId: BLOG.comment.cusdisConfig.appId,
            pageId: frontMatter.id,
            pageTitle: frontMatter.title,
            pageUrl: BLOG.link + router.asPath,
            theme: BLOG.appearance
          }}
        />
      )}
    </div>
  )
}

export default Comments
