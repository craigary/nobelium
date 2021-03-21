import BLOG from '@/blog.config'
const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()
  return (
    <div className="mt-6 flex-shrink-0 m-auto max-w-3xl px-4 font-noEmoji w-full text-gray-600 dark:text-gray-400">
      <hr className="dark:border-gray-600" />
      <div className="my-4 text-sm leading-6 font-medium">
        <p><a href="https://github.com/craigary/nobelium" target="_blank" rel="noreferrer">Nobelium</a> is built with ♥ and ⚛ Next.js. Proudly deployed on ▲Vercel.</p>
        <p>
          © {BLOG.author}{' '}
          {BLOG.since === y || !BLOG.since ? y : `${BLOG.since} - ${y}`}
        </p>
      </div>
    </div>
  )
}

export default Footer
