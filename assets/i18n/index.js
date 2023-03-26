const RE_LANG_PATH = /^\.\/(\w+)\/([\w-]+)\.json$/
const requireAsset = require.context('.', true, /^\.\/(\w+)\/([\w-]+)\.json$/, 'lazy')

/**
 * Lazy-load lang data
 *
 * @param {string} section - The section of lang data to load
 * @param {string} lang    - The language name
 * @returns {Promise<object>} - The content of a lang JSON
 */
export default function loadLocale (section, lang) {
  return requireAsset(`./${section}/${lang}.json`)
}

export const langs = [
  ['en-US', 'English'],
  ['es-ES', 'Español'],
  ['ja-JP', '日本語'],
  ['zh-CN', '中文（中国大陆）'],
  ['zh-HK', '中文（香港）'],
  ['zh-TW', '中文（台灣）']
]
