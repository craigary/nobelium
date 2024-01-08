import { createContext, useContext } from 'react'

const BlockMapContext = createContext({})
export function BlockMapProvider ({ blockMap, children }) {
  const collectionId = Object.keys(blockMap.collection)[0]
  const pageId =
    Object.values(blockMap.block)
      .find(block => block.value.type === 'page' && block.value.parent_id === collectionId)
      .value.id

  const blockMapAltered = {
    ...blockMap,
    pageId,
  }

  return (
    <BlockMapContext.Provider value={blockMapAltered}>
      {children}
    </BlockMapContext.Provider>
  )
}

export default function useBlockMap () {
  return useContext(BlockMapContext)
}
