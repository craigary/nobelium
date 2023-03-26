/**
 * A simplified version of `Lodash.get()`
 */
export function get (obj, keyPath, defValue) {
  if (typeof keyPath === 'string') {
    keyPath = keyPath.split('.')
  }
  let current = obj
  for (const key of keyPath) {
    current = current?.[key]
    if (current == null) break
  }
  return current === undefined ? defValue : current
}

/**
 * A simplified version of `Lodash.set()`
 */
export function set (obj, keyPath, value) {
  if (typeof keyPath === 'string') {
    keyPath = keyPath.split('.')
  }
  keyPath = keyPath.slice()
  const lastKey = keyPath.pop()
  let current = obj
  for (const key of keyPath) {
    current[key] ??= {}
    current = current[key]
  }
  current[lastKey] = value
  return obj
}

/**
 * Stupidly clone a JSON object
 */
export function clone (obj) {
  return JSON.parse(JSON.stringify(obj))
}
