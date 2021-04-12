import DefaultLayout from '@/layouts/default'
import FullWidthLayout from '@/layouts/fullwidth'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

const BlogPost = ({ post, blockMap }) => {
  if (!post) return null
  return (
    <>
      <style jsx>{`
        :global(.notion) {
          @apply text-gray-600 dark:text-gray-300;
          overflow-wrap: break-word;
        }
        :global(.notion),
        :global(.notion-text),
        :global(.notion-quote),
        :global(.notion-h-title) {
          @apply leading-8;
          @apply font-sans;
          @apply p-0;
          @apply my-3;
        }
        :global(.notion-page-link) {
          color: inherit;
        }

        :global(svg.notion-page-icon) {
          @apply hidden;
        }

        :global(svg + .notion-page-title-text) {
          @apply border-b-0;
        }

        :global(.notion-bookmark) {
          @apply border-2;
          @apply border-gray-100;
          color: inherit;
        }
        :global(.notion-code > code) {
          color: unset;
        }

        :global(pre[class*='language-']) {
          line-height: inherit;
        }

        :global(.notion-bookmark:hover) {
          @apply border-blue-400;
        }
        :global(.notion-viewport) {
          z-index: -10;
        }
        :global(.notion-asset-caption) {
          @apply text-center;
        }
        :global(.notion-full-width) {
          @apply px-0;
        }
        :global(.notion-page) {
          @apply w-auto;
          @apply px-0;
        }
        :global(.notion-quote) {
          padding: 0.2em 0.9em;
        }
        :global(.notion-collection-row) {
          @apply hidden;
        }
      `}</style>
      {post.fullWidth ? (
        <FullWidthLayout
          blockMap={blockMap}
          frontMatter={post}
        ></FullWidthLayout>
      ) : (
        <DefaultLayout blockMap={blockMap} frontMatter={post}></DefaultLayout>
      )}
    </>
  )
}

export async function getStaticPaths() {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.status === 'Published')
  return {
    paths: posts.map(row => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps({ params: { slug } }) {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.status === 'Published')
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  return {
    props: { post, blockMap },
    revalidate: 1
  }
}

export default BlogPost
