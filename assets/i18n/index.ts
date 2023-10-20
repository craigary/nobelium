// @ts-ignore
const requireAsset = require.context('.', true, /^\.\/(\w+)\/([\w-]+)\.json$/, 'lazy')

export type LocaleObject = {
  "NAV": {
    "INDEX": string;
    "RSS": string;
    "SEARCH": string;
    "ABOUT": string;
  },
  "PAGINATION": {
    "PREV": string;
    "NEXT": string;
  },
  "POST": {
    "BACK": string;
    "TOP": string;
  },
  "PAGE": {
    "ERROR_404": {
      "MESSAGE": string;
    }
  }
}

/**
 * Lazy-load lang data
 *
 * @param {string} section - The section of lang data to load
 * @param {string} lang    - The language name
 * @returns {Promise<object>} - The content of a lang JSON
 */
export default function loadLocale (section: string, lang: string) {
  return requireAsset(`./${section}/${lang}.json`)
}
