'use client'

import styles from './docs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function DocsLayout ({ children }) {
  const pathname = usePathname()
  const [responsiveOpened, setResponsiveOpened] = useState(false)
  const [responsiveMenuText, setResponsiveMenuText] = useState('Places')
  const responsiveComponentsList = useRef()

  useEffect(() => {
    responsiveComponentsList.current.style.display = responsiveOpened ? 'flex' : 'none'
    setResponsiveMenuText(!responsiveOpened ? '- Places -' : '- Close -')
  }, [responsiveOpened])
  const links = [
    {
      title: 'Home',
      href: '/docs/home'
    },
    {
      title: 'HeadMenu',
      href: '/docs/headmenu'
    },
    {
      title: 'FloatMenu',
      href: '/docs/floatmenu'
    },
    {
      title: 'Gallery',
      href: '/docs/gallery'
    },
    {
      title: 'CodeBox',
      href: '/docs/codebox'
    }
  ]
  return (
    <div>

      <header className={styles.header}>
        <Image
          alt='ReactDee Logo'
          src="/reactdee_logo.png"
          width='40'
          height='40'
        />
        <span>ReactDee</span>
      </header>
      <hr />

      <nav className={styles.responsiveMenuContainer}>
        <div className={styles.responsiveMenu}>
          <b
            className={styles.responsiveMenuTitle}
            onClick={() => { setResponsiveOpened(!responsiveOpened) }}
          >
            {responsiveMenuText}
          </b>
          <ul
            className={styles.componentsList}
            ref={responsiveComponentsList}
          >
            {
              links.map(link => (
                <li
                  key={link.href}
                  style={{ color: (pathname == link.href) ? 'var(--enfasis-color)' : '', fontWeight: (pathname == link.href) ? '800' : '' }}
                >
                  <Link
                    href={link.href}
                    onClick={() => { setResponsiveOpened(false); console.log(responsiveOpened) }}
                  >
                    {link.title}
                  </Link>

                </li>
              ))
            }
          </ul>
          <hr />
        </div>
      </nav>

      <div className={styles.main}>
        <div className={styles.generalMenu}>
          <b className={styles.sideTitles}>
            Places
          </b>
          <ul className={styles.componentsList}>
            {
              links.map(link => (
                <li
                  key={link.href}
                  style={{ color: (pathname == link.href) ? 'var(--enfasis-color)' : '', fontWeight: (pathname == link.href) ? '800' : '' }}
                >
                  <Link
                    href={link.href}
                  >
                    {link.title}
                  </Link>

                </li>
              ))
            }
          </ul>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div >
  )
}