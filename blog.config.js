const BLOG = {
  title: 'Aiiibolo-Blog',
  author: 'Aiiibolo',
  email: 'Aiiiboluo@gmail.com',
  link: 'https://www.aiiibolo.tech',
  description: 'This gonna be an awesome website.',
  lang: 'en-US',
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  showAbout: true, // WIP
  showArchive: true, // WIP
  autoCollapsedNavBar: false, // the automatically collapsed navigation bar
  socialLink: 'https://t.me/Aiiibolo',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '6db53f58-b165-47be-9238-c2d7498280c8', // data-app-id
      host: 'https://cusdis-mqj6kknd1-aiiibolo.vercel.app', // data-host, change this if you're using self-hosted version
      //https://cusdis-mqj6kknd1-aiiibolo.vercel.app
      //https://cusdis.com
      scriptSrc: 'https://cusdis-mqj6kknd1-aiiibolo.vercel.app/js/cusdis.es.js' // change this if you're using self-hosted version
      //https://cusdis-mqj6kknd1-aiiibolo.vercel.app/js/cusdis.es.js
      //https://cusdis.com/js/cusdis.es.js
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
