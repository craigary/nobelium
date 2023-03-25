export default function TextInput ({ value, onChange, className, style }) {
  return (
    <span className={className} style={style}>
      <span className="h-8 text-night dark:text-day bg-day dark:bg-night border border-night dark:border-day focus-within:ring-2 ring-blue-500 dark:ring-blue-400 flex">
        <input
          type="text"
          value={value}
          className="w-full px-2 bg-transparent outline-none"
          onChange={ev => onChange(ev.target.value)}
        />
      </span>
    </span>
  )
}
