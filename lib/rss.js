import { Feed } from 'feed'
import BLOG from '@/blog.config'

export function generateRss (posts) {
  const year = new Date().getFullYear()
  const feed = new Feed({
    title: BLOG.title,
    description: BLOG.description,
    id: `${BLOG.link}/${BLOG.path}`,
    link: `${BLOG.link}/${BLOG.path}`,
    language: BLOG.lang,
    // image: `${BLOG.link}/image.png`,
    favicon: `${BLOG.link}/favicon.png`,
    copyright: `All rights reserved ${year}, ${BLOG.author}`,
    author: {
      name: BLOG.author,
      email: BLOG.email,
      link: BLOG.link
    }
  })
  posts.forEach(post => {
    feed.addItem({
      title: post.Title,
      id: `${BLOG.link}/${post.Slug}`,
      link: `${BLOG.link}/${post.Slug}`,
      description: post.summary,
      date: new Date(post.date)
    })
  })
  return feed.rss2()
}
