export const notionImageLoader = ({ src, width, quality }) => {
  const url = new URL(src)
  url.searchParams.set('width', width)
  return url.toString()
}
