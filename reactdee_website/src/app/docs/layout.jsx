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
      href: '/docs'
    },
    {
      title: 'HeadMenu',
      href: '/docs/headmenu'
    },
    {
      title: 'FloatMenu',
      href: '/docs'
    },
    {
      title: 'Gallery',
      href: '/docs'
    },
    {
      title: 'CodeBox',
      href: '/docs'
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
            {
              links.map(link => (
                <li
                  key={link.href}
                >
                  <Link
                    href={link.href}

                  >
                    aas
                  </Link>

                </li>
              ))
            }
            <li>
              <Link href={'/docs'}>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/docs/headmenu'}>
                HeadMenu
              </Link>
            </li>
            <li>
              FloatMenu
            </li>
            <li>
              Gallery
            </li>
            <li>
              CodeBox
            </li>
          </ul>
        </div>

        <div>
          {children}
        </div>
      </div>
    </div >
  )
}