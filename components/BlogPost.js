import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-col justify-between md:flex-row md:items-baseline">
        <Link href={`${BLOG.path}/${post.slug}`}>
          <h2 className="font-sans text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
            <a>{post.title}</a>
          </h2>
        </Link>
        <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
          {formatDate(post.date, BLOG.lang)}
        </time>
      </header>
      <main>
        <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
          {post.summary}
        </p>
      </main>
    </article>
  )
}

export default BlogPost
