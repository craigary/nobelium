export const pocketCastsLoaderImageLoader = ({ src, width, quality }) => {
  let targetSize = 200
  targetSize = width > 480 ? 960 : width > 200 ? 480 : targetSize
  const modifiedAddress = src.replace(/webp\/\d+/, 'webp/' + targetSize)

  return modifiedAddress
}
