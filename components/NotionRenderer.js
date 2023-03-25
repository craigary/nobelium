import dynamic from 'next/dynamic'
import { NotionRenderer as Renderer } from 'react-notion-x'

// Lazy-load some heavy components
const components = {
  // Code block
  Code: dynamic(() => {
    return import('react-notion-x/build/third-party/code').then(async module => {
      // Additional prismjs syntax
      await Promise.all([
        import('prismjs/components/prism-markup-templating'),
        import('prismjs/components/prism-markup'),
        import('prismjs/components/prism-bash'),
        import('prismjs/components/prism-c'),
        import('prismjs/components/prism-cpp'),
        import('prismjs/components/prism-csharp'),
        import('prismjs/components/prism-docker'),
        import('prismjs/components/prism-java'),
        import('prismjs/components/prism-js-templates'),
        import('prismjs/components/prism-coffeescript'),
        import('prismjs/components/prism-diff'),
        import('prismjs/components/prism-git'),
        import('prismjs/components/prism-go'),
        import('prismjs/components/prism-graphql'),
        import('prismjs/components/prism-handlebars'),
        import('prismjs/components/prism-less'),
        import('prismjs/components/prism-makefile'),
        import('prismjs/components/prism-markdown'),
        import('prismjs/components/prism-objectivec'),
        import('prismjs/components/prism-ocaml'),
        import('prismjs/components/prism-python'),
        import('prismjs/components/prism-reason'),
        import('prismjs/components/prism-rust'),
        import('prismjs/components/prism-sass'),
        import('prismjs/components/prism-scss'),
        import('prismjs/components/prism-solidity'),
        import('prismjs/components/prism-sql'),
        import('prismjs/components/prism-stylus'),
        import('prismjs/components/prism-swift'),
        import('prismjs/components/prism-wasm'),
        import('prismjs/components/prism-yaml')
      ])
      return module.Code
    })
  }),
  // Database block
  Collection: dynamic(() => {
    return import('react-notion-x/build/third-party/collection').then(module => module.Collection)
  }),
  // Equation block & inline variant
  Equation: dynamic(() => {
    return import('react-notion-x/build/third-party/equation').then(module => module.Equation)
  }),
  // PDF (Embed block)
  Pdf: dynamic(() => {
    return import('react-notion-x/build/third-party/pdf').then(module => module.Pdf)
  }, { ssr: false }),
  // Tweet block
  Tweet: dynamic(() => {
    return import('react-tweet-embed').then(module => {
      const { default: TweetEmbed } = module
      return function Tweet ({ id }) {
        return <TweetEmbed tweetId={id} options={{ theme: 'dark' }} />
      }
    })
  })
}

const mapPageUrl = id => `https://www.notion.so/${id.replace(/-/g, '')}`

/**
 * Notion page renderer
 *
 * A wrapper of react-notion-x/NotionRenderer with predefined `components` and `mapPageUrl`
 *
 * @param props - Anything that react-notion-x/NotionRenderer supports
 */
export default function NotionRenderer (props) {
  return (
    <Renderer
      components={components}
      mapPageUrl={mapPageUrl}
      {...props}
    />
  )
}
