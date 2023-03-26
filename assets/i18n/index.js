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

export const langs = requireAsset.keys()
  .map(key => RE_LANG_PATH.exec(key)?.slice(2))
  .filter(Boolean)
