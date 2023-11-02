import Logo from '@/components/Logo'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import PageIcon from '@/components/notion/PageIcon'
import { getSocialLinks } from '@/lib/get-social-links'
import { getAvailablePages } from '@/lib/notion/get-available-pages'
import { getAvailableTags } from '@/lib/notion/get-available-tags'
import config from '@/nobelium.config'
import { Button, Divider } from '@nextui-org/react'
import { IconHome, IconPoint, IconSignature } from '@tabler/icons-react'
import Link from 'next/link'
import { idToUuid } from 'notion-utils'

const NavContent = async () => {
  const data = await getAvailablePages()
  let pages = []

  if (config.homePage) {
    const homePageUUID = idToUuid(config.homePage)
    const targetPage = data.find(item => item.id === homePageUUID)
    if (targetPage) {
      pages.push({
        id: 'blog',
        slug: 'blog',
        title: 'Blog',
        icon: {
          type: 'component',
          data: IconSignature
        }
      })
      pages.unshift(targetPage)
      pages.push(...data.filter(item => item.id !== homePageUUID))
    }
  } else {
    pages = [...data]
    pages.unshift({
      id: 'home',
      slug: '',
      icon: {
        type: 'component',
        data: IconHome
      },
      title: 'Home'
    })
  }

  const links = getSocialLinks()
  const tags = await getAvailableTags()

  return (
    <div className="h-full px-4 w-full flex flex-col">
      <div className="py-4">
        <Logo />
        <ThemeSwitcher />
      </div>
      <Divider />
      <ul className="py-4 space-y-1">
        {pages.map(item => (
          <li key={item.id}>
            <Button
              color="primary"
              variant="light"
              className="justify-start text-foreground px-2 py-2"
              fullWidth
              as={Link}
              href={`/${item.slug}`}
            >
              <PageIcon type={item.icon.type} data={item.icon.data} size={18} />
              {item.title}
            </Button>
          </li>
        ))}
      </ul>

      <Divider />
      <p className="text-xs mt-4 uppercase">Tags</p>

      <ul className="py-4 space-y-1">
        {tags.map((item, index) => {
          return (
            <li key={index}>
              <Button
                color="primary"
                variant="light"
                className="justify-start text-foreground px-2 py-2"
                fullWidth
                as={Link}
                href={`/search/${item}`}
              >
                <IconPoint size="18" stroke="1.5" />
                {item}
              </Button>
            </li>
          )
        })}
      </ul>

      <Divider />
      <p className="text-xs mt-4 uppercase">Social</p>
      <ul className="py-4 space-y-1">
        {links.map((item, index) => {
          const Icon = item.icon
          return (
            <li key={index}>
              <Button
                color="primary"
                variant="light"
                className="justify-start text-foreground px-2 py-2"
                fullWidth
                as={'a'}
                href={item.link}
                target="_blank"
              >
                <Icon size="18" stroke="1.5" />
                {item.title}
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavContent
