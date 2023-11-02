'use client'
import { NotionRenderer } from 'react-notion-x'

const Content = ({ block }) => {
  return <NotionRenderer recordMap={block} fullPage={true} darkMode={false} />
}

export default Content
