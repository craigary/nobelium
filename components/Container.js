import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BLOG from '@/blog.config'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Container = ({ children, layout, fullWidth, ...customMeta }) => {
  const meta = {
    title: BLOG.title,
    type: 'website',
    ...customMeta
  }
  return (
    <div>
      <Head>
        {/* Add more Meta Info */}
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name="keywords" content={BLOG.seo.keywords.join(', ')} />
        )}
        <meta name="description" content={meta.description} />

        <meta property="og:title" content={meta.title} />
        <meta property="og:type" content={layout || 'Blog'} />
        <meta
          property="og:image"
          content={`https://og-image-craigary.vercel.app/${meta.title}.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fnobelium.vercel.app%2Flogo-for-dark-bg.svg`}
        />
      </Head>
      <div className="wrapper">
        <Header navBarTitle={layout === 'blog' ? meta.title : null} fullWidth={fullWidth}/>
        <main className={`m-auto font-sans flex-grow w-full transition-all ${!fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'}` }>
          {children}
        </main>
        <Footer fullWidth={fullWidth} />
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
