import { Children } from 'react'
import styles from './docs.module.css'
import Image from 'next/image'

export default function DocsLayout ({ children }) {
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
            <li>
              Home
            </li>
            <li>
              HeadMenu
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