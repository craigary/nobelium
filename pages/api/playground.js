const { NotionAPI } = require('notion-client')
const getDatabase = async id => {
  const api = new NotionAPI()
  const page = await api.getPage(id)
  const collectionId = '30f6e6d5-a3ca-4693-9c65-cfed7d415530'
  const collectionViewId = '6f4262c5-6949-4be3-bf21-1168b9789081'
  // const collectionQuery = page.collection_query
  const res = await api.getCollectionData(collectionId, collectionViewId)

  return res
}

getDatabase('68be9021bca34b8e89f0246f27e608df').then(res => console.log(res))
