import '@/styles/notion.css'
import 'prismjs/themes/prism.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import { LocaleProvider } from '@/lib/locale'

const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

function MyApp({ Component, pageProps }) {
  return (
    <LocaleProvider>
      <>
        {BLOG.analytics && BLOG.analytics === 'ackee' && (
          <Ackee
            ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
            ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
          />
        )}
        {BLOG.analytics && BLOG.analytics === 'ga' && <Gtag />}
        <Component {...pageProps} />
      </>
    </LocaleProvider>
  )
}

export default MyApp
