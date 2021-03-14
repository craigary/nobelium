export default function formatDate (date, local) {
  const d = new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return d.toLocaleDateString(local, options)
}
