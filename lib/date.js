import BLOG from '@/blog.config'
export function getPostDate(post) {
    return new Date(
        post?.date?.start_date ? (post?.date?.start_date + 'T00:00' + BLOG.timezone) : post.createdTime
    )
}