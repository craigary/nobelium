import { idToUuid } from 'notion-utils'
export default function getAllPageIds (collectionQuery, viewId) {
  const views = Object.values(collectionQuery)[0]
  let pageIds = []
  if (viewId) {
    const vId = idToUuid(viewId)
    pageIds = views[vId]?.blockIds
  } else {
    const pageSet = new Set()
    Object.values(views).forEach(view => {
      view?.blockIds?.forEach(id => pageSet.add(id))
    })
    pageIds = [...pageSet]
  }
  return pageIds
}
