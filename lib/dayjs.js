import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import BLOG from '@/blog.config'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault(BLOG.timezone)

export default dayjs
