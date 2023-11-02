export const unsplashImageLoader = ({ src, width, quality }) => {
  const url = new URL(src)
  url.searchParams.set('w', width)
  url.searchParams.set('q', quality || 75)
  url.searchParams.delete('fm')
  url.searchParams.delete('crop')
  url.searchParams.delete('cs')
  url.searchParams.set('auto', 'format')
  return url.toString()
}
