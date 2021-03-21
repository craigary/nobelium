import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ page, showNext }) => {
  const locale = useLocale()
  // console.log(locale)
  const currentPage = +page
  return (
    <div className="flex justify-between font-medium text-black dark:text-gray-100">
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <a
          rel="prev"
          className={`${
            currentPage === 1 ? 'invisible' : 'block'
          } cursor-pointer`}
        >
          ← {locale.PAGINATION.PREV}
        </a>
      </Link>
      <Link href={`/page/${currentPage + 1}`}>
        <a
          rel="next"
          className={`${+showNext ? 'block' : 'invisible'} cursor-pointer`}
        >
          {locale.PAGINATION.NEXT} →
        </a>
      </Link>
    </div>
  )
}

export default Pagination
