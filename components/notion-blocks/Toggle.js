import { Text } from 'react-notion-x'

export default function Toggle ({ block, children }) {
  return (
    <details className="w-full mt-4 border border-dashed border-violet-600">
      <summary className="relative">
        <Text value={block.properties?.title} block={block} />
        <span className="text-xs absolute top-0 right-0 text-gray-400">Rendered by Nobelium</span>
      </summary>
      <div>
        {children}
      </div>
    </details>
  )
}
