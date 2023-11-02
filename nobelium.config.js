const config = {
  title: 'Nobelium Test',
  author: 'Craig Hart',
  email: 'i@craigary.net',
  link: 'https://nobelium.vercel.app',
  description: 'This gonna be an awesome website.',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  blogListPage: {
    showPagination: true,
    showDescription: true,
    pageSize: 7
  },

  tagListPage: {
    showPagination: true,
    showDescription: true,
    pageSize: 7
  },

  homePage: '031055d41da74f11996d92f491a21f7a',

  images: {
    useWordpressCDN: true,
    useBlurredPlaceholder: false // You Must Specify UPSTASH_REDIS_REST_TOKEN and UPSTASH_REDIS_REST_URL in Environment variables
  },

  socialLinks: [
    {
      title: 'Twitter',
      link: 'https://twitter.com/xxxx'
    },
    {
      title: 'GitHub',
      link: 'https://github.com/xxxx'
    },
    {
      title: 'Email',
      link: 'foo@bar.baz'
    },
    {
      title: 'Weibo',
      link: 'https://weibo.com/xxxx'
    },
    {
      title: 'Threads',
      link: 'https://twitter.com/xxxx'
    },
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/xxxx'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/xxxx'
    }
  ],

  notionPageId: process.env.NOTION_PAGE_ID
}
export default config
