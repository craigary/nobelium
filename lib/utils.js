export const getBase64Image = async url => {
  console.log(url)
  const response = await fetch(url)
  const buffer = await response.buffer()
  const base64Data = buffer.toString('base64')
  return base64Data
}
