import { useState } from 'react'

const Tags = ({ tags, handleTagClick, selectedTag }) => {
  // const colorPalette = ['yellow-400', 'blue-400', 'purple-400', 'pink s-400']
  // const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
  // const ClassToReturn = `border-${color} text-${color} bg-${color}`
  if (!tags) return null
  return (
    <ul className="flex max-w-full overflow-x-auto">
      {Object.keys(tags).map(key => (
        <li
          key={key}
          onClick={() => handleTagClick(key)}
          className={`mr-2 px-2 py-1 my-3 font-medium cursor-pointer rounded-full border-2 bg-opacity-0 border-blue-200 text-black bg-blue-400 whitespace-nowrap ${key === selectedTag ? 'bg-opacity-30' : ''}`}
        >
          {`${key} (${tags[key]})`}
        </li>
      ))}
    </ul>
  )
}

export default Tags
