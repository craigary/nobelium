import { createContext, useContext, useEffect, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import cn from 'classnames'
import example from '@/blog.config.example'
import loadLocale from '@/assets/i18n'
import Container from '@/components/Container'
import Switch from '@/components/Switch'
import config from '@/lib/config'
import { get, set } from '@/lib/utils'

const INDENT = 20

const ConfigContext = createContext(undefined)
const LocaleContext = createContext(undefined)

export async function getStaticProps () {
  const { lang } = config()
  const locale = await loadLocale('configurator', lang)

  return {
    props: { locale }
  }
}

export default function PageConfigurator ({ locale }) {
  const [config, _setConfig] = useState(example)
  const entries = Object.entries(config)

  function setConfig (key, value) {
    _setConfig(prev => {
      const config = { ...prev }
      return set(config, [].concat(key), value)
    })
  }

  const [copyState, copyToClipboard] = useCopyToClipboard()
  const [copyStatus, setCopyStatus] = useState(null)
  useEffect(() => {
    if (copyState.error) {
      setCopyStatus(false)
    } else if (copyState.value != null) {
      setCopyStatus(true)
    }
    const timer = setTimeout(() => {
      setCopyStatus(null)
    }, 3e3)
    return () => clearTimeout(timer)
  }, [copyState])

  return (
    <Container>
      <ConfigContext.Provider value={{ config, setConfig }}>
        <LocaleContext.Provider value={ locale }>
          <div className="text-night dark:text-day relative">
            <header className="flex items-center">
              <h1 className="text-3xl font-bold text-black dark:text-white">Configurator</h1>
              <button
                type="button"
                className="px-3 py-1 ml-auto relative text-day dark:text-night bg-night dark:bg-day"
                onClick={() => copyToClipboard(JSON.stringify(config, null, 2))}
              >
              <span
                className={cn(
                  'transition duration-100',
                  copyStatus != null ? 'opacity-0' : 'delay-100'
                )}
              >
                Generate config
              </span>
                <span
                  className={cn(
                    'absolute inset-0 transition duration-100 flex justify-center items-center',
                    copyStatus == null ? 'opacity-0' : 'opacity-100 delay-100'
                  )}
                >
                {copyStatus == null ? null : copyStatus ? 'Copied!' : 'ERROR!'}
              </span>
              </button>
            </header>
            <p className="my-7">This is a GUI editor to generate the content of <code className="text-sm">blog.config.js</code>. It will NOT update your config file automatically. You will need to copy & paste the generated content to you config file.</p>
            <ConfigEntryGroup entries={entries} />
            {process.env.NODE_ENV === 'development' && (
              <pre className="absolute left-full top-0 p-2 text-xs leading-8">{JSON.stringify(config, null, 2)}</pre>
            )}
          </div>
        </LocaleContext.Provider>
      </ConfigContext.Provider>
    </Container>
  )
}

function ConfigEntryGroup ({ entries, parent = [] }) {
  return (
    <div className="space-y-2">
      {entries.map(entry => {
        const name = entry[0]
        return <ConfigEntry key={name} entry={entry} parent={parent} />
      })}
    </div>
  )
}

function resolveType (value) {
  const type = typeof value
  if (type === 'object') {
    switch (true) {
      case Array.isArray(value):
        return 'array'
      case value === null:
        return 'null'
    }
  }
  return type
}

function ConfigEntry ({ entry: [name, value], parent = [] }) {
  const { config, setConfig } = useContext(ConfigContext)
  const valueType = resolveType(value)
  const level = parent.length

  let content
  switch (valueType) {
    case 'string':
      content = (
        <input
          type="text"
          value={value}
          className="w-full px-2 py-1 bg-transparent border border-neutral-600"
          onInput={ev => setConfig(name, ev.target.value)}
        />
      )
      break
    case 'number':
      content = (
        <input
          type="number"
          value={String(value)}
          className="w-full px-2 py-1 bg-transparent border border-neutral-600"
          onChange={ev => setConfig(name, Number(ev.target.value))}
        />
      )
      break
    case 'boolean':
      content = (
        <div className="h-8 flex items-center">
          <Switch
            checked={Boolean(value)}
            onChange={checked => setConfig(name, checked)}
          />
        </div>
      )
      break
    case 'array':
      content = (
        <input
          type="text"
          defaultValue={value.join(', ')}
          className="w-full px-2 py-1 bg-transparent border border-neutral-600"
          onChange={ev => {
            setConfig(name, ev.target.value.split(/\s*,\s*/).filter(Boolean))
          }}
        />
      )
      break
    case 'object':
      return (
        <ConfigContext.Provider value={{
          config,
          setConfig: (key, value) => setConfig([].concat(name, key), value)
        }}>
          <div>
            <span className="leading-8" style={{ paddingLeft: INDENT * level + 'px' }}>{name}</span>
          </div>
          <ConfigEntryGroup entries={Object.entries(value)} parent={parent.concat(name)} />
        </ConfigContext.Provider>
      )
    default:
      content = <span style={{ color: '#f0f' }}>{valueType}</span>
  }

  return <ConfigEntryLayout name={name} parent={parent}>{content}</ConfigEntryLayout>
}

function ConfigEntryLayout ({ name, parent = [], children }) {
  const locale = useContext(LocaleContext)
  const description = get(locale, ['configurator', 'entry', ...parent, name, 'description'])
  const level = parent.length

  return (
    <div className="flex">
      <div className="flex-[1.5_1.5_0]">
        <code
          className="text-sm leading-8"
          style={{ paddingLeft: INDENT * level + 'px' }}
        >
          {name}
        </code>
        {description && (
          <p
            className="opacity-50"
            style={{ paddingLeft: INDENT * level + 'px' }}
          >
            {description}
          </p>
        )}
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
