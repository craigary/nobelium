'use client'
import { notionImageLoader } from '@/lib/image-loader/notion.js'
import Image from 'next/image'

const ImageIcon = ({ src, size, className }) => {
  return (
    <Image
      src={src}
      height={size}
      width={size}
      alt=""
      className={className}
      loader={notionImageLoader}
    />
  )
}

export default ImageIcon
