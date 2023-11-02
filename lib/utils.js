import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function isActivePath(pathname, path) {
  if (path === '/' && pathname !== path) {
    return false
  }
  return pathname.startsWith(path)
}

export const getBase64Image = async url => {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  const base64Data = btoa(String.fromCharCode(...new Uint8Array(buffer)))
  console.log(base64Data)
  return base64Data
}
