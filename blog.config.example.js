module.exports = {
  /* Site info */

  // Site title
  title: 'CRAIGARY',
  // Site description, will be displayed next to the site title
  description: 'This gonna be an awesome website.',
  // Site URL
  link: 'https://nobelium.vercel.app',
  // Site creation year, will use the current year if unset
  since: 2021,
  // Author name
  author: 'Craig Hart',
  // Author email, will determine the avatar returned by Gravatar
  email: 'i@craigary.net',
  // Author’s social account link, will become the link address of the author’s avatar
  socialLink: 'https://twitter.com/craigaryhart',

  /* Site preferences */

  // Site language, can be one of these:
  //   'en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES'
  lang: 'en-US',
  // Site time zone, will determine the time zone of article time (using IANA identifier format)
  // See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options
  timezone: 'Asia/Shanghai',
  // Site appearance, can be one of these:
  //   'light', 'dark', 'auto'
  appearance: 'auto',
  // Site font, can be one of these:
  //   'sans-serif', 'serif'
  font: 'sans-serif',
  // Light mode background color in #RRGGBB form
  lightBackground: '#ffffff',
  // Dark mode background color in #RRGGBB form
  darkBackground: '#18181B',
  // Number of articles per page in article list
  postsPerPage: 7,
  // Whether to sort posts by date
  sortByDate: false,
  // Whether to display “About” link
  showAbout: true,
  // Always use a collapsed navigation bar
  autoCollapsedNavBar: false,

  /* Technical config */

  // Site root path. If you want to mount the site under a certain path of another site, you need to fill in this item.
  path: '',
  // OG image generation service address (don’t add a slash at the end)
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app',
  // SEO configuration
  seo: {
    // Site keywords
    keywords: ['Blog', 'Website', 'Notion'],
    // Google site verification code
    googleSiteVerification: ''
  },

  /* Analytics config */

  // Traffic statistics tool configuration
  analytics: {
    // Traffic statistics tool, can be one of these: (leave it empty to disable)
    //   'ga', 'ackee'
    provider: '',
    // Ackee configuration
    ackeeConfig: {
      // Tracker address (e.g. 'https://ackee.craigary.net/tracker.js')
      tracker: '',
      // Tracking server address (e.g. 'https://ackee.craigary.net', don’t add a slash at the end)
      dataAckeeServer: '',
      // e.g. '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
      domainId: ''
    },
    // Google Analytics configuration
    gaConfig: {
      // G-Tag (e.g. G-XXXXXXXXXX)
      measurementId: ''
    }
  },

  /* Comment config */

  // Comment tool configuration
  comment: {
    // Comment tool, can be one of these: (leave it empty to disable)
    //   'gitalk', 'utterances', 'cusdis'
    provider: '',
    // Gitalk configuration
    gitalkConfig: {
      // Repository name
      repo: '',
      // Repository owner
      owner: '',
      // Administrator
      admin: [],
      clientID: '',
      clientSecret: '',
      // Whether to enable distraction-free mode
      distractionFreeMode: false
    },
    // Utterances configuration
    utterancesConfig: {
      // Repository name
      repo: ''
    },
    // Cusdis configuration
    cusdisConfig: {
      appId: '',
      // Service address, only need to modify when using self-hosted service
      host: 'https://cusdis.com',
      // Script address, only need to modify when using self-hosted service
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js'
    }
  }
}
