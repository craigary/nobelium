import { getPageTableOfContents } from 'notion-utils'
import cn from 'classnames'
import useBlockMap from '@/lib/blockMap'

export default function TableOfContents ({ className, style }) {
  const blockMap = useBlockMap()
  const pageBlock = blockMap.block[blockMap.pageId].value
  const nodes = getPageTableOfContents(pageBlock, blockMap)

  if (!nodes.length) return null

  /**
   * @param {string} id - The ID of target heading block (could be in UUID format)
   */
  function scrollTo (id) {
    id = id.replaceAll('-', '')
    const target = document.querySelector(`.notion-block-${id}`)
    if (!target) return
    // `65` is the height of expanded nav
    // TODO: Remove the magic number
    const top = document.documentElement.scrollTop + target.getBoundingClientRect().top - 65
    document.documentElement.scrollTo({
      top,
      behavior: 'smooth'
    })
  }

  return (
    <aside
      className={cn(
        className,
        'pl-4 text-sm text-zinc-700/70 dark:text-neutral-400 whitespace-nowrap'
      )}
      style={style}
    >
      {nodes.map(node => (
        <div key={node.id} className="leading-7">
          <a
            data-target-id={node.id}
            className="block hover:text-black dark:hover:text-white cursor-pointer transition duration-100"
            style={{ paddingLeft: (node.indentLevel * 24) + 'px' }}
            onClick={() => scrollTo(node.id)}
          >
            {node.text}
          </a>
        </div>
      ))}
    </aside>
  )
}
