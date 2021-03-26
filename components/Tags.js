const Tags = ({ tags, handleTagClick, selectedTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto">
        {Object.keys(tags).map(key => (
          <li
            key={key}
            onClick={() => handleTagClick(key)}
            className={`mr-3 py-2 font-medium cursor-pointer  border px-4 whitespace-nowrap bg-gray-100 border-gray-100 text-gray-400 dark:bg-night dark:border-gray-800 dark:text-gray-300 ${
              key === selectedTag
                ? 'text-white bg-black border-black dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300'
                : ''
            }`}
          >
            {`${key} (${tags[key]})`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
