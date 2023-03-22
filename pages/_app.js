import 'prismjs/themes/prism.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import config from '@/lib/config'
import dynamic from 'next/dynamic'
import { LocaleProvider } from '@/lib/locale'
import { ThemeProvider } from '@/lib/theme'
import Scripts from '@/components/Scripts'

const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

function MyApp ({ Component, pageProps }) {
  const BLOG = config()

  return (
    <>
      <Scripts />
      <LocaleProvider>
        <ThemeProvider>
          <>
            {BLOG.isProd && BLOG?.analytics?.provider === 'ackee' && (
              <Ackee
                ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
                ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
              />
            )}
            {BLOG.isProd && BLOG?.analytics?.provider === 'ga' && <Gtag />}
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </LocaleProvider>
    </>
  )
}

export default MyApp
