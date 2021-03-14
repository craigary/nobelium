import Link from 'next/link'
import BLOG from '@/blog.config'

const Pagination = ({ totalPages, page }) => {
  const currentPage = +page
  return (
    <div className="flex justify-between">
      <Link href={ currentPage - 1 === 1 ? `${BLOG.path || '/'}` : `/page/${currentPage - 1}`}>
        <p className={currentPage === 1 ? 'invisible' : 'block'}>
          <a rel="prev">← Prev</a>
        </p>
      </Link>
      <Link href={`/page/${currentPage + 1}`}>
        <p className={currentPage === totalPages ? 'invisible' : 'block'}>
          <a rel="next">Next →</a>
        </p>
      </Link>
    </div>
  )
}

export default Pagination
