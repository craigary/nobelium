import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export function prepareDayjs (timezone) {
  dayjs.tz.setDefault(timezone)
}

export default dayjs
