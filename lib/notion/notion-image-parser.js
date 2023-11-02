export const notionImageUrlParser = (url, id) => {
  const spaceId = process.env.NOTION_WORKSPACE_ID

  if (!url) {
    return null
  }

  if (url.startsWith('data:')) {
    return { url, type: 'data' }
  }

  const imgSrc = new URL(url)

  // more recent versions of notion don't proxy unsplash images
  if (imgSrc.hostname.includes('images.unsplash.com')) {
    imgSrc.searchParams.set('w', 100)
    imgSrc.searchParams.set('q', 50)
    imgSrc.searchParams.delete('fm')
    imgSrc.searchParams.delete('crop')
    imgSrc.searchParams.delete('cs')
    imgSrc.searchParams.set('auto', 'format')
    return { url: imgSrc.toString(), type: 'unsplash' }
  }

  if (
    imgSrc.pathname.startsWith('/secure.notion-static.com') ||
    imgSrc.hostname.endsWith('.amazonaws.com')
  ) {
    const cleanUrl = imgSrc.origin + imgSrc.pathname

    const newUrl = `https://www.notion.so/image/${encodeURIComponent(
      cleanUrl
    )}?table=block&id=${id}&spaceId=${spaceId}&width=200`

    return { url: newUrl, type: 'notion' }
  }

  try {
    // Only optimize images on https / http protocol, and no additional port
    if (
      (imgSrc.protocol !== 'http:' && imgSrc.protocol !== 'https:') ||
      !!imgSrc.port
    ) {
      return { url, type: 'external-unoptimized' }
    } else {
      // Use i0.wp.com to optimize images

      imgSrc.searchParams.set('w', '200')
      const originalPathAndQuery =
        imgSrc.hostname + imgSrc.pathname + imgSrc.search
      const newUrl = 'https://i0.wp.com/' + originalPathAndQuery
      return { url: newUrl, type: 'external-optimized' }
    }
  } catch (error) {
    // ignore invalid urls
    return { url: null, type: 'error' }
  }
}
