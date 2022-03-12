const BLOG = {
  title: 'BIE哔哔',
  author: 'BIE哔哔',
  email: 'besthop3@gmail.com',
  link: 'https://bietalk.com',
  description: 'M的不完全指北',
  lang: 'zh-CN',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://t.me/bieb13',
  seo: {
    keywords: ['Blog', 'notion', '别bb','bieb13','bie哔哔','BIE哔哔'],
    googleSiteVerification: 'PD5goUx8q7i025ABYsr6b0I3mer21fXRkbFF_Ov7djw' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-CSDC2478HW' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
   provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'git', // The repository of store comments
      owner: 'bieb13',
      admin: 'bieb13',
      clientID: 'fd4221176b3388f09f03',
      clientSecret: 'b47972efd5b2bf64a8d618ad5d355f495088a4de',
      distractionFreeMode: 'false'
    }
  }
}
// export default BLOG
module.exports = BLOG
