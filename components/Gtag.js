import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useConfig } from '@/lib/config'
import * as gtag from '@/lib/gtag'

const Gtag = () => {
  const config = useConfig()
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(config.analytics.gaConfig.measurementId, url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [config, router.events])
  return null
}
export default Gtag
