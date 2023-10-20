import { ReactNode, createElement as h } from 'react'
import dynamic from 'next/dynamic'
import { MapImageUrlFn, NotionComponents, NotionRenderer as Renderer, SearchNotionFn } from 'react-notion-x'
import { getTextContent } from 'notion-utils'
import { FONTS_SANS, FONTS_SERIF } from '@/consts'
import { useConfig } from '@/lib/config'
import Toggle from '@/components/notion-blocks/Toggle'
import getPrismBlocks from '@/components/notion-blocks/getPrismBlocks'
import type { ExtendedRecordMap, CodeBlock, Block } from 'notion-types'

// Lazy-load some heavy components & override the renderers of some block types
const components = {
  /* Lazy-load */

  // Code block
  Code: dynamic(async () => {
    return function CodeSwitch (props: { block: CodeBlock }) {
      switch (getTextContent(props.block.properties.language)) {
        case 'Mermaid':
          return h(
            dynamic(() => {
              return import('@/components/notion-blocks/Mermaid').then(module => module.default)
            }, { ssr: false }),
            props
          )
        default:
          return h(
            dynamic(() => {
              return import('react-notion-x/build/third-party/code').then(async module => {
                await Promise.all(getPrismBlocks())
                return module.Code
              })
            }),
            props
          )
      }
    }
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
      return function Tweet ({ id }: { id: string }) {
        return <TweetEmbed tweetId={id} options={{ theme: 'dark' }} />
      }
    })
  }),

  /* Overrides */

  toggle_nobelium: ({ block, children }: { block: Block; children: ReactNode }) => (
    <Toggle block={block}>{children}</Toggle>
  )
} as Partial<NotionComponents>

const mapPageUrl = (id: string) => `https://www.notion.so/${id.replace(/-/g, '')}`

type NotionRendererProps = {
  recordMap: ExtendedRecordMap;
  mapImageUrl?: MapImageUrlFn;
  searchNotion?: SearchNotionFn;
  isShowingSearch?: boolean;
  onHideSearch?: () => void;
  rootPageId?: string;
  rootDomain?: string;
  fullPage?: boolean;
  darkMode?: boolean;
  previewImages?: boolean;
  forceCustomImages?: boolean;
  showCollectionViewDropdown?: boolean;
  linkTableTitleProperties?: boolean;
  isLinkCollectionToUrlProperty?: boolean;
  isImageZoomable?: boolean;
  showTableOfContents?: boolean;
  minTableOfContentsItems?: number;
  defaultPageIcon?: string;
  defaultPageCover?: string;
  defaultPageCoverPosition?: number;
  className?: string;
  bodyClassName?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  pageHeader?: React.ReactNode;
  pageFooter?: React.ReactNode;
  pageTitle?: React.ReactNode;
  pageAside?: React.ReactNode;
  pageCover?: React.ReactNode;
  blockId?: string;
  hideBlockId?: boolean;
  disableHeader?: boolean;
}

/**
 * Notion page renderer
 *
 * A wrapper of react-notion-x/NotionRenderer with predefined `components` and `mapPageUrl`
 *
 * @param props - Anything that react-notion-x/NotionRenderer supports
 */
export default function NotionRenderer (props: NotionRendererProps) {
  const config = useConfig()

  const font = {
    'sans-serif': FONTS_SANS,
    'serif': FONTS_SERIF
  }[config.font]

  // Mark block types to be custom rendered by appending a suffix
  if (props.recordMap) {
    for (const { value: block } of Object.values(props.recordMap.block)) {
      switch (block?.type) {
        case 'toggle':
          block.type += '_nobelium'
          break
      }
    }
  }

  return (
    <>
      <style jsx global>
        {`
        .notion {
          --notion-font: ${font};
        }
        `}
      </style>
      <Renderer
        components={components}
        mapPageUrl={mapPageUrl}
        {...props}
      />
    </>
  )
}
