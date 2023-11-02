export const wordpressImageLoader = ({ src, width, quality }) => {
  const url = new URL(src)
  url.searchParams.set('w', width)
  url.searchParams.set('q', quality || 75)
  return url.toString()
}
