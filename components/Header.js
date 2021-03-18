import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'

const NavBar = () => {
  const links = [
    { id: 0, name: 'Blog', to: BLOG.path || '/', show: true },
    { id: 1, name: 'About', to: '/about', show: BLOG.showAbout },
    { id: 2, name: 'RSS', to: '/feed', show: true },
    { id: 3, name: 'Search', to: '/search', show: true }
  ]
  return (
    <div>
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
              <Image src="/logo.svg" width={24} height={24} alt={BLOG.author} />
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
