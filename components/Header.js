import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row font-sans">
        {links.map(link => (
          link.show && (
            <li key={link.id} className="block ml-4">
            <Link href={link.to}>
              <a>{link.name}</a>
            </Link>
          </li>
          )
        ))}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle }) => {
  const navRef = useRef(null)
  const sentinalRef = useRef(null)
  const handler = ([entry]) => {
    if (navRef && navRef.current) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('sticky-nav-full')
      } else {
        navRef.current.classList.remove('sticky-nav-full')
      }
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className="sticky-nav m-auto max-w-3xl w-full h-6 flex flex-row justify-between items-center mb-1 md:mb-8 px-4 py-8 bg-opacity-60"
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex">
          <Link href="/">
            <div className="h-6">
              <Image src="/logo.svg" width={24} height={24} alt="Craigary" />
            </div>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 header-name font-medium">{navBarTitle}</p>
              )
            : (
            <p className="ml-2 header-name font-medium">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
