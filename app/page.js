import { getAvailablePosts } from '@/lib/notion/get-available-posts'

export default async function Home() {
  const res = await getAvailablePosts()

  // if (config.homePage) {
  //   const targetPage = res.find(item => item.id === config.homePage)
  //   // if (targetPage) {
  //   //   redirect(targetPage.slug)
  //   // }
  // }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="">
        <ul>
          {res.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
