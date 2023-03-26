import { clientConfig } from '@/lib/server/config'

import { createContext, useContext, useEffect, useState } from 'react'
import { useCopyToClipboard } from 'react-use'
import cn from 'classnames'
import example from '@/blog.config.example'
import loadLocale, { langs } from '@/assets/i18n'
import Container from '@/components/Container'
import Switch from '@/components/Switch'
import Select from '@/components/Select'
import TextInput from '@/components/TextInput'
import NumberInput from '@/components/NumberInput'
import ColorInput from '@/components/ColorInput'
import { clone, get, set } from '@/lib/utils'

const INDENT = 20

// Override some entries for special behaviors
const overrides = {
  lightBackground: { type: 'color' },
  darkBackground: { type: 'color' },
  lang: { type: 'select', options: langs },
  appearance: { type: 'select', options: ['auto', 'light', 'dark'] },
  font: { type: 'select', options: ['sans-serif', 'serif'] },
  'analytics.provider': { type: 'select', options: ['', 'ga', 'ackee'] },
  'analytics.gaConfig': { when: ['analytics.provider', 'ga'] },
  'analytics.ackeeConfig': { when: ['analytics.provider', 'ackee'] },
  'comment.provider': { type: 'select', options: ['', 'gitalk', 'utterances', 'cusdis'] },
  'comment.gitalkConfig': { when: ['comment.provider', 'gitalk'] },
  'comment.utterancesConfig': { when: ['comment.provider', 'utterances'] },
  'comment.cusdisConfig': { when: ['comment.provider', 'cusdis'] }
}

const ConfigContext = createContext(undefined)
const LocaleContext = createContext(undefined)

export async function getStaticProps () {
  const { lang } = clientConfig
  const locale = await loadLocale('configurator', lang)

  return {
    props: {
      defaultLang: lang,
      defaultLocale: locale
    }
  }
}

export default function PageConfigurator ({ defaultLang, defaultLocale }) {
  // Locale data

  const [lang, _setLang] = useState(defaultLang)
  const [locale, setLocale] = useState(defaultLocale)

  async function setLang (lang) {
    setLocale(await loadLocale('configurator', lang))
    _setLang(lang)
  }

  // Config data

  const [config, _setConfig] = useState(clone(example))
  const entries = Object.entries(config)

  function setConfig (key, value) {
    _setConfig(prev => {
      const config = { ...prev }
      return set(config, [].concat(key), value)
    })
  }

  // Copy to clipboard

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
      <LocaleContext.Provider value={ locale }>
        <ConfigContext.Provider value={{ config, setConfig }}>
          <div className="text-night dark:text-day relative">
            <header className="flex items-center">
              <h1 className="text-3xl font-bold text-black dark:text-white">Configurator</h1>
              <button
                type="button"
                className="box-content min-w-[1.5rem] px-3 py-1 ml-auto relative text-day dark:text-night bg-night dark:bg-day"
                onClick={() => copyToClipboard(JSON.stringify(config, null, 2))}
              >
                <span className={cn(
                  'transition duration-100',
                  copyStatus != null ? 'opacity-0' : 'delay-100'
                )}>
                  {get(locale, 'configurator.action.generate')}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={cn(
                    'w-6 h-6 absolute inset-0 m-auto fill-current transition duration-100',
                    copyStatus == null ? 'opacity-0' : 'opacity-100 delay-100'
                  )}
                >
                  {copyStatus != null && (
                    copyStatus
                      ? <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                      : (
                        <path
                          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"
                          className="fill-red-500 dark:fill-red-600"
                        />
                      )
                  )}
                </svg>
              </button>
            </header>
            <Select value={lang} className="block w-24 mt-4" onChange={value => setLang(value)}>
              {langs.map(lang => <option key={lang} value={lang}>{lang}</option>)}
            </Select>
            <p className="my-7" dangerouslySetInnerHTML={{ __html: get(locale, 'configurator.description') }} />
            <ConfigEntryGroup entries={entries} />
            {process.env.NODE_ENV === 'development' && (
              <pre className="absolute left-full top-0 p-2 text-xs leading-8">{JSON.stringify(config, null, 2)}</pre>
            )}
          </div>
        </ConfigContext.Provider>
      </LocaleContext.Provider>
    </Container>
  )
}

function ConfigEntryGroup ({ entries, parent = [] }) {
  return (
    <div className="space-y-3">
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
  const locale = useContext(LocaleContext)
  const level = parent.length
  const keyPath = parent.concat(name).join('.')
  const override = overrides[keyPath]
  const exampleValue = clone(get(example, keyPath))
  const valueType = override?.when && get(config, override.when[0]) !== override.when[1]
    ? null
    : override?.type ?? resolveType(exampleValue)

  useEffect(
    () => {
      if (override?.when) {
        if (valueType) {
          if (get(config, keyPath) === undefined) {
            setConfig(name, exampleValue)
          }
        } else {
          setConfig(name, undefined)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [keyPath, valueType]
  )

  let content
  switch (valueType) {
    case 'string':
      content = (
        <TextInput value={value} onChange={value => setConfig(name, value)} />
      )
      break
    case 'number':
      content = (
        <NumberInput value={value} onChange={value => setConfig(name, value)} />
      )
      break
    case 'boolean':
      content = (
        <div className="h-8 flex items-center">
          <Switch checked={Boolean(value)} onChange={checked => setConfig(name, checked)} />
        </div>
      )
      break
    case 'array':
      content = (
        <TextInput
          value={value.join(', ')}
          onChange={value => setConfig(name, value.split(/\s*,\s*/).filter(Boolean))}
        />
      )
      break
    case 'color':
      content = (
        <ColorInput value={value} onChange={value => setConfig(name, value)} />
      )
      break
    case 'select':
      content = (
        <Select value={value} onChange={value => setConfig(name, value)}>
          {override.options.map(value => (
            <option key={value} value={value}>{value}</option>
          ))}
        </Select>
      )
      break
    case 'object': {
      const description = get(locale, ['configurator', 'entry', ...parent, name, 'description'])

      return (
        <ConfigContext.Provider
          value={{
            config,
            setConfig: (key, value) => setConfig([].concat(name, key), value)
          }}
        >
          <div className="text-sm">
            <code style={{ paddingLeft: INDENT * level + 'px' }}>{name}</code>
            {description && (
              <p className="opacity-50" style={{ paddingLeft: INDENT * level + 'px' }}>
                {description}
              </p>
            )}
          </div>
          <ConfigEntryGroup
            entries={Object.entries(value || exampleValue)}
            parent={parent.concat(name)}
          />
        </ConfigContext.Provider>
      )
    }
  }

  return content && <ConfigEntryLayout name={name} parent={parent}>{content}</ConfigEntryLayout>
}

function ConfigEntryLayout ({ name, parent = [], children }) {
  const locale = useContext(LocaleContext)
  const description = get(locale, ['configurator', 'entry', ...parent, name, 'description'])
  const level = parent.length

  return (
    <div className="flex">
      <div className="flex-[1.5_1.5_0] text-sm">
        <code style={{ paddingLeft: INDENT * level + 'px' }}>{name}</code>
        {description && (
          <p className="pr-5 opacity-50" style={{ paddingLeft: INDENT * level + 'px' }}>
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
