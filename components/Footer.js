import BLOG from '@/blog.config'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto font-noEmoji w-full text-gray-500 dark:text-gray-500 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6 font-medium">
        <p>
          <a
            href="https://github.com/craigary/nobelium"
            target="_blank"
            rel="noreferrer"
          >
            Nobelium
          </a>{' '}
          is built with ♥ and ⚛ Next.js. Proudly deployed on ▲Vercel.
        </p>
        <p>
          © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
        </p>
      </div>
    </div>
  )
}

export default Footer
