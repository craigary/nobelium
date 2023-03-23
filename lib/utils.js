/**
 * A simplified version of `Lodash.get()`
 */
export function get (obj, keyPath, defValue) {
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
