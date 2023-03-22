import cn from 'classnames'

export default function Switch ({ checked, onChange, className, style }) {
  return (
    <span className={className} style={style}>
      <span className="flex relative">
        <input
          type="checkbox"
          checked={checked}
          className="absolute inset-0 w-full h-full opacity-0"
          onChange={ev => onChange(ev.target.checked)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="h-6">
          <path
            d="M 70 0 a 30 30 0 1 1 0 60 H 30 a 30 30 0 1 1 0 -60 Z"
            className={cn('fill-night dark:fill-day', { 'opacity-40': !checked })}
          />
          <circle
            cx={checked ? 100 - 30 : 30}
            cy="30"
            r="27.5"
            className="fill-day dark:fill-night transition-all duration-200"
          />
        </svg>
      </span>
    </span>
  )
}
