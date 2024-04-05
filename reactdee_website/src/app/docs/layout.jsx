'use client'

import { Children } from 'react'
import styles from './docs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DocsLayout ({ children }) {
  const pathname = usePathname()
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

      <div className={styles.main}>
        <div>
          <ul className={styles.componentsList}>
            <b className={styles.sideTitles}>
              Places
            </b>
            {
              links.map(link => (
                <li
                  key={link.href}
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