import BLOG from '@/blog.config'

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

const loweredLang = BLOG.lang.toLowerCase()

export const fetchCusdisLang = () => {
  if (BLOG.comment.provider !== 'cusdis') return null
  if (loweredLang.startsWith('zh')) {
    return (
      cusdisI18n.find(i => loweredLang === i.toLocaleLowerCase()) ?? 'zh-cn'
    )
  } else {
    return (
      cusdisI18n.find(i =>
        BLOG.lang.toLowerCase().startsWith(i.toLowerCase())
      ) ?? 'en'
    )
  }
}
