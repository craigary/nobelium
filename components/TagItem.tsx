import Link from 'next/link'

const TagItem: React.FC<{ tag: string | number | boolean; }> = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <p className="mr-1 rounded-full px-2 py-1 border leading-none text-sm dark:border-gray-600">
      {tag}
    </p>
  </Link>
)

export default TagItem
