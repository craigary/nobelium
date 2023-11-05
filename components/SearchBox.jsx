'use client'
import { Input } from '@nextui-org/react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const createUrl = (pathname, params) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}

const SearchBox = () => {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const handleInputChange = event => {
    const value = event.target.value
    params.set('key', value)
    const newUrl = createUrl(path, params)
    console.log(newUrl)
    router.replace({ href: newUrl })
  }
  return (
    <Input
      type="text"
      label="Search"
      defaultValue={searchParams.get('key') ?? ''}
      onChange={handleInputChange}
    />
  )
}

export default SearchBox
