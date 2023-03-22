import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import config from '@/lib/config'

const BLOG = config()

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault(BLOG.timezone)

export default dayjs
