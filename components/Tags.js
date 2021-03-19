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
          className={`mr-3 py-2 my-3 font-medium cursor-pointer  border px-4 bg-gray-100 border-gray-100 text-gray-400 whitespace-nowrap ${
            key === selectedTag ? 'text-white bg-black border-black' : ''
          }`}
        >
          {`${key} (${tags[key]})`}
        </li>
      ))}
    </ul>
  )
}

export default Tags
