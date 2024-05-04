
// 'use client'

import Link from 'next/link'
import styles from "./page.module.css"


export default function Error () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
      <h1>
        UPS... Something went wrong
      </h1>
      <p>
        We cannot find the requested site.
      </p>
      <div className={styles.welcomeButtonsContainer}>

        <Link href={'/docs/home'}>
          Return to docs.
        </Link>
      </div>
    </div>
  )
}