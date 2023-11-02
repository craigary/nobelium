'use client'
import { Chip } from '@nextui-org/react'
import { useParams, useRouter } from 'next/navigation'

const TagChips = ({ tags }) => {
  const router = useRouter()
  const params = useParams()
  const tagName = params?.tag?.[0]?.toLowerCase()

  const handleChipClick = item => {
    if (item.toLowerCase() === tagName) {
      router.push(`/search`)
    } else {
      router.push(`/search/${item}`)
    }
  }

  return (
    <div className="flex gap-2">
      {tags.map((item, index) => (
        <Chip
          key={index}
          color="secondary"
          variant={item.toLowerCase() === tagName ? 'solid' : 'flat'}
          className="cursor-default"
          onClick={() => handleChipClick(item)}
        >
          {item}
        </Chip>
      ))}
    </div>
  )
}

export default TagChips
