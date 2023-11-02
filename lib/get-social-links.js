import config from '@/nobelium.config'
import { IconIcons, IconMail } from '@tabler/icons-react'

import {
  IconBrandCodepen,
  IconBrandCodesandbox,
  IconBrandDribbble,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandPocket,
  IconBrandReddit,
  IconBrandTelegram,
  IconBrandThreads,
  IconBrandWeibo,
  IconBrandX,
  IconBrandZhihu
} from '@tabler/icons-react'

const iconMap = {
  'weibo.com': IconBrandWeibo,
  'x.com': IconBrandX,
  'twitter.com': IconBrandX,
  'facebook.com': IconBrandFacebook,
  'instagram.com': IconBrandInstagram,
  'github.com': IconBrandGithub,
  'codepen.com': IconBrandCodepen,
  'codesandbox.com': IconBrandCodesandbox,
  'dribbble.com': IconBrandDribbble,
  'gitlab.com': IconBrandGitlab,
  'pinterest.com': IconBrandPinterest,
  'pocket.com': IconBrandPocket,
  'reddit.com': IconBrandReddit,
  't.me': IconBrandTelegram,
  'zhihu.com': IconBrandZhihu,
  'threads.net': IconBrandThreads
}

export const getSocialLinks = () => {
  const rawLinks = config.socialLinks
  return rawLinks.map(item => {
    let url = item.link
    try {
      url = new URL(item.link)

      const hostname = url.hostname
      const parts = hostname.split('.')
      const domain = parts.slice(-2).join('.')
      return {
        ...item,
        icon: iconMap[domain] || IconIcons
      }
    } catch (error) {
      // it's an email address
      return { ...item, link: 'mailto:' + item.link, icon: IconMail }
    }
  })
}
