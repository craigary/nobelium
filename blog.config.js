const BLOG = {
  title: 'CRAIGARY',
  author: 'Craig Hart',
  email: 'i@craigary.net',
  link: 'https://nobelium.vercel.app',
  description: 'This gonna be an awesome website.',
  lang: 'en-US',
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/craigaryhart',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID,
  comment: { // support provider: gitalk
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    }
  }
}

export default BLOG
