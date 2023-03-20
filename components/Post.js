import PropTypes from 'prop-types'
import Image from 'next/image'
import BLOG from '@/blog.config'
import useTheme from '@/lib/theme'
import { BlockMapProvider } from '@/lib/blockMap'
import formatDate from '@/lib/formatDate'
import TagItem from '@/components/TagItem'
import NotionRenderer from '@/components/NotionRenderer'
import TableOfContents from '@/components/TableOfContents'

/**
 * A post renderer
 *
 * @param {PostProps} props
 *
 * @typedef {object} PostProps
 * @prop {object} post      - Post metadata
 * @prop {object} blockMap  - Post block data
 * @prop {string} emailHash - Author email hash (for Gravatar)
 */
export default function Post (props) {
  const { post, blockMap, emailHash } = props
  const { dark } = useTheme()

  return (
    <BlockMapProvider blockMap={blockMap}>
      <article>
        <h1 className="font-bold text-3xl text-black dark:text-white">
          {post.title}
        </h1>
        {post.type[0] !== 'Page' && (
          <nav className="flex mt-7 items-start text-gray-500 dark:text-gray-400">
            <div className="flex mb-4">
              <a href={BLOG.socialLink || '#'} className="flex">
                <Image
                  alt={BLOG.author}
                  width={24}
                  height={24}
                  src={`https://gravatar.com/avatar/${emailHash}`}
                  className="rounded-full"
                />
                <p className="ml-2 md:block">{BLOG.author}</p>
              </a>
              <span className="block">&nbsp;/&nbsp;</span>
            </div>
            <div className="mr-2 mb-4 md:ml-0">
              {formatDate(post.date?.start_date || post.createdTime, BLOG.lang)}
            </div>
            {post.tags && (
              <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                {post.tags.map(tag => (
                  <TagItem key={tag} tag={tag}/>
                ))}
              </div>
            )}
          </nav>
        )}
        <div className="-mt-4 relative">
          <NotionRenderer
            recordMap={blockMap}
            fullPage={false}
            darkMode={dark}
          />
          <div className="absolute left-full inset-y-0">
            {/* `65px` is the height of expanded nav */}
            {/* TODO: Remove the magic number */}
            <TableOfContents className="sticky" style={{ top: '65px' }}/>
          </div>
        </div>
      </article>
    </BlockMapProvider>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  emailHash: PropTypes.string.isRequired
}
