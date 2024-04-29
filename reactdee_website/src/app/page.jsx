'use client'

import Image from "next/image"
import styles from "./page.module.css"
import Link from 'next/link'

export default function Home () {
  return (
    <main className={styles.main}>
      {/* <div> */}
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/reactdee_logo.png"
          alt="ReactDee Logo"
          width={110}
          height={110}
          priority
        />
        <p>ReactDee <span>By BrunoDiaz.es</span></p>
      </div>


      <div>

        <div className={styles.welcomeText}>
          <p>
            Simply, easy, and ready for use React Components for your apps.
          </p>
        </div>
        <div className={styles.welcomeButtonsContainer}>
          <Link className={styles.getStartedButton} href={'/docs'}>
            {'Get Started'}
          </Link>
          <Link className={styles.welcomeButtons} href={'https://github.com/bdiaz-dev/reactdee'} target='blank'>
            GitHub Repo
          </Link>
          <Link className={styles.welcomeButtons} href={'http://brunodiaz.es'} target='blank'>
            Meet me
          </Link>
        </div>

      </div>
    </main>
  )
}
