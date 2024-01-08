const cusdisI18n = [
  'ca',
  'en',
  'es',
  'fi',
  'fr',
  'id',
  'ja',
  'oc',
  'pt-br',
  'tr',
  'zh-cn',
  'zh-tw'
]

export const fetchCusdisLang = lang => {
  const loweredLang = lang.toLowerCase()
  if (loweredLang.startsWith('zh')) {
    return (
      cusdisI18n.find(i => loweredLang === i.toLocaleLowerCase()) ?? 'zh-cn'
    )
  } else {
    return (
      cusdisI18n.find(i =>
        loweredLang.startsWith(i.toLowerCase())
      ) ?? 'en'
    )
  }
}
