export default function ColorInput ({ value, onChange, className, style }) {
  return (
    <span className={className} style={style}>
      <span className="h-8 border border-night dark:border-day focus-within:ring-2 ring-blue-500 dark:ring-blue-400 flex">
        <span className="flex-1 w-10 border-r border-night dark:border-day relative" style={{ background: value }}>
          <input
            type="color"
            value={value}
            className="absolute inset-0 w-full h-full opacity-0"
            onChange={ev => onChange(ev.target.value)}
          />
        </span>
        <label className="flex-none px-2 text-night dark:text-day bg-day dark:bg-night flex">
          <code className="flex-none self-center mr-1 text-gray-500 dark:text-gray-400">#</code>
          <input
            type="text"
            value={value?.slice(1)}
            className="w-16 font-mono bg-transparent border-0 outline-none"
            onChange={ev => onChange('#' + ev.target.value)}
          />
        </label>
      </span>
    </span>
  )
}
