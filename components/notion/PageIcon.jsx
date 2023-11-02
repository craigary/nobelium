import ImageIcon from '@/components/notion/ImageIcon'
import { IconIcons } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'

const PageIcon = async ({ type, data, size }) => {
  switch (type) {
    case 'emoji':
      return <span style={{ fontSize: size + 'px' }}>{data}</span>
    case 'component':
      const Icon = data
      return <Icon size={size} stroke="1.5" />
    case 'notion-icon':
      return (
        <Image src={data} height={size} width={size} alt="" className="grayscale brightness-0" />
      )
    case 'image':
      return <ImageIcon size={size} src={data} />
    default:
      return <IconIcons size={size} stroke="1.5" />
  }
}

export default PageIcon
