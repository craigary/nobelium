import BLOG from '@/blog.config'
const Footer = () => {
  const d = new Date()
  const y = d.getFullYear()
  return (
    <div className="mt-6 flex-shrink-0 m-auto max-w-3xl px-4 font-sans w-full text-gray-600">
      <hr />
      <div className="my-4 text-sm">
        <p>Built with ♥ and ⚛ Next.js. Proudly deployed on ▲Vercel.</p>
        <p>©{BLOG.since ? `${BLOG.since} - ${y}` : y} {BLOG.author}</p>
      </div>
    </div>
  )
}

export default Footer
