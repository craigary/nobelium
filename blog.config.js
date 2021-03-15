const BLOG = {
  title: 'CRAIGARY',
  description: 'This gonna be an awesome website.',
  author: 'Craig Hart',
  email: 'i@craigary.net',
  link: 'https://craigary.net',
  lang: 'zh-CN',
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/craigaryhart',
  notionApiEndPoint: process.env.NOTION_API_ENDPOINT,
  notionPageId: process.env.NOTION_PAGE_ID
}

export default BLOG
