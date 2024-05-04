'use client'

import Image from 'next/image'
import styles from '../app/docs/docs.module.css'
import reactdeeLogo from '../../public/reactdee_logo.png'
// import brunodiazLogo from '../../public/logoBD_ico_192.png'
import { useState } from 'react'

export default function Header () {
  // const [isBDLogo, setIsBDLogo] = useState(false)
  return (
    <header className={styles.header}>
      <Image
        alt='ReactDee Logo'
        src={reactdeeLogo}
        width='40'
        height='40'
      />
      <div className={styles.headerTitle}>
        <span>ReactDee</span>
        <a
          href='https://brunodiaz.es'
          target='blank'
        // onMouseOver={() => { setIsBDLogo(true) }}
        // onMouseOut={() => { setIsBDLogo(false) }}
        >
          By BrunoDiaz.es
        </a>
      </div>
    </header>
  )
}