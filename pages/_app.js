import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import '@/styles/globals.css'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'

const Ackee = dynamic(() => import('@/lib/ackee'), { ssr: false })

function MyApp ({ Component, pageProps }) {
  return (
    <>
      {BLOG.analytics &&
        BLOG.analytics === 'ackee' && (
          <Ackee
            ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
            ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
          />
      )}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
