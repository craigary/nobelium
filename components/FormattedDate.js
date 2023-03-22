'use client'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import config from '@/lib/config'

dayjs.extend(localizedFormat)

const BLOG = config()
const lang = BLOG.lang.slice(0, 2)
import(`dayjs/locale/${lang}`)
  .then(() => {
    dayjs.locale(BLOG.lang.slice(0, 2))
  })
  .catch(() => console.warn(`dayjs locale \`${lang}\` not found`))

export default function FormattedDate ({ date }) {
  return <span>{dayjs(date).format('ll')}</span>
}
